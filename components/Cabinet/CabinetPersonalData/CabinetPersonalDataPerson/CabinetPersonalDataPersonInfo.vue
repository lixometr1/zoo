<template>
  <div class="relative">
    <h4 class="mb-4.5 sm:text-lg">{{ fullName }}</h4>
    <div class="max-w-[250px] space-y-2 text-sm xs:space-y-3">
      <div class="flex justify-between xs:flex-col xs:items-start">
        <div class="font-bold">{{ $t('email') }}</div>
        <div class="opacity-60 font-medium">{{ email }}</div>
      </div>
      <div class="flex justify-between xs:flex-col xs:items-start">
        <div class="font-bold">{{ $t('phone') }}</div>
        <div class="opacity-60 font-medium">{{ phone }}</div>
      </div>
    </div>
    <svgPencil
      class="text-grey text-opacity-50 hover:text-green transition-all absolute top-0 right-0 cursor-pointer"
      width="17"
      @click="$emit('edit')"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from '@nuxtjs/composition-api'
import svgPencil from '@/assets/icons/pencil.svg?inline'
export default defineComponent({
  components: { svgPencil },
  setup() {
    const fullName = computed(() => 'Андрей Маринович')
    const email = computed(() => 'xolxllz@gmail.com')
    const phone = computed(() => '+38 066 364 19 19')
    return { fullName, email, phone }
  },
})
</script>

<style lang="postcss">
</style>