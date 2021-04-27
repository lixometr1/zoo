<template>
  <div class="menu-mob__header">
    <div class="menu-mob__header-avatar">
      <svgUser width="14" class="text-green" />
    </div>
    <div class="text-white">
      <div class="font-bold font-sm">Андрей Маринович</div>
      <div class="text-xs">xolxllz@gmail.com</div>
    </div>
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
.menu-mob {
  &__header {
    @apply h-[100px] px-5.5 flex-y-center;
    background: url(~@/assets/icons/menu_mob_header.svg) center center no-repeat;
    background-size: cover;
    &-avatar {
      @apply w-10 h-10 border border-white flex-center rounded-full mr-3.5;
      box-shadow: -5px -5px 20px rgba(255, 255, 255, 0.05),
        5px 5px 20px rgba(0, 0, 0, 0.1), inset -3px -3px 15px #ffffff,
        inset 3px 3px 15px rgba(0, 0, 0, 0.15);
      background: linear-gradient(0deg, #f8f8f8, #f8f8f8), #ffffff;
    }
  }
}
</style>