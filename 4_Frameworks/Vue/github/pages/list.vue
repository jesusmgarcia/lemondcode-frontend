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
                  v-model="orgName"
                  :counter="20"
                  :rules="[() => !!orgName || 'This field is required']"
                  label="Organization Name"
                  outlined
                  required
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
          v-model="page"
          :length="4"
          prev-icon="mdi-menu-left"
          next-icon="mdi-menu-right"
        ></v-pagination>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  async asyncData(ctx) {
    return {
      members: await ctx.app.$githubApi.getMembers('lemoncode', 18, 1),
    }
  },
  data() {
    return {
      members: [],
      page: 1,
      orgName: 'lemoncode',
    }
  },
  methods: {
    async onSubmit() {
      this.members = await this.$githubApi.getMembers(this.orgName, 18, 1)
    },
  },
}
</script>
