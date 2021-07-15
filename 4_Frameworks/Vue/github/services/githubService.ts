import { MemberDetailEntity, MemberEntity } from '@/types'
import { NuxtAxiosInstance } from '@nuxtjs/axios'

export default ($axios: NuxtAxiosInstance) => (resource: string) => ({
  getMembers(
    orgName: string,
    itemsPerPage: number,
    currentPage: number
  ): Promise<MemberEntity[]> {
    return $axios.$get(
      `${resource}/orgs/${orgName}/members?per_page=${itemsPerPage}&page=${currentPage}`
    )
  },
  getMember(id: string): Promise<MemberDetailEntity> {
    return $axios.$get(`${resource}/users/${id}`)
  },
})
