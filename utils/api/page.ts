import { AxiosResponse } from 'axios'
import { plainToClass } from 'class-transformer'
import useApi, { UseApiOptions } from '../compositions/useApi'
export const useApiGetPage = (opts?: UseApiOptions) =>
  useApi<{ slug: string }, any>(
    ({ slug }) => ({
      method: 'POST',
      url: '/page/slug',
      data: {
        slug,
      },
    }),
    opts
  )
