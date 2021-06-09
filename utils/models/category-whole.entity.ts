import { Type } from 'class-transformer'
import { CategoryEntity } from './category.entity'

export class CategoryWholeEntity {
  brand: any[]
  @Type(() => CategoryEntity)
  category: CategoryEntity
  
  tree: {
    [key: string]: CategoryEntity[]
  }
}
