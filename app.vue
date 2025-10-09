<template>
  <div class="app-container">
    <div class="static-background"></div>
    <div class="content">
      <NuxtPage />
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'en'
  }
})
</script>

<style scoped>
.app-container {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
}

.static-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, 
    #0a1929 0%, 
    #0d2847 25%, 
    #0f3460 50%, 
    #0d2847 75%, 
    #0a1929 100%);
  z-index: -1;
}

.content {
  position: relative;
  z-index: 1;
  min-height: 100vh;
}
</style>
