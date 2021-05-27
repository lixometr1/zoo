<template>
  <DatePicker
    class="app-date-picker-input"
    popup-class="app-date-picker"
    v-bind="_attrs"
    v-on="$listeners"
  >
    <slot v-for="(_, name) in $slots" :slot="name" :name="name" />
    <template
      v-for="(_, name) in $scopedSlots"
      :slot="name"
      slot-scope="slotData"
    >
      <slot :name="name" v-bind="slotData" />
    </template>
  </DatePicker>
</template>

<script lang="ts">
import { computed, defineComponent, useContext } from '@nuxtjs/composition-api'
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'
import DatePickerRu from 'vue2-datepicker/locale/ru.js'
import DatePickerUa from 'vue2-datepicker/locale/uk.js'

export default defineComponent({
  components: { DatePicker },
  inheritAttrs: false,
  props: {},
  setup(props, { attrs }) {
    
    const currenctLocale = computed(() => useContext().i18n.locale)
    const _attrs = computed(() => {
      const lang = currenctLocale.value === 'ua' ? DatePickerUa : DatePickerRu
      return Object.assign({}, attrs, { lang })
    })
    return { _attrs }
  },
})
</script>

<style lang="postcss">
.app-date-picker {
  @apply font-main;
  .mx-calendar-content {
    .today {
      @apply text-green;
      &.active {
        @apply text-white;
      }
    }
    .cell {
      &:hover {
        @apply bg-green bg-opacity-10;
      }
      &.active {
        @apply bg-green;
      }
    }
  }
  .mx-btn {
    &:hover {
      @apply text-green;
    }
  }
}
.app-date-picker-input {
  &.mx-datepicker {
    @apply w-auto;
  }
}
</style>