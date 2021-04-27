<template>
  <transition :name="modalTransition">
    <div v-if="isOpen" :class="modalClass" class="modal-wrapper">
      <component
        :is="activeModal"
        v-bind="cProps"
        v-on="cListeners"
        @close="close"
      />
      <div class="modal-overlay" @click="overlayClick"></div>
    </div>
  </transition>
</template>

<script>
import useModal from '@/utils/compositions/useModal'
import { computed, defineComponent, ref } from '@nuxtjs/composition-api'
// import svgClose from "@/assets/icons/close.svg";
export default defineComponent({
  setup(props, { emit }) {
    const isOpen = ref(false)
    const activeName = ref('')
    const cProps = ref({})
    const cListeners = ref({})
    const activeModal = ref({})
    const modalTransition = ref('modal-fade')
    const { api } = useModal()
    const open = () => {
      isOpen.value = true
    }
    const close = () => {
      isOpen.value = false
      cProps.value = {}
      cListeners.value = {}
      activeName.value = ''
    }
    api.on('open', ({ component, name, transition, props = {}, on = {} }) => {
      cProps.value = props
      cListeners.value = on
      activeModal.value = component
      activeName.value = name
      if (transition) {
        modalTransition.value = transition
      }
      open()
    })
    api.on('close', () => {
      close()
    })
    const overlayClick = () => {
      if (cProps.value._closeOnOverlay === false) {
        return
      }
      close()
    }
    const modalClass = computed(() => {
      return `modal-${activeName.value}`
    })
    return {
      modalClass,
      isOpen,
      open,
      close,
      cListeners,
      cProps,
      activeModal,
      modalTransition,
      overlayClick,
    }
  },
})
</script>

<style lang="scss">
.modal-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-overlay {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,.3);
}

.modal-content {
  background: #fff;
  border-radius: 5px;
  box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.4);
  padding: 3.5rem 7rem;
  position: relative;
  z-index: 2;
  
}

.modal-close {
  position: absolute;
  top: 3.5rem;
  right: 4rem;
  cursor: pointer;
 
}

.modal-fade-enter,
.modal-fade-leave-to {
  .modal-content {
    opacity: 0;
  }

  .modal-overlay {
    opacity: 0;
  }
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: .3s;
}
</style>