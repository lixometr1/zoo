<template>
  <div>
    <h3 class="md:block hidden mb-3">{{$t('personalData')}}</h3>
    <div class="flex items-start space-x-4 lg:flex-col lg:space-x-0 lg:space-y-2">
      <CabinetPersonalDataPerson class="flex-1 lg:w-full" />
      <CabinetPersonalDataBonus class="flex-grow-1 lg:w-full" />
    </div>
    <div class=" mt-8">
      <CabinetPersonalDataPersonal class="mb-5.5 sm:mb-3" />
      <CabinetPersonalDataBirthday />
      <CabinetPersonalDataAnimals class="my-12 sm:my-9"/>
      <CabinetPersonalDataPassword class="mb-5.5 sm:mb-3"/>
      <CabinetPersonalDataDelete />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
.cabinet-personal-data-card {
  @apply bg-white py-7 px-9 border border-grey-light rounded-xl sm:p-5.5 sm:rounded-lg;
  box-shadow: 10px 10px 40px rgba(62, 63, 67, 0.1);
}
</style>