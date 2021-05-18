export enum ModalName {
  productImages = 'product-images',
}
export const ModalComponents: { [key: string]: () => Promise<any> } = {
  [ModalName.productImages]: () =>
    import('@/components/Modals/ProductImagesModal.vue'),
}
