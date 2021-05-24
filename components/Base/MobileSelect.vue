<template>
  <div class="mobile-select">
    <label :for="cId"><slot /></label>
    <select :id="cId" v-model="selectModel" class="invisible w-0 h-0">
      <option v-for="(item, i) in options" :key="i" :value="item.value">
        {{ item.name }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import { uid } from 'uid'

export default defineComponent({
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    value: {
      type: [String, Number],
    },
  },
  setup(props, { emit }) {
    const cId = uid()
    const options = computed(() => {
      return props.items.map((item) => {
        if (typeof item === 'object') return item
        return {
          name: item,
          value: item,
        }
      })
    })
    const selectModel = computed({
      get() {
        return props.value
      },
      set(val) {
        emit('input', val)
      },
    })
    return { cId, options, selectModel }
  },
})
</script>

<style lang="postcss">
</style>