<template>
  <div class="category-image">
    <img :src="src" alt="image" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    src: String,
  },
  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
.category-image {
  @apply rounded-full relative ;
  &::before {
    content: "";
    @apply aspect-h-1 aspect-w-1 bg-white absolute z-10 rounded-full;
    top: 6.5%;
    left: 6.5%;
    right: 6.5%;
    bottom: 6.5%;
    /* width: 100%;
    height: 100%; */
    box-shadow: 10px 10px 24px rgba(82, 98, 114, 0.25);
  }
  img {
    @apply object-contain max-h-full w-full relative z-20;
  }
}
</style>