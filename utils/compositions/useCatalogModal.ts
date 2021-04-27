import { ref } from '@nuxtjs/composition-api'
const isOpen = ref(false)

export default function useCatalogModal() {
  const open = () => {
    isOpen.value = true
  }
  const close = () => {
    isOpen.value = false
  }
  return { open, close, isOpen }
}
