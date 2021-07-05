<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="mt-sm-8">
        <v-card-title class="headline"> Github Org List </v-card-title>
        <v-form v-model="valid">
          <v-container>
            <v-row>
              <v-col cols="12" sm="12">
                <v-text-field
                  v-model="orgName"
                  :rules="nameRules"
                  :counter="20"
                  label="Organization Name"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-form>

        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/list"> Search </v-btn>
        </v-card-actions>
      </v-card>

      <v-simple-table class="my-sm-8">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Avatar</th>
              <th class="text-left">Id</th>
              <th class="text-left">Name</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in desserts" :key="item.name">
              <td>
                <v-avatar class="ma-sm-4" size="48px">
                  <img v-if="item.avatar" :alt="item.name" :src="item.avatar" />
                </v-avatar>
              </td>
              <td>{{ item.id }}</td>
              <td>{{ item.name }}</td>
            </tr>
          </tbody>
        </template>
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
  data() {
    return {
      desserts: [
        {
          avatar: 'https://avatars.githubusercontent.com/u/14540103?v=4',
          id: 1,
          name: 'Antonio',
        },
      ],
      page: 1,
    }
  },
}
</script>
