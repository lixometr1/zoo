<template>
  <div class="pt-12">
    <div class="container">
      <div class="flex">
        <div class="pr-12 border-r border-grey-500 w-[320px] md:hidden">
          <CabinetSidebar />
        </div>
        <div class="flex-1 pl-14 md:pl-0">
          <div class="md:block hidden mb-2.5 text-grey text-opacity-50">
            <NuxtLink v-if="!isIndex" :to="localeLocation('cabinet')">
              <svgArrowLeft width="18" />
            </NuxtLink>
          </div>
          <NuxtChild />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, useRoute } from '@nuxtjs/composition-api'
import svgArrowLeft from '@/assets/icons/arrow_long_left.svg?inline'
export default defineComponent({
  components: { svgArrowLeft },
  setup() {
    const route = useRoute()
    const isIndex = computed(() => {
      return route.value.fullPath === '/cabinet/'
    })
    return { isIndex }
  },
})
</script>

<style lang="postcss">
</style>