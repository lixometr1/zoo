<template>
  <div class="border border-grey-light rounded-lg bg-white">
    <div class="py-4 px-6 flex-y-center justify-between h-20 sm:h-14 sm:px-3.5">
      <div class="flex-y-center sm:order-2">
        <a
          href="javascript:void(0)"
          class="text-blue text-sm font-bold flex-y-center mr-6 hover:underline sm:mr-0 sm:text-xs"
          @click.prevent="onCheckMany"
          ><svgCheckAll width="18" class="mr-2" />
          {{
            products.length > checkedCnt ? $t('chooseAll') : $t('removeSelect')
          }}
        </a>
        <WishlistRemoveChosen
          v-if="checkedCnt > 0"
          :cnt="checkedCnt"
          class="sm:hidden"
          @click.prevent="removeChosen"
        />
      </div>
      <WishlistSort v-model="sort" :cnt="checkedCnt" />
    </div>
    <div class="flex flex-wrap">
      <WishlistProduct
        v-for="(product, idx) in products"
        :key="idx"
        v-model="checked[idx]"
        :class="{ 'opacity-50': !checked[idx] && checkedCnt > 0 }"
        class="w-1/4 lg:w-1/3 sm:w-1/2"
      />
    </div>
    <div
      v-if="checkedCnt > 0"
      class="py-4.5 px-5.5 flex-center border-b border-grey-light sm:flex hidden sm:px-3.5"
    >
      <WishlistRemoveChosen
        :cnt="checkedCnt"
        class=""
        @click.prevent="removeChosen"
      />
    </div>
    <div
      class="py-4.5 px-5.5 flex justify-end sm:flex-col sm:justify-center sm:items-center sm:text-center sm:px-3.5"
    >
      <div class="mr-5.5 sm:mr-0 sm:mb-2">
        <div
          class="text-sm font-medium sm:text-xs text-grey text-opacity-70 lowercase mb-1.5 sm:mb-0"
        >
          {{ productsCnt }} {{ productsSclon }} {{ $t('onSum') }}:
        </div>
        <div>
          <span class="text-2lg sm:text-lg">{{ totalPrice }}</span>
          <span class="opacity-50">{{ currency }}</span>
        </div>
      </div>
      <button
        type="button"
        class="btn-green w-[170px] sm:w-full sm:text-sm"
        @click.prevent="addToCart"
      >
        {{ $t('toCart') }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  ref,
  set,
  useContext,
} from '@nuxtjs/composition-api'
import svgCheckAll from '@/assets/icons/check_all.svg?inline'
import CurrencyModule from '@/store/currency'
import useWordSclon from '~/utils/compositions/useWordSclon'
export default defineComponent({
  components: { svgCheckAll },
  setup() {
    const checked = ref<{ [key: string]: boolean }>({})
    const products = computed(() => [{}, {}, {}, {}, {}, {}])
    const checkAll = () => {
      products.value.forEach((product, idx) => {
        set(checked.value, idx, true)
      })
    }
    const unCheckAll = () => {
      products.value.forEach((product, idx) => {
        set(checked.value, idx, false)
      })
    }

    const removeChosen = () => {}
    const checkedCnt = computed(() => {
      const activeItems = Object.keys(checked.value).filter(
        (key: string) => checked.value[key]
      )
      return activeItems.length
    })
    const onCheckMany = () => {
      if (checkedCnt.value >= products.value.length) {
        unCheckAll()
      } else {
        checkAll()
      }
    }
    const sort = ref('')
    const productsCnt = computed(() => products.value.length)
    const productSclon = (useContext().i18n.t('items') as any) as string[]
    const productsSclon = computed(() => {
      const { exec } = useWordSclon(productSclon)
      return exec(productsCnt.value)
    })
    const totalPrice = computed(() => '1.276')
    const currency = computed(() => CurrencyModule.currency)
    const addToCart = () => {}
    return {
      checked,
      products,
      onCheckMany,
      removeChosen,
      checkedCnt,
      sort,
      productsCnt,
      productsSclon,
      currency,
      totalPrice,
      addToCart,
    }
  },
})
</script>

<style lang="postcss">
</style>