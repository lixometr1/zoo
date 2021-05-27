<template>
  <div class="compare-item">
    <a
      href="javascript:void(0)"
      class="font-bold uppercase text-sm flex-y-center mb-5.5 hover:text-green"
      :class="{ 'text-green': isMain, 'text-grey text-opacity-50': !isMain }"
      @click.prevent="makeMain"
    >
      <svgCheckmark width="9" class="mr-2" />{{
        isMain ? $t('main') : $t('setupMain')
      }}
    </a>
    <CompareProduct v-bind="product" class="pr-3.5" />
    <div class="mt-12">
      <div
        v-for="(attr, i) in attributes"
        :key="i"
        class="font-bold pb-3 pt-5.5 border-b border-grey-500 text-grey text-opacity-50"
        :class="{ '!text-opacity-100': attr.active }"
      >
        {{ attr.title }}
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
    @apply w-[280px];
}
</style>