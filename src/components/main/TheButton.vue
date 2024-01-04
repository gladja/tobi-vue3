<script setup>
defineProps({
  text: String,
  bg: String,
  color: String,
  size: String
})
</script>

<template>
  <button :style="{ 'background-color': bg, color, 'font-size': size }" class="btn">
    {{ text }}
  </button>
</template>

<style scoped>
.btn {
  font-weight: 800;
  padding: 15px;
  border-radius: 12px;
  border: solid 1px var(--font-logo);
  transition: all var(--hover-effect);
  margin: 0 auto;
}

.btn:hover {
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>
