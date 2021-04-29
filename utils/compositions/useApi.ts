import { Ref, ref, watch } from '@vue/composition-api'
import useAxios from '@/utils/compositions/useAxios'
import { AxiosError, AxiosRequestConfig } from 'axios'
import { errorHandler } from '@/utils/helpers/error-handler'
// import useGlobalLoading from './useGlobalLoading'
import useToast from './useToast'
export interface ToastMessages {
  error?: (err: any) => string
  success?: (result: any) => string
}
export interface UseApiOptions {
  toast?: boolean | ToastMessages
  loading?: boolean
}
export default function useApi<T, R extends any>(
  factory: (opts: T) => AxiosRequestConfig,
  options: UseApiOptions = { toast: false, loading: false },
  handleResponse = (data: any): Promise<R> | R => data.data
) {
  const axios = useAxios()

  const isLoading = ref(false)
  const result: Ref<R | null> = ref(null)
  const error: Ref<any> = ref(null)
  const exec = async (args: T) => {
    const request = factory(args)
    isLoading.value = true
    error.value = null
    try {
      const response = await axios(request)
      const valueResponse: R = await handleResponse(response)
      result.value = valueResponse
      return valueResponse
    } catch (e) {
      if (e.isAxiosError === true) {
        error.value = e
      } else {
        console.log('strange error ', e)
        error.value = e
      }
      result.value = null
    } finally {
      isLoading.value = false
    }
  }
  //   if (options.loading) {
  //     const globalLoading = useGlobalLoading()
  //     watch(isLoading, (value) => {
  //       if (value) {
  //         globalLoading.show()
  //       } else {
  //         globalLoading.hide()
  //       }
  //     })
  //   }
  if (options.toast) {
    const toast = useToast()

    const defaultSerializers = {
      success: (data: any) => data,
      error: errorHandler(),
    }
    let messageSerializers = defaultSerializers
    if (typeof options.toast === 'object') {
      messageSerializers = Object.assign({}, defaultSerializers, options.toast)
    }
    watch(error, (value: AxiosError) => {
      if (value) {
        if (
          (typeof options.toast === 'object' && options.toast.error) ||
          (typeof options.toast === 'boolean' && options.toast === true)
        ) {
          toast.error(messageSerializers.error(value))
        }
      }
    })
    watch(result as any, (value: R) => {
      if (value) {
        if (
          (typeof options.toast === 'object' && options.toast.success) ||
          (typeof options.toast === 'boolean' && options.toast === true)
        ) {
          toast.success(messageSerializers.success(value))
        }
      }
    })
  }
  return {
    isLoading,
    result,
    error,
    exec,
  }
}
