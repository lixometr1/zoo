import { Type } from 'class-transformer'

class ProductItem {
  id: 1
  product_id: number
  sku: number
  title: string
  slug: string
  price: string
  sale_price: string
  popular_label: 1 | 0
  top_sale_label: 1 | 0
  stock_status: string
  getting_out_value: 4
  stock: number
  created_at: string
  updated_at: string
  deleted_at: null
}
export class ProductEntity {
  id: number
  title: string
  description: string
  non_refundable: number
  review_rating: string
  review_count: number
  seo_title: string
  seo_description: string
  seo_keyphrases: string
  created_at: string
  updated_at: string
  deleted_at: string
  pivot: {
    category_id: number
    product_id: number
  }

  @Type(() => ProductItem)
  product_item: ProductItem[]

  get defaultItem() {
    return this.product_item[0]
  }

  get name() {
    return this.defaultItem?.title
  }

  get price() {
    return parseFloat(this.defaultItem?.price)
  }

  get salePrice() {
    return parseFloat(this.defaultItem?.sale_price)
  }
}
