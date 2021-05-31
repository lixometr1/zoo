<template>
  <div>
    <h4 class="mb-8 sm:mb-4.5 sm:leading-5">
      {{ $t('messagesSendByChannels') }}:
    </h4>
    <div class="space-y-4 sm:space-y-3">
      <ACheckboxInput
        v-for="(item, idx) in items"
        :key="idx"
        v-model="active[idx]"
        :label="item.title"
        labelClass="xs:!text-sm"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const active = ref({})
    const items = computed(() => [
      {
        title: 'E-mail письма',
      },
      {
        title: 'Сообщения в Viber',
      },
      {
        title: 'SMS-сообщения',
      },
      {
        title: 'Уведомления в мобильном приложении',
      },
      {
        title: 'Уведомления в веб-браузере',
      },
    ])
    return { active, items }
  },
})
</script>

<style lang="postcss">
</style>