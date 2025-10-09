<template>
  <div class="app-container">
    <div class="animated-background">
      <div class="gradient-overlay"></div>
      <div class="particles">
        <div v-for="i in 50" :key="i" class="particle" :style="getParticleStyle(i)"></div>
      </div>
    </div>
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

const getParticleStyle = (index: number) => {
  const size = Math.random() * 4 + 1
  const left = Math.random() * 100
  const animationDuration = Math.random() * 20 + 10
  const animationDelay = Math.random() * 5
  
  return {
    width: `${size}px`,
    height: `${size}px`,
    left: `${left}%`,
    animationDuration: `${animationDuration}s`,
    animationDelay: `${animationDelay}s`
  }
}
</script>

<style scoped>
.app-container {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
}

.animated-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #0a1628 0%, #1a2744 25%, #0f1b2e 50%, #1e3a5f 75%, #0a1628 100%);
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
  z-index: -2;
}

.gradient-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 40% 20%, rgba(34, 211, 238, 0.1) 0%, transparent 50%);
  animation: overlayPulse 10s ease-in-out infinite;
}

.particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.particle {
  position: absolute;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  bottom: -10px;
  animation: floatUp linear infinite;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}

.content {
  position: relative;
  z-index: 1;
  min-height: 100vh;
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes overlayPulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

@keyframes floatUp {
  0% {
    bottom: -10px;
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    bottom: 110%;
    opacity: 0;
  }
}
</style>
