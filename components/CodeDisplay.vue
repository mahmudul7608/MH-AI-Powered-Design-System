<template>
  <div
    class="glass-effect rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:sticky lg:top-3 shadow-xl"
  >
    <div
      class="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2 gap-1.5"
    >
      <div class="flex items-center gap-1.5">
        <Icon name="ph:code-bold" class="text-purple-600 text-base sm:text-lg drop-shadow" />
        <h2 class="text-sm sm:text-base font-bold text-gray-900">
          Generated Code
        </h2>
      </div>
      <div
        class="text-[10px] text-gray-700 font-semibold px-2 py-0.5 bg-gray-100 rounded-full"
      >
        HTML + CSS
      </div>
    </div>

    <div class="relative">
      <pre
        class="bg-gray-900 text-gray-100 p-2 sm:p-3 rounded-lg text-[9px] sm:text-[10px] overflow-x-auto max-h-[220px] sm:max-h-[280px] overflow-y-auto font-mono leading-relaxed"
      ><code>{{ generatedCode }}</code></pre>

      <button
        @click="copyCode"
        :class="[
          'absolute top-1.5 right-1.5 sm:top-2 sm:right-2 px-1.5 sm:px-2 py-1 rounded-md text-[9px] sm:text-[10px] font-semibold transition-all duration-200',
          copied
            ? 'bg-green-500 text-white'
            : 'bg-white/10 text-white hover:bg-white/20',
        ]">
      >
        <Icon
          :name="copied ? 'ph:check-bold' : 'ph:copy-bold'"
          class="inline mr-0.5 sm:mr-1"
        />
        <span class="hidden xs:inline">{{ copied ? "Copied" : "Copy" }}</span>
      </button>
    </div>

    <div
      class="mt-2 sm:mt-2.5 p-2 sm:p-2.5 bg-blue-50 border border-blue-200 rounded-lg"
    >
      <div class="flex gap-1.5">
        <Icon
          name="ph:info-fill"
          class="text-blue-600 text-sm flex-shrink-0 mt-0.5"
        />
        <div class="text-[9px] sm:text-[10px] text-blue-900">
          <p class="font-semibold mb-0.5">Ready to use!</p>
          <p class="text-blue-700">
            Copy and paste into any HTML file. Font link included.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { generateCode, copyCode, copied } = useTheme()

const generatedCode = computed(() => generateCode())
</script>
