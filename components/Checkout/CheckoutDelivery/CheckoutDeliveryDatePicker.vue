<template>
  <ADatePicker
    v-bind="$attrs"
    :clearable="false"
    :editable="false"
    format="DD.MM.YYYY"
    value-type="YYYY-MM-DD"
    :disabled-date="disabledDate"
    v-on="$listeners"
  >
    <template #input="{ props, events }">
      <div class="flex h-[48px]">
        <div
          class="bg-green w-14 flex-center rounded-tl-lg rounded-bl-lg flex-shrink-0"
        >
          <svgCalendar width="18" class="text-white" />
        </div>
        <input
          type="text"
          v-bind="{ ...props, class: '' }"
          label=""
          class="min-w-0 w-[130px] border border-grey-light rounded-tr-lg rounded-br-lg focus:outline-none bg-grey-600 font-medium text-grey text-opacity-50
                sm:text-sm text-center"
          v-on="events"
        />
      </div>
    </template>
    <template #icon-calendar>
      <span></span>
    </template>
  </ADatePicker>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import svgCalendar from '@/assets/icons/calendar.svg?inline'

export default defineComponent({
  components: { svgCalendar },
  inheritAttrs: false,
  setup() {
    const disabledDate = (date: Date) => {
      const today = new Date()
      today.setHours(0)
      today.setMinutes(0)
      today.setSeconds(0)
      today.setMilliseconds(0)
      return date < today
    }
    return { disabledDate }
  },
})
</script>

<style lang="postcss">
</style>