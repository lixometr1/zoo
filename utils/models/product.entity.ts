import { Type } from 'class-transformer'
import { ImageEntity } from './image.entity'

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

  @Type(() => ImageEntity)
  media: ImageEntity[]

  get defaultImage() {
    return this.media && this.media[0]
  }
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
    return this.product_item && this.product_item[0]
  }

  get name() {
    return this.defaultItem?.title
  }

  get salePrice() {
    return parseFloat(this.defaultItem?.sale_price)
  }

  get hasSale() {
    return (
      !!this.salePrice && this.salePrice !== this.staticPrice
    )
  }

  get staticPrice() {
    return parseFloat(this.defaultItem?.price)
  }

  get price() {
    if (this.hasSale) {
      return this.salePrice
    } else {
      return this.staticPrice || 100
    }
  }

  get oldPrice() {
    if (this.hasSale) {
      return this.staticPrice
    }
    return 0
  }

  get sale() {
    if (!this.hasSale) return 0
    if (this.oldPrice && this.price) {
      return 100 - Math.round((this.price / this.oldPrice) * 100)
    }
    return 0
  }
}
