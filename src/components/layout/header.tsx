import { cookies } from 'next/headers'

export async function Header() {
  const cookieStore = await cookies()
  const email = cookieStore.get('sipanda-auth')?.value

  return (
    <header className="h-16 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-end px-6 sticky top-0 z-10">
      <div className="flex items-center gap-3">
        <div className="text-sm text-right">
          <p className="font-medium text-zinc-900 dark:text-zinc-100">Administrator</p>
          <p className="text-zinc-500 dark:text-zinc-400 text-xs">{email}</p>
        </div>
        <div className="h-9 w-9 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center text-brand-700 dark:text-brand-300 font-bold">
          A
        </div>
      </div>
    </header>
  )
}
