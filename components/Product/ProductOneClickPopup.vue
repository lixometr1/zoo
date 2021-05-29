<template>
  <div class="product-one-click-popup">
    <h4 class="mb-1 sm:mb-0">
      {{ $t('oneClick.title') }}
    </h4>
    <div class="font-medium">
      {{ $t('oneClick.description') }}
    </div>
    <form
      class="mt-5 flex sm:mt-4 xs:flex-col"
      action="#"
      @submit.prevent="onSubmit"
    >
      <InputPhone
        v-model="phone"
        class="mr-2 flex-1 min-w-0 xs:mr-0 xs:mb-1.5"
      />

      <button class="btn-green whitespace-nowrap !px-10" type="submit">
        {{ $t('oneClick.btn') }}
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
export default defineComponent({
  setup() {
    const phone = ref('')
    const onSubmit = () => {}
    return { phone, onSubmit }
  },
})
</script>

<style lang="postcss">
.product-one-click-popup {
  @apply absolute bottom-6 transform translate-y-full  bg-grey-600
    border-4 border-white 
    right-0
    px-9 py-8 z-20
    lg:px-6 lg:py-5
    w-full max-w-[480px]
    lg:bottom-4
   lg:max-w-full
   sm:top-10 sm:-translate-y-full sm:bottom-auto
   sm:p-5.5;

  box-shadow: 10px 10px 70px rgba(62, 63, 67, 0.2);
  &::before {
    @apply w-[36px] h-[17px] absolute top-0 transform -translate-y-full left-[35%]
          lg:left-[20%]
          sm:bottom-0  sm:rotate-180 sm:top-auto sm:translate-y-full sm:left-[80%];
    content: '';
    background: url(~@/assets/icons/one_click_buy_arrow.svg) center center
      no-repeat;
  }
  .app-input {
    &__inner {
      @apply bg-white;
    }
  }
}
</style>