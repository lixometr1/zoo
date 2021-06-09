import { Type } from 'class-transformer'
import { AttributeEntity } from './attribute.entity'
import { ProductEntity } from './product.entity'
import { SubCategoryEntity } from './sub-category.entity'
import { TagEntity } from './tag.entity'

export class CategoryEntity {
  attachment_id: number
  @Type(() => AttributeEntity)
  attribute: AttributeEntity[]

  category_banner: null
  created_at: string
  deleted_at: null
  description: string
  id: number
  logo: []
  media: []
  name: string
  product: ProductEntity[]
  property_level: 8
  seo_block_title: string
  seo_description: string
  seo_keyphrases: string
  seo_title: string
  slug: string
  @Type(() => SubCategoryEntity)
  subcategory: SubCategoryEntity[]
  
  @Type(() => TagEntity)
  tag: TagEntity[]

  template_type: string
  updated_at: string
}
