<template>
  <div class="space-y-4.5">
    <ProductVariation
      v-for="(item, idx) in items"
      :key="idx"
      :items="item.items"
      :type="item.type"
      :title="item.title"
      :value="value[item.id]"
      @input="onChangeVariation($event, item)"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    // items: {
    //   type: Array,
    //   default: () => [],
    // },
    value: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props, { emit }) {
    const { value } = toRefs(props)
    const onChangeVariation = (newValue: string, item: any) => {
      const newValues = { ...value.value }
      newValues[item.id] = newValue
      emit('input', newValues)
    }
    const items = computed(() => {
      return [
        {
          id: 1,
          title: 'Вариация',
          type: 'values',
          items: [
            {
              title: 'Adult',
              value: '24',
            },
            {
              title: 'Deluxe',
              value: '30',
            },
            {
              title: 'For kids',
              value: '35',
            },
          ],
        },
        {
          id: 2,
          title: 'Цвет',
          type: 'images',
          items: [
            {
              image: require('@/assets/img/variation_mock_1.png'),
              value: 1,
              title: 'Красный',
            },
            {
              image: require('@/assets/img/variation_mock_2.png'),

              title: 'Фиолетовый',
              value: 2,
            },
            {
              image: require('@/assets/img/variation_mock_3.png'),
              value: 3,
              title: 'Бирюзовый',
            },
            {
              image: require('@/assets/img/variation_mock_4.png'),
              value: 4,
              title: 'Зеленый',
            },
          ],
        },
      ]
    })
    return { onChangeVariation, items }
  },
})
</script>

<style lang="postcss">
</style>