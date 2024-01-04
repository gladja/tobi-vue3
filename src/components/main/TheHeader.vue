<script setup>
import { reactive } from 'vue'

const navArr = reactive(['Як це Працює?', 'Про нас', 'Контакти'])
const linkArr = ['/tobi-vue3/#work', '#about', '#contacts']
</script>

<template>
  <header class="container">
    <nav class="nav-wrap">
      <a class="nav-logo" href="/">ТОБІ</a>
      <ul class="nav-menu">
        <li v-for="(itm, idx) in navArr" :key="idx">
          <a class="menu-item" :href="linkArr[idx]">{{ itm }}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.nav-wrap {
  font-size: 48px;
  font-weight: 900;
  display: flex;
  justify-content: center;
  gap: 62.5px;
  margin: 50px 0;
}

.nav-logo {
  color: var(--font-logo);
  text-decoration: none;
  transition: all var(--hover-effect);
}
.nav-logo:hover {
  color: var(--font-simorange);
}

.nav-menu {
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 62.5px;
}

.menu-item {
  color: var(--font-black);
  text-decoration: none;
  padding: 10px 0;
  transition: color var(--hover-effect);
}

.menu-item:hover {
  color: var(--font-simorange);
  border-bottom: solid 2px var(--font-black);
}
</style>
