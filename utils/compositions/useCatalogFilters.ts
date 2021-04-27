import { ref } from '@nuxtjs/composition-api'
import useOpen from '@/utils/compositions/useOpen'
const { isOpen, open, close } = useOpen()

export default function useCatalogFilters() {
  return { open, close, isOpen }
}
