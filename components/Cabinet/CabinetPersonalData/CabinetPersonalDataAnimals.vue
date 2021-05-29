<template>
  <div class="cabinet-personal-data-animals">
    <CabinetPersonalDataAccordion
      :label="$t('homeAnimals')"
      @approve="onApprove"
      @deny="onDeny"
    >
      <div class="space-x-8 flex text-lg font-medium sm:text-sm">
        <div class="space-y-1.5">
          <div v-for="(item, i) in col1" :key="i">
            <ACheckboxInput v-model="animals[item.value]" :label="item.name" />
          </div>
        </div>
        <div class="space-y-1.5"> 
          <div v-for="(item, i) in col2" :key="i">
            <ACheckboxInput v-model="animals[item.value]" :label="item.name" />
          </div>
        </div>
      </div>
    </CabinetPersonalDataAccordion>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  ref,
  useContext,
} from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const onDeny = ({ close }: { close: () => void }) => {
      close()
    }
    const onApprove = ({ close }: { close: () => void }) => {
      close()
    }
    const { i18n } = useContext()
    const animals = ref({})
    const col1 = computed(() => [
      {
        name: i18n.t('animals.dog'),
        value: 'dog',
      },
      {
        name: i18n.t('animals.cat'),
        value: 'cat',
      },
      {
        name: i18n.t('animals.fish'),
        value: 'fish',
      },
      {
        name: i18n.t('animals.bird'),
        value: 'bird',
      },
    ])
    const col2 = computed(() => [
      {
        name: i18n.t('animals.reptile'),
        value: 'reptile',
      },
      {
        name: i18n.t('animals.rodent'),
        value: 'rodent',
      },
      {
        name: i18n.t('animals.hourse'),
        value: 'hourse',
      },
    ])
    return { onDeny, onApprove, animals, col1, col2 }
  },
})
</script>

<style lang="postcss">
.cabinet-personal-data-animals {
  .app-checkbox-input {
    &__label {
      @apply sm:text-sm;
    }
  }
}
</style>