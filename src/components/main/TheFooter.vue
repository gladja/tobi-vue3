<script setup>
import { reactive } from 'vue'
const imageFolderPath = '../src/assets/images/'
const socialIcons = reactive(['facebook.svg', 'instagram.svg', 'twitter.svg', 'viber.svg'])
</script>
<template>
  <footer class="footer" id="contacts" container>
    <div class="main-content">
      <div class="footer-wrapper">
        <div class="footer-logo">
          <span class="logo-name"> ТОБІ</span>
          <span class="logo-text"
            >Сервіс вибору ідеального подарунку з урахуванням особистостей людини!</span
          >
        </div>
        <ul class="footer-nav">
          <li class="item-header">Explore</li>
          <li class="logo-text">Як це працює?</li>
          <li class="logo-text">Про Нас</li>
          <li class="logo-text">Контакти</li>
        </ul>
        <ul class="footer-nav">
          <li class="item-header">Legal</li>
          <li class="logo-text">Terms</li>
          <li class="logo-text">Privacy</li>
        </ul>
        <div class="social-menu">
          <div class="item-header">
            <span>Social Media</span>
            <div class="social-footer">
              <div class="social-item" v-for="(icon, index) in socialIcons" :key="index">
                <img :src="imageFolderPath + icon" alt="/" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script></script>

<style scoped>
.footer {
  display: inline-flex;
  height: 252px;
  padding: 50px 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  background: #2c2d5b;
  margin-top: 44px;
  width: 100%;
}
.footer-wrapper {
  display: flex;
  align-items: flex-start;
  gap: 168px;
}
.main-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
}
.footer-logo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
}
.logo-name {
  color: #fff;
  font-family: 'Lato', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
}
.logo-text {
  color: #fff;
  font-family: 'Lato', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
}
.item-header {
  color: #fff;
  font-family: 'Lato', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
}
.footer-nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.social-menu {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: nowrap;
  gap: 20px;
}
.social-footer {
  display: flex;
  align-items: center;
  gap: 20px;
  padding-top: 10px;
}
.social-item {
  width: 50px;
  height: 50px;
  background: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
</style>
