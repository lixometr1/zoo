export default function useStopScroll() {
  const stop = () => {
    document.body.classList.add('overflow-hidden')
    console.log(1)
  }
  const reset = () => {
    document.body.classList.remove('overflow-hidden')
  }
  return { stop, reset }
}
