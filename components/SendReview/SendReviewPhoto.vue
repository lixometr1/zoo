<template>
  <div
    class="send-review-photo"
    :class="{ 'file-over': fileOver }"
    @drop="onDrop"
    @dragover="onDragOver"
    @dragleave.self="onDragLeave"
  >
    <div class="flex-y-center sm:flex-col sm:items-start sm:space-y-3">
      <div class="flex-1 mr-8 sm:mr-0">
        <div class="flex mb-2">
          <svgPicture width="27" class="text-blue mr-3.5 flex-shrink-0" />
          <div class="font-bold text-lg sm:text-base sm:leading-5">
            {{ $t('createReview.addPhotos') }}
          </div>
        </div>
        <div class="text-sm" v-html="description"></div>
      </div>
      <div class="flex-shrink-0">
        <label
          :for="inputId"
          class="
            font-medium
            py-4
            px-6
            rounded-md
            bg-blue
            text-white
            cursor-pointer
            block
            white-space-nowrap
            sm:text-sm
            border
            border-transparent
            hover:text-grey
            
            hover:border-blue
            hover:bg-transparent
            transition-all
          "
        >
          {{ $t('chooseFiles') }}
        </label>
      </div>
    </div>
    <input
      :id="inputId"
      ref="input"
      type="file"
      multiple
      class="send-review-photo__input"
      @change="onInputFiles"
    />
    <div class="flex flex-wrap -mx-1">
      <div
        v-for="(item, idx) in imageFiles"
        :key="idx"
        class="w-1/5 md:w-1/4 sm:w-1/3 xs:w-1/2 px-1 mb-2"
      >
        <div class="rounded-md border border-grey-light">
          <div
            class="h-18 w-full bg-cover bg-center bg-no-repeat"
            :style="{ backgroundImage: `url(${item.image})` }"
          ></div>
          <div class="flex text-grey border-t transition-all border-grey-light">
            <div
              class="
                flex-1
                border-r border-grey-light
                flex-center
                cursor-pointer
                py-2
                group
              "
              @click="removeFile(idx)"
            >
              <svgRemove
                width="14"
                class="group-hover:opacity-100 opacity-50"
              />
            </div>
            <div class="flex-1 py-2 cursor-pointer flex-center group">
              <svgRefresh
                width="16"
                class="group-hover:opacity-100 opacity-50"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  ref,
  useContext,
} from '@nuxtjs/composition-api'
import svgPicture from '@/assets/icons/picture.svg?inline'
import svgRemove from '@/assets/icons/delete_bin.svg?inline'
import svgRefresh from '@/assets/icons/refresh.svg?inline'
import { uid } from 'uid'
export default defineComponent({
  components: { svgPicture, svgRemove, svgRefresh },
  props: {
    value: {
      type: Array,
      default: () => [],
    },
  },
  setup() {
    const input = ref(null)
    const files = ref([] as any)
    const imageFiles = computed(() => {
      return files.value.map((file: File) => {
        return {
          file,
          image: URL.createObjectURL(file),
        }
      })
    })
    const onInputFiles = (e: any) => {
      if (files.value.length >= 10) return

      console.log(e.target.files)
      files.value = [...files.value, ...e.target.files]
    }
    const fileOver = ref(false)
    const onDragOver = (e: any) => {
      fileOver.value = true
    }
    const onDragLeave = () => {
      fileOver.value = false
    }
    const onDrop = (e: any) => {
      console.log('drop')
      e.preventDefault()
      fileOver.value = false
    }
    const removeFile = (idx: number) => {
      files.value.splice(idx, 1)
    }
    const { i18n } = useContext()
    const description = computed(() => {
      let text = i18n.t('createReview.addPhotosDescription') as string
      text = text.replace(
        /\*\*.+?\*\*/g,
        (str: string) => `<b>${str.replace(/\*\*/g, '')}</b>`
      )
      return text
    })
    const inputId = uid()
    return {
      removeFile,
      imageFiles,
      inputId,
      files,
      onInputFiles,
      input,
      onDragOver,
      onDragLeave,
      onDrop,
      description,
      fileOver,
    }
  },
})
</script>

<style lang="postcss">
.send-review-photo {
  @apply p-6 border-2 border-dashed border-grey border-opacity-30 rounded-md text-left;
  &__input {
    @apply w-0 h-0 inline-block;
  }
  &.file-over {
    @apply opacity-70;
  }
}
</style>