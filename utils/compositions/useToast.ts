import { useContext } from '@nuxtjs/composition-api'
import { ToastOptions } from 'vue-toasted'
export default function useToast() {
  const toast = useContext().$toast
  const clear = () => {
    toast.clear()
  }
  const success = (message: string, opts?: Omit<ToastOptions, 'type'>) => {
    toast.success(message, { ...opts })
  }
  const error = (message: string, opts?: Omit<ToastOptions, 'type'>) => {
    toast.error(message, { ...opts })
  }

  return { clear, success, error }
}
