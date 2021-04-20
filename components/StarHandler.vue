<template>
  <div class="star-handler" :class="{ active, hover }">
    <svgStar class="star-stroke" />
    <svgStarFill class="star-fill" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import svgStar from '@/assets/icons/star.svg?inline'
import svgStarFill from '@/assets/icons/star_fill.svg?inline'
export default defineComponent({
  components: { svgStar, svgStarFill },
  props: {
    active: Boolean,
    hover: Boolean,
  },
  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
.star-handler {
  .star-fill {
    display: none;
  }
  &.hover:hover,
  &.active {
    .star-stroke {
      display: none;
    }
    .star-fill {
      display: block;
    }
  }
}
</style>