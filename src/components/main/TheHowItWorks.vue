<script setup>
import { reactive } from 'vue'
const pageInfoArr = reactive([
  {
    img: '../src/assets/images/item1.png',
    title: 'Визначаємо бюджет',
    article:
      'Вказуємо на яку суму орієнтуватися при пошуку товарів. А також знайомимо з нашою формулою розподілу бюджета.'
  },
  {
    img: '../src/assets/images/item2.png',
    title: 'Опис індивідуальності людини',

    article:
      'Знайомство з людиною для якої шукаємо подарунок. Невеличке опитування та відомі Вам риси характеру, захоплення та вподобання і смаки. '
  },
  {
    img: '../src/assets/images/item3.png',
    title: 'Уточнення пошуку',
    article:
      'З урахуванням попередніх даних виконуємо пошук найбільш вирогідних категорій товарів для остаточного визначення подарунку.'
  }
])
const pageInfoRow = reactive([
  {
    img: '../src/assets/images/item4.png',
    title: 'Генерація варіантів подарунку',
    article:
      'На основі отриманих результатів виконується отбір декілька варіантів можливих подарунків з асортіменту інтернет-магазіну.'
  },
  {
    img: '../src/assets/images/item5.png',
    title: 'Фінальний вибір',
    article:
      'Остаточне затвердженя фінального набору подарунку. Формування заказу на сторінці інтернет-магазіну.'
  },
  {
    img: '../src/assets/images/item6.png',
    title: 'Відправка адресату',
    article:
      'Відправка подарунка на вказану адресу або відправка віртуального подарунку з можливостю внесеня змін до сформованого заказу.'
  }
])
</script>

<template>
  <div class="main-wrapper container" id="work">
    <div class="legend">Як це працює?</div>
    <div class="items-rows">
      <div class="about-items">
        <div class="page-main-row" v-for="(item, index) in pageInfoArr" :key="index">
          <div class="item-img">
            <img :src="item.img" alt="/" class="img" />
          </div>
          <div class="tittle">
            {{ item.title }}
          </div>
          <div class="article">
            {{ item.article }}
          </div>
        </div>
      </div>
      <div class="about-items">
        <div class="page-main-row" v-for="(item, index) in pageInfoRow" :key="index">
          <div class="item-img">
            <img :src="item.img" alt="/" class="img" />
          </div>
          <div class="tittle">
            {{ item.title }}
          </div>
          <div class="article">
            {{ item.article }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main-wrapper {
  width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 150px;
}
.legend {
  color: #141414;
  font-family: 'Lato', sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
  padding-left: 29px;
  padding-top: 6px;
}
.about-items {
  display: flex;
  gap: 75px;
}
.page-main-row {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 15px;
  flex: 1;
}
.tittle {
  color: #2c2d5b;
  font-family: 'Lato', sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-transform: capitalize;
}
.article {
  color: #4f4f4f;
  font-family: 'Lato', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}
.items-rows {
  display: flex;
  flex-direction: column;
  gap: 44px;
  padding: 44px 0;
}
.item-img {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 60px;
  border-radius: 100px;
  background: #fff;
  box-shadow: 0px 0px 25px 0px rgba(151, 151, 151, 0.25);
}
.img {
  height: 43px;
  width: 43px;
}
</style>
