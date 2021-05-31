export enum ModalName {
  productImages = 'product-images',
  compareList = 'compare-list',
  login = 'login',
  signup = 'signup',
  restore = 'restore'
}
export const ModalComponents: { [key: string]: () => Promise<any> } = {
  [ModalName.productImages]: () =>
    import('@/components/Modals/ProductImagesModal.vue'),
  [ModalName.compareList]: () =>
    import('@/components/Modals/CompareListModal.vue'),
  [ModalName.login]: () => import('@/components/Modals/LoginModal.vue'),
  [ModalName.signup]: () => import('@/components/Modals/SignupModal.vue'),
}
