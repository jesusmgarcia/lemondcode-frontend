import VueRouter from 'vue-router'
import './types'

declare module 'vue/types/vue' {
  interface Vue {
    $router: VueRouter
  }
}
