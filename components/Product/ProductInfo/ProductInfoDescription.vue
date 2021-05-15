<template>
  <div class="product-description">
    <div>
      <h3>Royal Canin Maxi Adult</h3>
      <p>
        Pro Plan Sterilised Senior 7+ Сухой корм для стерилизованных кошек
        старше 7 лет с индейкой Сухой корм для пожилых котов и кошек включает
        полезные вещества, обеспечивающие питомцу долгую жизнь без разных
        болезней. В его состав входит 40% белка и всего 13% — жира. Благодаря
        этому поддерживается нормальный вес животного. Высокая концентрация
        витаминов улучшает работу жизненно важных органов (включая иммунную,
        мочевыводящую системы). Также снижается риск появления мочекаменного
        заболевания, которое распространено среди животных старше 7 лет
      </p>
    </div>
    <div class="mt-4">
      <h3>Основные компоненты:</h3>
      <ul class="grid-flow-col grid-rows-6 grid">
        <li><svgCheckmark width="10" />мясо индейки (14%)</li>
        <li><svgCheckmark width="10" />сухой белок</li>
        <li><svgCheckmark width="10" />рис</li>
        <li><svgCheckmark width="10" />кукурузный крахмал</li>
        <li><svgCheckmark width="10" />пшеничный глютен</li>
        <li>
          <svgCheckmark width="10" />минералы (йод, железо, медь, манган, цинк,
          селен)
        </li>
        <li><svgCheckmark width="10" />витамины (А, Е, С, D)</li>
        <li><svgCheckmark width="10" />аминокислоты</li>
        <li><svgCheckmark width="10" />Калорийность – 388 ккал/100 г</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import svgCheckmark from '@/assets/icons/checkmark.svg?inline'
export default defineComponent({
  components: { svgCheckmark },
  setup() {
    return {}
  },
})
</script>

<style lang="postcss">
.product-description {
  h3 {
    @apply mb-2;
  }
  ul {
    li {
      @apply flex items-start font-medium;
      /* &::before {
        @apply mr-2;
        content: '';
        background: url(~@/assets/icons/checkmark.svg) center center no-repeat;
        background-size: contain;
        width: 10px;
        height: 10px;
        position: relative;
        top: 7px;
      } */
      svg {
        @apply mr-2 text-green;
        width: 10px;
        height: 10px;

        position: relative;
        top: 7px;
      }
    }
  }
}
</style>