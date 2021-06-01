<template>
  <div>
    <div class="text-grey text-opacity-50 font-medium mb-4 sm:mb-2.5">
      {{ $t('enterUsing') }}:
    </div>
    <div class="flex justify-center space-x-1.5">
      <a
        v-for="(item, idx) in items"
        :key="idx"
        href="javascript:void(0)"
        class="w-10 h-10 border border-grey-light rounded-full bg-white flex-center hover:bg-grey-600 transition-colors sm:w-8 sm:h-8"
        @click.prevent="enterBy(item.type)"
      >
        <component :is="item.icon" width="18" class="w-4.5 h-4.5 sm:w-3.5 sm:h-3.5" />
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const items = computed(() => [
      {
        icon: require('@/assets/icons/facebook_login.svg?inline'),
        type: 'facebook',
      },
      {
        icon: require('@/assets/icons/google.svg?inline'),
        type: 'google',
      },
      {
        icon: require('@/assets/icons/apple.svg?inline'),
        type: 'apple',
      },
    ])
    const enterBy = (type: string) => {}
    return { items, enterBy }
  },
})
</script>

<style lang="postcss">
</style>