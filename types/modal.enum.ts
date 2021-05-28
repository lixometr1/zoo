export enum ModalName {
  productImages = 'product-images',
  compareList = 'compare-list',
}
export const ModalComponents: { [key: string]: () => Promise<any> } = {
  [ModalName.productImages]: () =>
    import('@/components/Modals/ProductImagesModal.vue'),
  [ModalName.compareList]: () =>
    import('@/components/Modals/CompareListModal.vue'),
}
