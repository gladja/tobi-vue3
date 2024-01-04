<script setup>
import TheFooterVue from '@/components/main/TheFooter.vue'
import TheHeader from '../components/main/TheHeader.vue'
import TheHero from '../components/main/TheHero.vue'
import TheButton from '../components/main/TheButton.vue'
import ThePopup from '../components/main/ThePopup.vue'
import TheHowItWorks from '@/components/main/TheHowItWorks.vue'
import { ref } from 'vue'

const showPopup = ref(false)
const openPopup = () => {
  showPopup.value = !showPopup.value
}
</script>

<template>
  <div class="main">
    <TheHeader />
    <TheHero />
    <TheHowItWorks />
    <TheButton text="Заповнити анкету" bg="#2C2D5B" color="#fff" size="14px" @click="openPopup" />
    <ThePopup v-if="showPopup" :openPopup="openPopup" />
    <TheFooterVue />
  </div>
</template>
<style scoped>
.main {
  display: flex;
  flex-direction: column;
}
</style>
