<template>
  <div class="flex flex-col gap-1.5 sm:gap-2 w-full max-w-[200px] sm:max-w-xs" :style="{ fontFamily: theme.font }">
    <button
      class="px-4 py-2 sm:px-5 sm:py-2.5 rounded-md sm:rounded-lg text-[10px] sm:text-xs font-semibold shadow-md transition-transform hover:scale-105"
      :style="{ background: theme.primary, color: '#fff' }"
    >
      Primary Action
    </button>
    
    <button
      class="px-4 py-2 sm:px-5 sm:py-2.5 rounded-md sm:rounded-lg text-[10px] sm:text-xs font-semibold shadow-md transition-transform hover:scale-105"
      :style="{ background: theme.accent, color: '#fff' }"
    >
      Secondary Action
    </button>
    
    <button
      class="px-4 py-2 sm:px-5 sm:py-2.5 rounded-md sm:rounded-lg text-[10px] sm:text-xs font-semibold border-2 transition-transform hover:scale-105"
      :style="{ 
        borderColor: theme.primary, 
        color: theme.primary,
        background: 'transparent'
      }"
    >
      Outline Button
    </button>

    <button
      class="px-4 py-2 sm:px-5 sm:py-2.5 rounded-md sm:rounded-lg text-[10px] sm:text-xs font-semibold transition-all hover:bg-gray-100"
      :style="{ 
        color: theme.text,
        background: 'transparent'
      }"
    >
      Ghost Button
    </button>
  </div>
</template>

<script setup lang="ts">
const { theme } = useTheme()
</script>
