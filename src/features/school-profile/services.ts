import { schoolProfileQueries } from './queries'
import type { SchoolProfileInput } from './schemas'

export const schoolProfileService = {
  async getProfile() {
    return schoolProfileQueries.getProfile()
  },

  async updateProfile(input: SchoolProfileInput) {
    return schoolProfileQueries.upsertProfile(input)
  },
}
