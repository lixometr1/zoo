<template>
  <!--  :class="{
      'opacity-50 hover:no-underline cursor-default': cnt < 1,
    }" -->
  <a
    href="javascript:void(0)"
    class="text-sm font-bold flex-y-center mr-4 hover:underline sm:text-xs"
    v-bind="$attrs"
    v-on="$listeners"
    ><svgDelete width="14" class="mr-2" />
    {{ $t('deleteChosen') }}
    <span class="opacity-50 ml-1.5">{{ cnt }}</span>
  </a>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import svgDelete from '@/assets/icons/delete_bin.svg?inline'

export default defineComponent({
  components: { svgDelete },
  props: {
    cnt: Number,
  },
  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
</style>