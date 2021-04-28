<template>
  <APanel
    :isOpen="isOpen"
    contentClass="menu-mob__content"
    class="menu-mob"
    :class="{ [active]: true }"
    @close="close"
  >
    <transition :name="transitionName">
      <MenuMobMain v-if="active === 'main'" v-model="active" />
      <MenuMobCategories v-if="active === 'categories'" @back="onBack" />
    </transition>
  </APanel>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  ref,
  useRoute,
  useRouter,
  watch,
} from '@nuxtjs/composition-api'

import useMobileMenu from '@/utils/compositions/useMobileMenu'

export default defineComponent({
  setup() {
    const { isOpen, open, close } = useMobileMenu()
    const active = ref('main')

    const onBack = () => {
      active.value = 'main'
    }
    const transitionName = computed(() => {
      return active.value === 'main' ? 't-switch-back' : 't-switch'
    })
    return {
      transitionName,
      onBack,
      active,
      isOpen,
      close,
    }
  },
})
</script>

<style lang="postcss">
.menu-mob {
  @apply z-50 fixed top-0 left-0 right-0 bottom-0 lg:block hidden;
  &.main &__content {
    @apply max-w-[300px] sm:max-w-[250px];
  }
  &__content {
    @apply w-full max-w-[350px] transition h-full bg-white z-20 relative overflow-y-auto;
  }
}

.t-switch-leave-to,
.t-switch-back-enter {
  transform: translateX(-100%);
  /* opacity: 0; */
}
.t-switch-enter,
.t-switch-back-leave-to {
  transform: translateX(100%);
}

.t-switch-leave-active,
.t-switch-enter-active,
.t-switch-back-leave-active,
.t-switch-back-enter-active {
  position: absolute;
  width: 100%;
  transition: 0.3s;
}
</style>