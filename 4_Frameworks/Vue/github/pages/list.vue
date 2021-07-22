<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-form id="orgname-form" @submit.prevent="onSubmit">
        <v-card class="mt-sm-8">
          <v-card-title class="headline"> Github Org List </v-card-title>
          <v-container>
            <v-row>
              <v-col cols="12" sm="12">
                <v-text-field
                  name="orgTextField"
                  :counter="20"
                  label="Organization Name"
                  outlined
                  required
                  :value="orgName"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text type="submit" form="orgname-form">
              Search
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-form>

      <v-simple-table class="my-sm-8">
        <thead>
          <tr>
            <th class="text-left">Avatar</th>
            <th class="text-left">Id</th>
            <th class="text-left">Name</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in members" :key="item.id">
            <td>
              <v-avatar class="ma-sm-4" size="48px">
                <img
                  v-if="item.avatar_url"
                  :alt="item.login"
                  :src="item.avatar_url"
                />
              </v-avatar>
            </td>
            <td>{{ item.id }}</td>

            <td>
              <nuxt-link :to="`/${item.login}`">
                {{ item.login }}
              </nuxt-link>
            </td>
          </tr>
        </tbody>
      </v-simple-table>
      <div class="text-center">
        <v-pagination
          :value="pageNumber"
          :length="totalPages"
          prev-icon="mdi-menu-left"
          next-icon="mdi-menu-right"
          @input="onPageChange"
        ></v-pagination>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  async asyncData({ app, store }) {
    const itemsPerPage = 5

    const { data, pages } = await app.$githubApi.getMembers(
      store.state.githublist.orgName,
      itemsPerPage,
      store.state.githublist.pageNumber
    )

    return {
      members: data,
      totalPages: pages,
      itemsPerPage,
    }
  },
  data() {
    return {
      members: [],
      totalPages: 1,
      itemsPerPage: 1,
    }
  },
  computed: {
    orgName() {
      return this.$store.state.githublist.orgName
    },
    pageNumber: {
      get() {
        return this.$store.state.githublist.pageNumber
      },
      set(newPageNumber) {
        return newPageNumber
      },
    },
  },
  methods: {
    async onSubmit(submitEvent) {
      this.$store.commit(
        'githublist/setOrgName',
        submitEvent.target.elements.orgTextField.value
      )
      const { data, pages } = await this.$githubApi.getMembers(
        this.orgName,
        this.itemsPerPage,
        this.pageNumber
      )

      this.totalPages = pages
      this.members = data
    },
    async onPageChange(value) {
      this.$store.commit('githublist/setPageNumber', value)

      const { data } = await this.$githubApi.getMembers(
        this.orgName,
        this.itemsPerPage,
        this.pageNumber
      )

      this.members = data
    },
  },
}
</script>
