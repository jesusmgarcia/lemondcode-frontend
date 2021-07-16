export const state = () => ({
  orgName: ""
})

export const mutations = {
  setOrgName(orgName) {
    state.orgName = orgName;
  }
}
