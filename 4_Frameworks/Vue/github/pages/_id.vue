<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="mx-auto my-16" max-width="400">
        <v-img
          class="white--text align-end"
          height="200px"
          :src="member.avatar_url"
        >
        </v-img>
        <v-card-title>{{ member.login }}</v-card-title>
        <v-card-text class="text--primary">
          <div>{{ member.bio }}</div>
        </v-card-text>

        <v-card-actions>
          <v-btn color="primary" text @click="onClick">
            Back to List Page
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  async asyncData({ app, params }) {
    return {
      member: await app.$githubApi.getMember(params.id),
    }
  },
  data() {
    return {
      member: {},
    }
  },
  methods: {
    onClick() {
      this.$router.back()
    },
  },
}
</script>
