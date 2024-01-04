<script setup>
import TheFooterVue from '@/components/main/TheFooter.vue'
import TheHeader from '../components/main/TheHeader.vue'
import { useGiftStore } from '@/stores/gifts'
import { toRefs } from 'vue'

const giftStore = useGiftStore()
const { giftData } = toRefs(giftStore)
</script>

<template>
  <TheHeader />
  <div class="gifts-page">
    <div v-for="gift in giftData" :key="gift.id" class="gifts">
      <div><img :src="gift.image_url" alt="" class="gift-img" /></div>
      <div class="">
        <a :href="gift.link">{{ gift.name }}</a>
      </div>
      <div>{{ gift.price }} $</div>
    </div>
  </div>
  <TheFooterVue />
</template>

<style scoped>
.gifts-page {
  padding: 25px;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.gifts {
  display: flex;
  flex-direction: column;
  max-width: 30%;
  gap: 10px;
  border: 3px solid #f5b1b1;
  padding: 15px;
}
.gift-img {
  height: 100%;
  max-width: 100%;
}
</style>
