import { plainToClass, Type } from 'class-transformer'
import { AxiosResponse } from 'axios'
import useApi, { UseApiOptions } from '../compositions/useApi'
import { ProductEntity } from '../models/product.entity'
class GetCategoryResponseData {
  @Type(() => ProductEntity)
  product: ProductEntity[]
}
class GetCategoryResponse {
  @Type(() => GetCategoryResponseData)
  data: GetCategoryResponseData
}
export const useApiGetCategory = (opts?: UseApiOptions) =>
  useApi<{ id: number }, GetCategoryResponseData>(
    ({ id }) => ({
      method: 'POST',
      url: '/category/basic',
      data: {
        id,
      },
    }),
    opts,
    ({ data }: AxiosResponse<GetCategoryResponse>) => {
      return plainToClass(GetCategoryResponseData, data.data)
    }
  )
