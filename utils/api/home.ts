import { AxiosResponse } from 'axios'
import { plainToClass } from 'class-transformer'
import useApi, { UseApiOptions } from '../compositions/useApi'
import { HomeEntity } from '../models/home.entity'
export const useApiGetHomePage = (opts?: UseApiOptions) =>
  useApi<any, HomeEntity>(
    () => ({
      method: 'POST',
      url: '/page/slug',
      data: {
        slug: 'testim',
      },
    }),
    opts,
    (data: HomeEntity) => plainToClass(HomeEntity, data),
    ({ data }: AxiosResponse<{ data: HomeEntity }>) => data.data
  )
