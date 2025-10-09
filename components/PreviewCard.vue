<template>
  <div
    class="w-full max-w-[240px] sm:max-w-[280px] p-3 sm:p-4 lg:p-5 rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl transition-all duration-300 hover:scale-[1.02]"
    :style="{
      background: theme.bg,
      color: theme.text,
      fontFamily: theme.font
    }"
  >
    <div
      class="inline-block px-2 py-1 sm:px-3 sm:py-1.5 rounded-md sm:rounded-lg font-bold text-[10px] sm:text-xs mb-2 sm:mb-3"
      :style="{ background: theme.primary, color: '#fff' }"
    >
      Featured
    </div>
    
    <h3 class="text-sm sm:text-base lg:text-lg font-bold mb-1.5 sm:mb-2">Awesome Product</h3>
    
    <p class="text-[10px] sm:text-xs opacity-90 mb-3 sm:mb-4 leading-relaxed">
      A short description showing how the theme maps to an actual UI component.
    </p>
    
    <div class="flex flex-col xs:flex-row gap-1.5 sm:gap-2">
      <button
        class="px-3 py-1.5 sm:px-4 sm:py-2 rounded-md sm:rounded-lg text-[10px] sm:text-xs font-semibold transition-transform hover:scale-105"
        :style="{ background: theme.accent, color: '#fff' }"
      >
        Buy Now
      </button>
      <button
        class="px-3 py-1.5 sm:px-4 sm:py-2 rounded-md sm:rounded-lg text-[10px] sm:text-xs font-semibold border-2 transition-transform hover:scale-105"
        :style="{ 
          borderColor: theme.primary, 
          color: theme.primary,
          background: 'transparent'
        }"
      >
        Learn More
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const { theme } = useTheme()
</script>
