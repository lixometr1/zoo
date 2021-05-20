<template>
  <div class="blog-categories">
    <a
      href="#"
      class="blog-categories__item group"
      :class="{ 'border-b border-grey-500': items.length > 0 }"
    >
      {{ $t('showAll') }}
      <span class="text-grey text-opacity-50 group-hover:text-green">2</span>
    </a>
    <a
      v-for="(item, i) in items"
      :key="i"
      href="#"
      class="blog-categories__item group"
    >
      {{ item.title }}
      <span class="text-grey text-opacity-50 group-hover:text-green">{{
        item.cnt
      }}</span>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
.blog-categories {
  @apply w-full max-w-[300px] bg-white rounded-lg;
  box-shadow: 15px 15px 40px rgba(82, 98, 114, 0.15);
  &__item {
    @apply block px-7 py-4 font-medium text-lg cursor-pointer hover:text-green transition-all
        lg:text-base hover:bg-green hover:bg-opacity-20 first:rounded-t-lg last:rounded-b-lg;
    span {
      @apply transition-all;
    }
    &.active {
      @apply bg-green text-white;

      span {
        @apply text-white;
      }
    }
  }
}
</style>