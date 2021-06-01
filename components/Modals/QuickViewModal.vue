<template>
  <ModalContent class="quick-view-modal" v-on="$listeners">
    <ProductHero class="border-none p-0" :mode="'modal'" />
    <div class="pt-8 flex-center border-t border-grey-light mt-10">
      <a
        href="javascript:void(0)"
        class="flex-y-center text-blue hover:underline font-bold"
        @click.prevent="openProduct"
        ><svgViewAll width="24" class="mr-3" />{{ $t('viewAllInformation') }}</a
      >
    </div>
  </ModalContent>
</template>

<script lang="ts">
import {
  defineComponent,
  provide,
  ref,
  useContext,
  useRouter,
} from '@nuxtjs/composition-api'
import svgViewAll from '@/assets/icons/view_all.svg?inline'
export default defineComponent({
  components: { svgViewAll },
  props: {
    id: Number,
  },
  setup(props, { emit }) {
    const router = useRouter()
    const { app } = useContext()
    provide('product', ref({}))
    provide('cnt', ref(1))
    const openProduct = () => {
      emit('close')
      router.push(app.localePath('product'))
    }
    return { openProduct }
  },
})
</script>

<style lang="postcss">
.quick-view-modal {
  @apply w-full pt-12 mx-4 max-w-[1450px] max-h-[90%] 
        md:pt-16 sm:px-4 sm:pt-14
        xs:max-w-full;
}
</style>