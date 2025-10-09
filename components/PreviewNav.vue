<template>
  <nav
    class="w-full flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-md overflow-x-auto"
    :style="{
      fontFamily: theme.font,
      background: theme.bg,
      color: theme.text
    }"
  >
    <div class="font-bold text-sm sm:text-base lg:text-lg whitespace-nowrap" :style="{ color: theme.primary }">
      Brand
    </div>
    
    <div class="hidden sm:flex gap-2 sm:gap-3 ml-2 sm:ml-3">
      <a href="#" class="font-medium text-[10px] sm:text-xs hover:opacity-70 transition-opacity whitespace-nowrap">Home</a>
      <a href="#" class="font-medium text-[10px] sm:text-xs hover:opacity-70 transition-opacity whitespace-nowrap">Features</a>
      <a href="#" class="font-medium text-[10px] sm:text-xs hover:opacity-70 transition-opacity whitespace-nowrap hidden md:inline">Pricing</a>
    </div>
    
    <div class="ml-auto flex items-center gap-1.5 sm:gap-2">
      <button
        class="hidden sm:inline-block px-2 sm:px-3 py-1 sm:py-1.5 rounded-md text-[10px] sm:text-xs font-medium hover:opacity-80 transition-opacity whitespace-nowrap"
        :style="{ color: theme.text }"
      >
        Sign In
      </button>
      <button
        class="px-2 sm:px-3 py-1 sm:py-1.5 rounded-md text-[10px] sm:text-xs font-semibold transition-transform hover:scale-105 whitespace-nowrap"
        :style="{ background: theme.accent, color: '#fff' }"
      >
        Get Started
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
const { theme } = useTheme()
</script>
