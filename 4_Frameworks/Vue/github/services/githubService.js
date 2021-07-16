
export default ($axios) => (resource) => ({
  getMembers(
    orgName,
    itemsPerPage,
    currentPage
  ) {
    return $axios.$get(
      `${resource}/orgs/${orgName}/members?per_page=${itemsPerPage}&page=${currentPage}`
    )
  },

  getMember(id) {
    return $axios.$get(`${resource}/users/${id}`)
  },
})
