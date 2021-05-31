<template>
  <div class="cabinet-user-avatar">
    <svgUser width="24" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import svgUser from '@/assets/icons/user.svg?inline'
export default defineComponent({
  components: { svgUser },
  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
.cabinet-user-avatar {
    @apply bg-green border-2 border-white rounded-full w-[70px] h-[70px] flex-center text-white
          sm:w-[64px] sm:h-[64px];
  box-shadow: 5px 5px 14px rgba(82, 98, 114, 0.25);
}
</style>