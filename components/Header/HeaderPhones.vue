<template>
  <div class="flex items-center">
    <img src="@/assets/icons/phone.svg" alt="phone" width="26" class="mr-3" />
    <div class="text-green text-sm font-bold">
      <div class="space-y-1" v-for="(phone, idx) in phones" :key="idx">
        <a :href="'tel:' + phone"> {{ phone }}</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const phones = ['+38 (066) 364-19-19', '+38 (066) 364-19-19']
    return {
      phones,
    }
  },
})
</script>

<style lang="postcss">
</style>