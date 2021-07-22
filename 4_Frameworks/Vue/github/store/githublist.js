export const state = () => ({
  orgName: 'lemoncode',
  pageNumber: 1
})

export const mutations = {
  setOrgName(state, orgName) {
    state.orgName = orgName
  },
  setPageNumber(state, pageNumber) {
    state.pageNumber = pageNumber;
  }
}
