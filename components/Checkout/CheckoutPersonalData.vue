<template>
  <div class="checkout-personal-data">
    <h4 class="sm:text-lg mb-1.5 sm:mb-1">
      {{ $t('personalData') }}
    </h4>
    <div class="font-medium">
      <span class="text-grey text-opacity-70">{{
        $t('personalDataDescription')
      }}</span>
      <a
        href="#"
        class="border-circle-green hover:border-solid transition-all"
        @click.prevent="openLoginModal"
        >{{ $t('enter') }}</a
      >
    </div>
    <div class="flex flex-wrap -mx-3 mt-4 sm:flex-col sm:mx-0">
      <div class="px-1.5 py-1.5 w-1/2 sm:w-full sm:px-0">
        <InputName v-model="data.name" :required="true" />
      </div>
      <div class="px-1.5 py-1.5 w-1/2 sm:w-full sm:px-0">
        <InputSurname v-model="data.surname" :required="true" />
      </div>
      <div class="px-1.5 py-1.5 w-1/2 sm:w-full sm:px-0">
        <InputPhone v-model="data.phone" :required="true" />
      </div>
      <div class="px-1.5 py-1.5 w-1/2 sm:w-full sm:px-0">
        <InputEmail v-model="data.email" :required="true" />
      </div>
      <div class="px-1.5 py-1.5 w-full sm:w-full sm:px-0">
        <InputComment v-model="data.comment" :required="true" />
      </div>
    </div>

    <div class="my-5.5">
      <ACheckboxInput v-model="data.iReceiver" :label="$t('iReceiver')" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import { ModalName } from '~/types/modal.enum'
import useModal from '~/utils/compositions/useModal'
export default defineComponent({
  components: {},
  setup() {
    const data = ref({})
    const openLoginModal = () => {
      const { showByName } = useModal()
      showByName(ModalName.login)
    }
    return { data, openLoginModal }
  },
})
</script>

<style lang="postcss">
.checkout-personal-data {
}
</style>