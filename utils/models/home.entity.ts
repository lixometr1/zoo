import { Type } from 'class-transformer'
import ConfigModule from '@/store/config'
import { ItemSeoEntity } from './item-seo.entity'
import { SeoBlockEntity } from './seo-block.entity'
export class HomeSliderItemAttrs {
  photo: string
  price: number
  title: string
  subtitle: string
  background: string
  'sale-price': number
  'shock-price': boolean

  get photoUrl() {
    if (!this.photo) return
    return `${ConfigModule.imageBase}/${this.photo}`
  }
}
export class HomeSliderItem {
  layout: string
  @Type(() => HomeSliderItemAttrs)
  attributes: HomeSliderItemAttrs
}
export class HomeData {
  brands: string
  category: any[]
  @Type(() => HomeSliderItem)
  home_top_slider: HomeSliderItem[]

  @Type(() => SeoBlockEntity)
  main_page_content: SeoBlockEntity[]
}
export class HomeEntity {
  locale: string
  id: number
  name: string
  slug: string
  path: string
  parent_id: number | null
  @Type(() => HomeData)
  data: HomeData

  template: string
  view: null
  @Type(() => ItemSeoEntity)
  seo: ItemSeoEntity
}
