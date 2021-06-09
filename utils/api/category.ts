import { plainToClass, Type } from 'class-transformer'
import { AxiosResponse } from 'axios'
import useApi, { UseApiOptions } from '../compositions/useApi'
import { ProductEntity } from '../models/product.entity'
import { DataResponse } from '../response/data.response'
import { CategoryEntity } from '../models/category.entity'
import { CategoryWholeEntity } from '../models/category-whole.entity'
class GetCategoryResponseData {
  @Type(() => ProductEntity)
  product: ProductEntity[]
}
class GetCategoryResponse {
  @Type(() => GetCategoryResponseData)
  data: GetCategoryResponseData
}
export const useApiGetCategory = (opts?: UseApiOptions) =>
  useApi<{ slug: string }, CategoryWholeEntity>(
    ({ slug }) => ({
      method: 'POST',
      url: '/category/whole',
      data: {
        slug,
      },
    }),
    opts,
    (data: CategoryWholeEntity) => {
      return plainToClass(CategoryWholeEntity, data)
    },
    ({ data }: AxiosResponse<{ data: CategoryWholeEntity }>) => data.data
  )
