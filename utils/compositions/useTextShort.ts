export default function useTextShort(text: string, cnt: number) {
  const piece = text.trim().split('').slice(0, cnt)
  if (piece.length < text.trim().length) {
    piece.push('...')
  }
  return piece.join('')
}
