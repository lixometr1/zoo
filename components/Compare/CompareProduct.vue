<template>
  <div class="relative">
    <ProductCard v-bind="$attrs" :hoverCollapse="false" :showLabels="false" />
    <div class="cursor-pointer text-grey text-opacity-50 absolute right-3 top-5 hover:text-green transition-all" @click="removeItem">
      <svgDelete width="18" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import svgDelete from '@/assets/icons/delete_bin.svg?inline'
export default defineComponent({
  components: { svgDelete },
  setup() {
    const removeItem = () => {}
    return { removeItem }
  },
})
</script>

<style lang="postcss">
</style>