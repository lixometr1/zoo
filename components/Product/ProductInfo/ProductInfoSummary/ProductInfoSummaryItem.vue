<template>
  <div class="product-summary-item">
    <h3 class="mb-7">{{ title }}</h3>
    <div
      class="blur-down relative overflow-hidden"
      :style="{ maxHeight: height + 'px' }"
    >
      <div class="z-10 relative">
        <slot />
      </div>
    </div>
    <a
      class="text-sm font-medium text-blue hover:text-green group transition-colors inline-flex items-center"
      href="javascript:void(0)"
      @click.prevent="watchAll"
    >
      <span
        class="border-b-2 border-blue border-dotted border-opacity-70 group-hover:border-green"
      >
        {{ $t('watchAll') }}
      </span>
      <svrArrowRight class="ml-2" width="60"
    /></a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import svrArrowRight from '@/assets/icons/arrow_long_right.svg?inline'
export default defineComponent({
  components: { svrArrowRight },
  props: {
    title: String,
    height: Number,
  },
  setup(props, { emit }) {
    const watchAll = () => {
      emit('open')
    }
    return { watchAll }
  },
})
</script>

<style lang="postcss">
.product-summary-item {
  .blur-down {
    &::before {
      height: 70px;
    }
  }
}
</style>