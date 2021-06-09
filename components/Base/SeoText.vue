<template>
  <div class="catalog-seo-text">
    <div
      class="catalog-seo-text__content blur-down space-y-9 md:space-y-5 sm:space-y-3"
      :class="{ open: isOpen }"
    >
      <div v-for="(item, idx) in items" :key="idx">
        <h2 class="mb-6 md:mb-4 sm:mb-2" v-html="item.attributes.title"></h2>
        <div v-html="item.attributes.description"></div>
      </div>
    </div>
    <ArrowMore class="sm:!flex !hidden" :open="isOpen" @click="toggle" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import useOpen from '@/utils/compositions/useOpen'
import { SeoBlockEntity } from '~/utils/models/seo-block.entity'
export default defineComponent({
  props: {
    items: {
      type: Array as () => SeoBlockEntity[],
      default: () => [],
    },
  },
  setup() {
    const { isOpen, open, close, toggle } = useOpen()
    return { isOpen, open, close, toggle }
  },
})
</script>

<style lang="postcss">
.catalog-seo-text {
  &__content {
    @apply sm:h-[270px] overflow-hidden relative z-10 transition;
    &::before {
      @apply hidden sm:block;
    }
    &.open {
      @apply h-[100%];
      &::before {
        opacity: 0;
      }
    }
  }
}
</style>