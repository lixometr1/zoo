import useOpen from './useOpen'
import useStopScroll from './useStopScroll'
const { isOpen, open: _open, close: _close } = useOpen()
const { stop, reset } = useStopScroll()

export default function useMobileMenu() {
  const open = () => {
    stop()
    _open()
  }
  const close = () => {
    reset()
    _close()
  }
  const toggle = () => {
    if (isOpen.value) {
      close()
    } else {
      open()
    }
  }
  return { open, close, isOpen, toggle }
}
