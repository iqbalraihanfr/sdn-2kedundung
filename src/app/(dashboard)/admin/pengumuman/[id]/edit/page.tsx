import { notFound } from 'next/navigation'
import { AnnouncementForm } from '@/features/announcements/components/AnnouncementForm'
import { announcementService } from '@/features/announcements/services'

export const metadata = {
  title: 'Edit Pengumuman | SIPANDA Admin',
}

export default async function EditPengumumanPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const announcement = await announcementService.getById(id).catch(() => null)
  if (!announcement) notFound()

  return <AnnouncementForm announcement={announcement} />
}
