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
          <v-btn color="primary" text> Back to List Page </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { MemberDetailEntity } from '@/types'
import { Context } from '@nuxt/types'

export default {
  async asyncData({ app, params }: Context) {
    return {
      member: await app.$githubRepository.getMember(params.id),
    }
  },
  data() {
    return {
      member: {} as MemberDetailEntity,
    }
  },
}
</script>
