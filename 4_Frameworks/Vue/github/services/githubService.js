const parseLink = require("parse-link-header");

export default ($axios) => (resource) => ({
  async getMembers(
    orgName,
    itemsPerPage,
    currentPage
  ) {
    const response = await $axios.get(
      `${resource}/orgs/${orgName}/members?per_page=${itemsPerPage}&page=${currentPage}`
    )

    const parsedLink = parseLink(response.headers.link);
    let totalPages = 0;
    if (parsedLink.last)
      totalPages = Number(parsedLink.last.page);

    return { data: response.data, pages: totalPages }
  },

  async getMember(id) {
    const { data } = await $axios.get(`${resource}/users/${id}`)
    return data
  },
})
