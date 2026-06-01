'use server'

import { revalidatePath } from 'next/cache'
import { requireAdminEmail } from '@/lib/auth'
import { galleryService } from './services'
import { storageService } from '@/services/storage.service'

export async function createGalleryAction(formData: FormData) {
  try {
    await requireAdminEmail()
    const image = formData.get('image') as File | null
    const caption = formData.get('caption') as string || ''

    if (!image || image.size === 0) {
      return { error: 'Gambar wajib diunggah' }
    }
    // 1. Upload gambar ke storage
    const imageUrl = await storageService.uploadImage(image, 'galeri')

    // 2. Simpan ke database
    await galleryService.create({ imageUrl, caption })
    
    revalidatePath('/admin/galeri')
    revalidatePath('/')
    return { success: true }
  } catch (err) {
    return { error: err instanceof Error ? err.message : 'Terjadi kesalahan saat mengunggah' }
  }
}

export async function deleteGalleryAction(id: string) {
  try {
    await requireAdminEmail()
    const gallery = await galleryService.getById(id)
    
    // 1. Hapus gambar dari storage
    await storageService.deleteImage(gallery.imageUrl)
    
    // 2. Hapus dari database
    await galleryService.delete(id)
    
    revalidatePath('/admin/galeri')
    revalidatePath('/')
    return { success: true }
  } catch (err) {
    return { error: err instanceof Error ? err.message : 'Terjadi kesalahan' }
  }
}
