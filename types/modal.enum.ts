export enum ModalName {
  productImages = 'product-images',
  compareList = 'compare-list',
  login = 'login',
  signup = 'signup',
  restorePassword = 'restorePassword',
  quickView = 'quickView'
}
export const ModalComponents: { [key: string]: () => Promise<any> } = {
  [ModalName.productImages]: () =>
    import('@/components/Modals/ProductImagesModal.vue'),
  [ModalName.compareList]: () =>
    import('@/components/Modals/CompareListModal.vue'),
  [ModalName.login]: () => import('@/components/Modals/LoginModal.vue'),
  [ModalName.signup]: () => import('@/components/Modals/SignupModal.vue'),
  [ModalName.quickView]: () => import('@/components/Modals/QuickViewModal.vue'),
  [ModalName.restorePassword]: () => import('@/components/Modals/RestorePasswordModal.vue'),
}
