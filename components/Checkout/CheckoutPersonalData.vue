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
        @click.prevent
        >{{ $t('enter') }}</a
      >
    </div>
    <div class="flex flex-wrap -mx-3 mt-4 sm:flex-col sm:mx-0">
      <div class="px-1.5 py-1.5 w-1/2 sm:w-full sm:px-0">
        <AInput v-model="data.name" :label="$t('personName')" :required="true">
          <template #prefix>
            <svgUser width="18" class="text-grey text-opacity-50" />
          </template>
        </AInput>
      </div>
      <div class="px-1.5 py-1.5 w-1/2 sm:w-full sm:px-0">
        <AInput v-model="data.surname" :label="$t('surname')" :required="true">
          <template #prefix>
            <svgUser width="18" class="text-grey text-opacity-50" />
          </template>
        </AInput>
      </div>
      <div class="px-1.5 py-1.5 w-1/2 sm:w-full sm:px-0">
        <AInput
          v-model="data.phone"
          :label="$t('phone')"
          type="tel"
          mask="+38 ### ### ## ##"
          :required="true"
        >
          <template #prefix>
            <svgPhone width="11" class="text-grey text-opacity-50" />
          </template>
        </AInput>
      </div>
      <div class="px-1.5 py-1.5 w-1/2 sm:w-full sm:px-0">
        <AInput
          v-model="data.email"
          :label="$t('email')"
          type="email"
          :required="true"
        >
          <template #prefix>
            <svgEmail width="18" class="text-grey text-opacity-50" />
          </template>
        </AInput>
      </div>
      <div class="px-1.5 py-1.5 w-full sm:w-full sm:px-0">
        <ATextArea
          v-model="data.comment"
          :label="$t('orderComment')"
          :required="true"
          :inputAttrs="{class: 'sm:leading-4'}"
        >
          <template #prefix>
            <svgComment
              width="18"
              class="text-grey text-opacity-50 relative top-1.5"
            />
          </template>
        </ATextArea>
      </div>
    </div>

    <div class="my-5.5">
      <ACheckboxInput v-model="data.iReceiver" :label="$t('iReceiver')" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
import svgUser from '@/assets/icons/user.svg?inline'
import svgPhone from '@/assets/icons/smartphone.svg?inline'
import svgEmail from '@/assets/icons/email.svg?inline'
import svgComment from '@/assets/icons/comment.svg?inline'
export default defineComponent({
  components: { svgUser, svgPhone, svgEmail, svgComment },
  setup() {
    const data = ref({})
    return { data }
  },
})
</script>

<style lang="postcss">
.checkout-personal-data {
  .app-input,
  .app-text-area {
  }
  .app-input,
  .app-text-area {
    &__inner {
      @apply bg-grey-600;
    }
  }
}
</style>