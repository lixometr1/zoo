import { Type } from 'class-transformer'
import { CategoryEntity } from './category.entity'

export class SubCategoryEntity {
  @Type(() => CategoryEntity)
  category: CategoryEntity

  category_id: number
  created_at: string
  deleted_at: string
  id: number
  parent_category_id: number
  parent_level: number
  updated_at: string
}
