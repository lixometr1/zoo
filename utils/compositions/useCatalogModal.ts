import { ref } from '@nuxtjs/composition-api'
import useOpen from './useOpen'
const { isOpen, open, close } = useOpen()

export default function useCatalogModal() {
  return { open, close, isOpen }
}
