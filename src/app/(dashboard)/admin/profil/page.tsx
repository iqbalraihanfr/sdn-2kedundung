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
      <div className="page-hero animate-fade-in-up">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-lg shadow-emerald-500/20">
            <School size={24} className="text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-primary sm:text-4xl">Profil Sekolah</h1>
            <p className="mt-1 text-sm text-text-secondary sm:text-base">Ubah informasi dasar SDN Kedundung 2.</p>
          </div>
        </div>
      </div>

      <div className="section-card overflow-hidden animate-fade-in-up animate-delay-100">
        <SchoolProfileForm initialData={profile} />
      </div>
    </div>
  )
}
