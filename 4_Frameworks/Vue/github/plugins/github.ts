import { Plugin } from '@nuxt/types'
import githubService from '~/services/githubService'

const githubPlugin: Plugin = (ctx, inject) => {
  const ApiWithAxios = githubService(ctx.$axios)

  inject('githubRepository', ApiWithAxios(''))
}

export default githubPlugin
