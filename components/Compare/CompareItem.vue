<template>
  <div class="compare-item">
    <a
      href="javascript:void(0)"
      class="font-bold uppercase text-sm flex-y-center mb-5.5 hover:text-green sm:text-xs sm:h-8 sm:mb-2"
      :class="{ 'text-green': isMain, 'text-grey text-opacity-50': !isMain }"
      @click.prevent="makeMain"
    >
      <svgCheckmark width="9" class="mr-2" />{{
        isMain ? $t('main') : $t('setupMain')
      }}
    </a>
    <CompareProduct v-bind="product" class="mr-3.5 sm:mr-2" />
    <div class="mt-12 sm:mt-5">
      <div
        v-for="(attr, i) in attributes"
        :key="i"
        class="font-bold pb-3 pt-5.5 border-b border-grey-500 text-grey text-opacity-50 pr-2 whitespace-nowrap overflow-ellipsis overflow-hidden"
        :class="{ '!text-opacity-100': attr.active }"
      >
        <span>{{ attr.title }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import svgCheckmark from '@/assets/icons/checkmark.svg?inline'
export default defineComponent({
  components: { svgCheckmark },
  props: {
    product: {
      type: Object,
      default: () => ({}),
    },
    isMain: Boolean,
    // attributes: {
    //   type: Array,
    //   default: () => [],
    // },
  },
  setup(props, { emit }) {
    const attributes = [
      {
        title: 'Значение (не совпало)',
        active: false,
      },
      {
        title: 'Значение (не совпало)',
        active: false,
      },
      {
        title: 'Значение (совпало)',
        active: true,
      },
      {
        title: 'Значение (не совпало)',
        active: false,
      },
      {
        title: 'Значение (не совпало)',
        active: false,
      },
      {
        title: 'Значение (совпало)',
        active: true,
      },
    ]
    const makeMain = () => {
      emit('main')
    }
    return { attributes, makeMain }
  },
})
</script>

<style lang="postcss">
.compare-item {
  @apply w-[280px] sm:w-[150px] flex-shrink-0;
}
</style>