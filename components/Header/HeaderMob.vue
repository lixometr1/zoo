<template>
  <div
    class="
      bg-white
      border-b border-grey-light
      py-3.5
      fixed
      top-0
      left-0
      right-0
      z-200
      header-mob
    "
    :class="{ 'is-full': isFull }"
  >
    <div class="container">
      <transition name="t-header-mob">
        <div  class="flex-y-center mb-3">
          <NuxtLink :to="localePath('/')">
            <Logo />
          </NuxtLink>
          <HeaderCart class="ml-auto" />
          <HeaderBurger class="ml-4" />
        </div>
      </transition>

      <div class="header-mob-search ">
        <HeaderSearch />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from '@nuxtjs/composition-api'
export default defineComponent({
  setup() {
    const isFull = ref(true)
    let oldTop = 0
    onMounted(() => {
      window.addEventListener('scroll', () => {
        console.log(1)
        const top = document.documentElement.scrollTop
        if (top - 20 <= 0) {
          isFull.value = true
          return
        }
        if (oldTop > top) {
          // top
          isFull.value = true
        } else {
          // bottom
          isFull.value = false
        }
        oldTop = top
      })
    })
    return { isFull }
  },
})
</script>

<style lang="postcss">
.header-mob {
  @apply transition-all duration-500 transform translate-y-[-44px];
  &.is-full {
    @apply translate-y-0;
  }
}
.t-header-mob-enter,
.t-header-mob-leave-to {
  /* @apply transform translate-y-[-44px]; */
}
.t-header-mob-enter-active,
.t-header-mob-leave-active {
  /* transition: 0.5s; */
}
</style>