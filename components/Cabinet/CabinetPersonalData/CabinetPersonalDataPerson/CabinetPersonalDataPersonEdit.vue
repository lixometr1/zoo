<template>
  <div class="cabinet-personal-data-person-edit">
    <InputName v-model="name" class="mb-3.5" />
    <InputSurname v-model="surname" class="mb-10" />
    <InputEmail v-model="email" class="mb-3.5" />
    <InputPhone v-model="phone" />
    <InputPhone v-if="showPhone2" v-model="phone2" class="mt-3.5" />
    <a
      v-if="!showPhone2"
      href="javascript:void(0)"
      class="mt-3.5 inline-block opacity-70 text-grey text-sm border-circle-grey hover:opacity-100 transition-all"
      @click.prevent="addPhone"
      >+ {{ $t('oneMore') }}</a
    >
    <div class="pt-5.5 flex-y-center space-x-7">
      <button
        class="font-bold text-grey opacity-50 sm:text-sm flex-y-center focus:outline-none"
        @click.prevent="deny"
      >
        <svgCross width="13" class="mr-2" /> {{ $t('cancel') }}
      </button>
      <button
        class="font-bold text-green sm:text-sm flex-y-center focus:outline-none"
        @click.prevent="approve"
      >
        <svgCheckmark width="14" class="mr-2" /> {{ $t('approve') }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import svgCheckmark from '@/assets/icons/checkmark.svg?inline'
import svgCross from '@/assets/icons/cross.svg?inline'
export default defineComponent({
  components: { svgCheckmark, svgCross },
  setup(props, { emit }) {
    const name = ref('Андрей')
    const surname = ref('Маринович')
    const email = ref('xolxllz@gmail.com')
    const phone = ref('+38 066 364 19 19')
    const phone2 = ref('')
    const showPhone2 = ref(false)
    const addPhone = () => {
      showPhone2.value = true
    }
    const deny = () => {
      emit('done')
    }
    const approve = () => {
      emit('done')
    }
    return {
      name,
      surname,
      email,
      phone,
      deny,
      approve,
      showPhone2,
      addPhone,
      phone2,
    }
  },
})
</script>

<style lang="postcss">
.cabinet-personal-data-person-edit {
}
</style>