import { computed, Ref, ref } from '@nuxtjs/composition-api'
import { ProductEntity } from '~/utils/models/product.entity'

export default function useProductCardFields(item?: Ref<ProductEntity | undefined>) {
  const isFullImage = computed(
    () => !!item?.value?.defaultItem?.defaultImage?.url
  )
  const topSale = computed(() => {
    return !!item?.value?.defaultItem?.top_sale_label
  })
  const isPopular = computed(() => {
    return !!item?.value?.defaultItem?.popular_label
  })
  const name = computed(() => {
    return item?.value?.name || 'Royal Canin Maxi Adult - 1'
  })
  const hasSale = computed(() => {
    return item?.value?.hasSale
  })
  const price = computed(() => {
    return item?.value?.price || 20
  })
  const oldPrice = computed(() => {
    return item?.value?.oldPrice
  })
  const sale = computed(() => {
    return item?.value?.sale
  })
  const isAvailable = computed(() => {
    return true
  })
  const image = computed(() => {
    return (
      item?.value?.defaultItem?.defaultImage?.url ||
      require('@/assets/img/product_mock.png')
    )
  })

  const variations = computed(() => {
    return [
      {
        id: 1,
        title: 'Размер',
        type: 'values',
        items: [
          {
            title: '24 см',
            value: '24',
          },
          {
            title: '30 см',
            value: '30',
          },
          {
            title: '35см',
            value: '35',
          },
        ],
      },
      {
        id: 2,
        title: 'Цвет',
        type: 'images',
        items: [
          {
            image: require('@/assets/img/variation_mock_1.png'),
            value: 1,
          },
          {
            image: require('@/assets/img/variation_mock_2.png'),

            value: 2,
          },
          {
            image: require('@/assets/img/variation_mock_3.png'),
            value: 3,
          },
          {
            image: require('@/assets/img/variation_mock_4.png'),
            value: 4,
          },
        ],
      },
    ]
  })
  const activeVariations = ref({})
  return {
    isFullImage,
    topSale,
    isPopular,
    name,
    hasSale,
    price,
    oldPrice,
    sale,
    isAvailable,
    image,
    variations,
    activeVariations,
  }
}
