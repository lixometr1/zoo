import { ComputedRef, useMeta } from '@nuxtjs/composition-api'
import { ItemSeoEntity } from '../models/item-seo.entity'

export default function useSeo(seo?: ComputedRef<ItemSeoEntity | undefined>) {
  useMeta(() => ({
    title: seo?.value?.title,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: seo?.value?.description as string,
      },
    ],
  }))
}
