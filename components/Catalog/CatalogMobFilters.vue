<template>
  <transition name="t-filters">
    <div v-if="isOpen" class="catalog-mob-filters">
      <div class="catalog-mob-filters__content">
        <div
          class="flex bg-green text-white justify-between items-center py-4 px-5.5 font-bold"
        >
          <div class="text-sm">{{ $t('filters') }} (202)</div>
          <a
            href="javascript:void(0)"
            class="flex-y-center"
            @click.prevent="done"
          >
            <svgCheckmark width="10" class="mr-2" />
            {{ $t('done') }}
          </a>
        </div>
        <div class="px-5.5 py-4 max-h-full flex-1 overflow-auto pb-[100px]">
          <CatalogFilters />
        </div>
        <div class="catalog-mob-filters__footer">
          <button class="btn-green w-full sm:text-sm" @click.prevent="apply">
            <span class="mr-1">{{ $t('apply') }}</span>
            <span class="mr-1">{{ $t('and') }}</span>
            <span class="lowercase"> {{ $t('close') }}</span>
          </button>
        </div>
      </div>
      <div class="catalog-mob-filters__overlay" @click="close"></div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import useCatalogFilters from '@/utils/compositions/useCatalogFilters'
import svgCheckmark from '@/assets/icons/checkmark.svg?inline'
export default defineComponent({
  components: { svgCheckmark },
  setup() {
    const { isOpen, close } = useCatalogFilters()
    const done = () => {
      close()
    }
    const apply = () => {
      close()
    }
    return {
      apply,
      done,
      isOpen,
      close,
    }
  },
})
</script>

<style lang="postcss">
.catalog-mob-filters {
  @apply hidden lg:block fixed top-0 left-0 right-0 bottom-0 max-h-full z-50;
  &__content {
    @apply bg-grey-bg max-w-[400px] h-full relative max-h-full flex flex-col z-20;
  }
  &__footer {
    @apply bg-white px-5.5 py-3  absolute bottom-0 left-0 right-0 z-20;
    box-shadow: 0px 0px 50px rgba(69, 80, 103, 0.15);
  }
  &__overlay {
    @apply bg-grey bg-opacity-20 absolute top-0 left-0 right-0 bottom-0 z-10;
  }
}
.t-filters-enter,
.t-filters-leave-to {
  .catalog-mob-filters__content {
    transform: translateX(-100%);
  }
  .catalog-mob-filters__overlay {
    opacity: 0;
  }
}
.t-filters-leave-active,
.t-filters-enter-active {
  transition: 0.3s;

  .catalog-mob-filters__content {
    transition: 0.3s;
  }
  .catalog-mob-filters__overlay {
    transition: 0.3s;
  }
}
</style>