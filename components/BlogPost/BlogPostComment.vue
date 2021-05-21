<template>
  <div class="pb-7 border-b border-grey-500 font-medium sm:text-sm">
    <div>
      <h4 class="sm:text-lg"> {{ name }}</h4>
    </div>
    <div class="mt-1.5 text-grey opacity-50 flex-y-center font-medium">
      <svgCalendar width="20" class="mr-2.5" />
      {{ date }}
    </div>
    <div class="mt-3">
      <p class="text-grey text-opacity-80">
        {{ content }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import svgCalendar from '@/assets/icons/calendar.svg?inline'
export default defineComponent({
  components: { svgCalendar },
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  setup() {
    const name = computed(() => 'Андрей Маринович')
    const date = computed(() => '20.12.2019')
    const content = computed(
      () =>
        `Равным образом постоянное информационно-пропагандистское обеспечение нашей деятельности способствует подготовки и реализации существенных финансовых и административных условий. Товарищи!`
    )
    return { name, date, content }
  },
})
</script>

<style lang="postcss">
</style>