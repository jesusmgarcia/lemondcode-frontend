import githubService from '~/services/githubService'


const githubPlugin = (ctx, inject) => {
  const ApiWithAxios = githubService(ctx.$axios)

  inject('githubApi', ApiWithAxios(''))
}

export default githubPlugin
