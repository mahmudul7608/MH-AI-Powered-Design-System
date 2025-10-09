<template>
  <div class="bg-gradient-to-br from-slate-800/90 via-blue-900/80 to-slate-800/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-5 min-h-[500px] shadow-2xl border border-cyan-500/30">
    <div class="flex items-center gap-1.5 mb-3">
      <Icon name="ph:palette-fill" class="text-cyan-400 text-base sm:text-lg drop-shadow" />
      <h2 class="text-sm sm:text-base font-bold text-white">Theme Controls</h2>
    </div>

    <!-- Color Pickers -->
    <div class="space-y-2 sm:space-y-2.5">
      <div>
        <label class="block text-[10px] sm:text-xs font-semibold text-cyan-100 mb-1">
          <Icon name="ph:circle-fill" class="inline text-blue-500" />
          Primary Color
        </label>
        <div class="flex gap-2">
          <input
            type="color"
            :value="theme.primary"
            @input="(e) => handleColorInput('primary', e)"
            class="w-full h-10 sm:h-11 rounded-lg cursor-pointer border-2 border-cyan-500/30 hover:border-cyan-400 transition-colors shadow-sm"
          />
          <input
            type="text"
            :value="theme.primary"
            @input="(e) => handleColorInput('primary', e)"
            class="w-16 sm:w-20 px-1.5 sm:px-2 py-1.5 rounded-md border-2 border-cyan-500/30 text-[10px] sm:text-xs font-mono focus:border-cyan-400 focus:outline-none bg-slate-900/50 text-white shadow-sm"
          />
        </div>
      </div>

      <div>
        <label class="block text-[10px] sm:text-xs font-semibold text-cyan-100 mb-1">
          <Icon name="ph:circle-fill" class="inline text-orange-500" />
          Accent Color
        </label>
        <div class="flex gap-2">
          <input
            type="color"
            :value="theme.accent"
            @input="(e) => handleColorInput('accent', e)"
            class="w-full h-10 sm:h-11 rounded-lg cursor-pointer border-2 border-cyan-500/30 hover:border-cyan-400 transition-colors shadow-sm"
          />
          <input
            type="text"
            :value="theme.accent"
            @input="(e) => handleColorInput('accent', e)"
            class="w-16 sm:w-20 px-1.5 sm:px-2 py-1.5 rounded-md border-2 border-cyan-500/30 text-[10px] sm:text-xs font-mono focus:border-cyan-400 focus:outline-none bg-slate-900/50 text-white shadow-sm"
          />
        </div>
      </div>

      <div>
        <label class="block text-[10px] sm:text-xs font-semibold text-cyan-100 mb-1">
          <Icon name="ph:circle-fill" class="inline text-gray-100 stroke-gray-400" />
          Background
        </label>
        <div class="flex gap-2">
          <input
            type="color"
            :value="theme.bg"
            @input="(e) => handleColorInput('bg', e)"
            class="w-full h-10 sm:h-11 rounded-lg cursor-pointer border-2 border-cyan-500/30 hover:border-cyan-400 transition-colors shadow-sm"
          />
          <input
            type="text"
            :value="theme.bg"
            @input="(e) => handleColorInput('bg', e)"
            class="w-16 sm:w-20 px-1.5 sm:px-2 py-1.5 rounded-md border-2 border-cyan-500/30 text-[10px] sm:text-xs font-mono focus:border-cyan-400 focus:outline-none bg-slate-900/50 text-white shadow-sm"
          />
        </div>
      </div>

      <div>
        <label class="block text-[10px] sm:text-xs font-semibold text-cyan-100 mb-1">
          <Icon name="ph:text-aa-fill" class="inline text-gray-900" />
          Text Color
        </label>
        <div class="flex gap-2">
          <input
            type="color"
            :value="theme.text"
            @input="(e) => handleColorInput('text', e)"
            class="w-full h-10 sm:h-11 rounded-lg cursor-pointer border-2 border-cyan-500/30 hover:border-cyan-400 transition-colors shadow-sm"
          />
          <input
            type="text"
            :value="theme.text"
            @input="(e) => handleColorInput('text', e)"
            class="w-16 sm:w-20 px-1.5 sm:px-2 py-1.5 rounded-md border-2 border-cyan-500/30 text-[10px] sm:text-xs font-mono focus:border-cyan-400 focus:outline-none bg-slate-900/50 text-white shadow-sm"
          />
        </div>
      </div>
    </div>

    <!-- Font Selector -->
    <div class="mt-2.5 sm:mt-3">
      <label class="block text-[10px] sm:text-xs font-semibold text-gray-800 mb-1">
        <Icon name="ph:text-t-fill" class="inline" />
        Font Family
      </label>
      <select
        :value="theme.font"
        @change="handleFontChange"
        class="w-full px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg border-2 border-cyan-500/30 focus:border-cyan-400 focus:outline-none text-xs sm:text-sm font-medium cursor-pointer hover:border-cyan-400 transition-colors bg-slate-900/50 text-white shadow-sm"
      >
        <option v-for="font in fonts" :key="font.name" :value="font.name">
          {{ font.name }}
        </option>
      </select>
    </div>

    <!-- Action Buttons -->
    <div class="mt-2.5 sm:mt-3 pt-2.5 sm:pt-3 border-t border-cyan-500/30 space-y-1.5 sm:space-y-2">
      <button
        @click="copyCode"
        :class="[
          'w-full px-2.5 sm:px-3 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-1.5',
          copied
            ? 'bg-green-500 text-white'
            : 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-[1.02]'
        ]"
      >
        <Icon :name="copied ? 'ph:check-circle-fill' : 'ph:copy-fill'" class="text-sm sm:text-base" />
        {{ copied ? 'Copied!' : 'Copy Code' }}
      </button>

      <button
        @click="resetTheme"
        class="w-full px-2.5 sm:px-3 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold border-2 border-cyan-500/30 text-cyan-100 hover:border-cyan-400 hover:bg-slate-800/50 transition-all duration-200 flex items-center justify-center gap-1.5 shadow-sm"
      >
        <Icon name="ph:arrow-counter-clockwise-bold" class="text-sm sm:text-base" />
        Reset Theme
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const { theme, fonts, updateColor, updateFont, resetTheme, copyCode, copied } = useTheme()

const handleColorInput = (key: 'primary' | 'accent' | 'bg' | 'text', event: Event) => {
  const target = event.target as HTMLInputElement
  updateColor(key, target.value)
}

const handleFontChange = (event: Event) => {
  const target = event.target as HTMLSelectElement
  updateFont(target.value)
}
</script>
