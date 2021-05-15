import { defineNuxtPlugin } from '@nuxtjs/composition-api'
import Vue from "vue"
import Sticky from 'vue-sticky-directive'
export default defineNuxtPlugin(() => {
    Vue.use(Sticky)
})