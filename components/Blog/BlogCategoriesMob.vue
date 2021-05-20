<template>
  <div class="blog-categories-mob">
    <ASelect
      v-model="valueModel"
      class="blog-categories-mob__select"
      :options="options"
      label="title"
      :reduce="item => item.title"
    >
      <template #option="item">
        <span>{{ item.title }}</span>
        <span class="opacity-50 ml-1">{{ item.cnt }}</span>
      </template>
      <template #selected-option="item">
        <span>{{ item.title }}</span>
        <span class="opacity-50 ml-1">{{ item.cnt }}</span>
      </template>
    </ASelect>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    value: String,
  },
  setup(props, { emit }) {
    const options = computed(() => [
      { title: 'Показать все', cnt: 22 },
      ...props.items,
    ])
    // const valueModel = computed({
    //   get() {
    //     return props.value || 'Показать все'
    //   },
    //   set(val) {
    //     emit('input', val)
    //   },
    // })
    const valueModel = ref('Показать все')
    return { options, valueModel }
  },
})
</script>

<style lang="postcss">
.blog-categories-mob {
  @apply pb-6 border-b border-grey border-opacity-20;
  &__select {
    @apply rounded-md sm:text-sm;
    box-shadow: 5px 5px 25px rgba(82, 98, 114, 0.15);
  }
}
</style>