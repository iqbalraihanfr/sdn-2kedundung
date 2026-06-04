import { schoolProfileService } from '@/features/school-profile/services'
import { SchoolProfileForm } from '@/features/school-profile/components/SchoolProfileForm'
import { School } from 'lucide-react'

export const metadata = {
  title: 'Profil Sekolah | SIPANDA Admin',
}

export default async function ProfilPage() {
  const profile = await schoolProfileService.getProfile()

  return (
    <div className="max-w-3xl space-y-5 sm:space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="flex items-center gap-2 text-xl font-bold text-zinc-900 dark:text-zinc-100 sm:text-2xl">
            <School className="h-6 w-6 text-brand-500" />
            Profil Sekolah
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 mt-1">Ubah informasi dasar SDN Kedundung 2.</p>
        </div>
      </div>

      <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-sm">
        <SchoolProfileForm initialData={profile} />
      </div>
    </div>
  )
}
