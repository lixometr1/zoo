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
  @apply w-[230px] h-[230px] border-[3px] border-white rounded-full sm:w-[100px] sm:h-[100px];
  box-shadow: 5px 10px 40px rgba(0, 0, 0, 0.2);
  img {
    @apply object-cover max-h-full rounded-full;
  }
}
</style>