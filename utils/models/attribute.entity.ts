import { Type } from 'class-transformer'
import { AttributeValueEntity } from './attribute-value.entity'

export class AttributeEntity {
  count: string
  created_at: string
  deleted_at: null
  id: number
  name: string
  pivot: any
  attribute_id: number
  category_id: number
  __proto__: Object
  slug: string
  type: string
  updated_at: string
  @Type(() => AttributeValueEntity)
  attribute_value?: AttributeValueEntity
}
