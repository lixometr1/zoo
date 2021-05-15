<template>
  <div class="icon-handler" :class="{ active, hover }">
    <slot
      v-bind="{ attrs: { class: 'icon-stroke ' + strokeClass } }"
      name="stroke"
    />
    <slot v-bind="{ attrs: { class: 'icon-fill ' + fillClass } }" name="fill" />
  </div>
</template> 

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
export default defineComponent({
  props: {
    active: Boolean,
    hover: Boolean,
    strokeClass: [String, Array, Object],
    fillClass: [String, Array, Object],
  },
  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
.icon-handler {
  .icon-fill {
    display: none;
  }
  &.hover:hover,
  &.active {
    .icon-stroke {
      display: none;
    }
    .icon-fill {
      display: block;
    }
  }
}
</style>