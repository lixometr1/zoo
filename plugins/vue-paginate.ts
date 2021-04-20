import { defineNuxtPlugin } from '@nuxtjs/composition-api'
import Paginate from 'vuejs-paginate'
import Vue from 'vue'
export default defineNuxtPlugin(() => {
  Vue.component('VPaginate', Paginate)
})
