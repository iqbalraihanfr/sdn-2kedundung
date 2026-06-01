'use client'

import { useActionState } from 'react'
import { loginAction } from '../actions'

const initialState = { error: '' }

export function LoginForm() {
  const [state, formAction, isPending] = useActionState(
    async (prevState: any, formData: FormData) => {
      const result = await loginAction(formData)
      if (result?.error) {
        return { error: result.error }
      }
      return { error: '' }
    },
    initialState
  )

  return (
    <div className="w-full max-w-md bg-white rounded-lg shadow-sm border border-zinc-200 p-8 dark:bg-zinc-900 dark:border-zinc-800">
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">SIPANDA Admin</h1>
        <p className="text-sm text-zinc-500 mt-2">Masuk ke panel manajemen SDN Kedundung 2</p>
      </div>

      <form action={formAction} className="space-y-4">
        {state?.error && (
          <div className="p-3 text-sm text-red-600 bg-red-50 rounded-md border border-red-200 dark:bg-red-900/30 dark:border-red-900 dark:text-red-400">
            {state.error}
          </div>
        )}

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="admin@sdnkedundung2.sch.id"
            className="w-full px-3 py-2 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-100"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Kata Sandi
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            autoComplete="current-password"
            className="w-full px-3 py-2 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-100"
          />
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isPending ? 'Sedang masuk...' : 'Masuk'}
        </button>
      </form>
    </div>
  )
}
