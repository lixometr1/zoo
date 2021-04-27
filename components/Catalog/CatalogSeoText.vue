<template>
  <div class="catalog-seo-text">
    <h2>
      Забота о животных вместе с
      <span class="text-green">Zoo.com.ua (SEO)</span>
    </h2>
    <div class="catalog-seo-text__content" :class="{ open: isOpen }">
      <p class="mt-7">
        Интернет-магазин "Zoo.com.ua" доставляет продукты к вам домой, в офис,
        на дачу, а вы экономите время и силы. Мы внимательно следим за сроками
        годности, поэтому гарантируем свежесть товара, который вы приобретаете.
        <br />
        В нашем интернет-магазине вы можете купить все самые необходимые
        продукты питания на каждый день и для особых случаев, готовые блюда,
        напитки, товары для гигиены и быта. Все заказы мы привозим с
        собственного оборудованного склада, который ежедневно пополняется
        товарами от надежных поставщиков. <br />
        У нас регулярно проходят акции на весь ассортимент. Также вы можете
        экономить, оформив пластиковую или виртуальную карту Клуба
        "Перекресток". Доставляем заказы в Москве и области день в день или на
        следующий день после заказа. Есть возможность бесплатной доставки.
        Сделайте покупку через сайт или мобильное приложение: зарегистрируйтесь,
        выберете продукты и положите их в корзину, укажите адрес, временной
        интервал и способ оплаты. Статус заказа можно отслеживать онлайн. Курьер
        позвонит вам заранее, поднимет ваши продукты до квартиры и поставит
        пакеты туда, куда вы скажете. До оплаты вы имеете право отказаться от
        любого товара, даже если он уже привезен. После оплаты курьер
        предоставит вам кассовый и товарный чеки.
      </p>
      <p class="mt-5">
        <i class="font-italic font-bold">
          Мы будем рады видеть вас в числе наших постоянных клиентов!</i
        >
      </p>
    </div>
    <div class="catalog-seo-text__arrow" @click="toggle">
      <svgDoubleArrowDown
        width="11"
        :class="{ 'rotate-180': isOpen }"
        class="transform transition"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import svgDoubleArrowDown from '@/assets/icons/double_arrow_down.svg?inline'
import useOpen from '@/utils/compositions/useOpen'
export default defineComponent({
  components: { svgDoubleArrowDown },
  setup() {
    const { isOpen, open, close, toggle } = useOpen()
    return { isOpen, open, close, toggle }
  },
})
</script>

<style lang="postcss">
.catalog-seo-text {
  &__arrow {
    @apply w-14 h-14 border-2 border-white rounded-full items-center justify-center
    bg-green cursor-pointer hover:bg-green-700 transition text-white 
    sm:flex hidden mx-auto -mt-3 z-20 relative;
  }
  &__content {
    @apply sm:h-[270px] overflow-hidden relative z-10 transition;
    &.open {
      @apply h-[100%];
      &::before {
        opacity: 0;
      }
    }
    &::before {
      content: '';
      width: 100%;
      height: 30px;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 10;
      background: linear-gradient(to top, theme('colors.grey.bg') 20%, rgba(255, 255, 255, 0) 100%);
    }
  }
}
</style>