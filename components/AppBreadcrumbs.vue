<template>
  <div class="flex items-center py-page lg:py-page-mob">
    <router-link class="flex items-center mr-1" :to="localePath('/')">
      <svgHome width="20" class="text-green mr-2 transform -translate-y-0.5" />
      <span class="text-sm text-grey text-opacity-50">/</span>
    </router-link>
    <router-link
      v-for="(link, idx) in breadcrumbsItems"
      :key="idx"
      :to="link.routeName ? localePath({ name: link.routeName }) : '#'"
      class="text-grey text-opacity-50 mx-1"
    >
      {{ link.name }} <span class="text-sm">/</span>
    </router-link>
    <div class="mx-1">
      {{ currentItem.name }}
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from '@nuxtjs/composition-api'
import svgHome from '@/assets/icons/home.svg?inline'
export default defineComponent({
  components: { svgHome },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const { items } = toRefs(props)
    const currentItem = computed(() => items.value[items.value.length - 1])
    const breadcrumbsItems = computed(() =>
      items.value.slice(0, items.value.length - 1)
    )
    return {
      breadcrumbsItems,
      currentItem,
    }
  },
})
</script>

<style lang="postcss"></style>
