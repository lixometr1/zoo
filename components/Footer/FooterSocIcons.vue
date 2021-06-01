<template>
  <div class="flex space-x-1">
    <a
      :href="icon.link"
      target="_blank"
      v-for="(icon, idx) in socIcons"
      :key="idx"
      class="footer-soc-icon"
    >
      <component :is="icon.icon" />
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import svgInstagram from '@/assets/icons/instagram.svg?inline'
import svgFacebook from '@/assets/icons/facebook.svg?inline'
import svgYoutube from '@/assets/icons/youtube.svg?inline'
export default defineComponent({
  setup() {
    const socIcons = [
      {
        icon: svgInstagram,
        link: 'https://instagram.com',
      },
      {
        icon: svgFacebook,
        link: 'https://facebook.com',
      },
      {
        icon: svgYoutube,
        link: 'https://youtube.com',
      },
    ]
    return { socIcons }
  },
})
</script>

<style lang="postcss">
.footer-soc-icon {
  @apply rounded-full w-7 h-7 flex-center bg-green text-white transition hover:to-green-700
  border-green border
        hover:bg-transparent hover:text-green;
}
</style>