<template>
  <div
    class="bg-gradient-to-br from-slate-800/90 via-blue-900/80 to-slate-800/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-5 min-h-[500px] shadow-2xl border border-cyan-500/30 flex flex-col"
  >
    <div
      class="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 gap-1.5"
    >
      <div class="flex items-center gap-1.5">
        <Icon name="ph:code-bold" class="text-cyan-400 text-base sm:text-lg drop-shadow" />
        <h2 class="text-sm sm:text-base font-bold text-white">
          Generated Code
        </h2>
      </div>
      <div
        class="text-[10px] text-cyan-100 font-semibold px-2 py-0.5 bg-cyan-500/20 rounded-full border border-cyan-500/30"
      >
        HTML + CSS
      </div>
    </div>

    <div class="relative flex-1 flex flex-col">
      <pre
        class="bg-slate-900/60 text-cyan-100 p-2 sm:p-3 rounded-lg text-[9px] sm:text-[10px] flex-1 overflow-y-auto font-mono leading-relaxed border border-cyan-500/20 whitespace-pre-wrap break-words"
      ><code>{{ generatedCode }}</code></pre>

      <button
        @click="copyCode"
        :class="[
          'absolute top-1.5 right-1.5 sm:top-2 sm:right-2 px-1.5 sm:px-2 py-1 rounded-md text-[9px] sm:text-[10px] font-semibold transition-all duration-200',
          copied
            ? 'bg-green-500 text-white'
            : 'bg-cyan-500/20 text-cyan-100 hover:bg-cyan-500/30 border border-cyan-500/30',
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
      class="mt-2 sm:mt-2.5 p-2 sm:p-2.5 bg-cyan-500/10 border border-cyan-500/30 rounded-lg"
    >
      <div class="flex gap-1.5">
        <Icon
          name="ph:info-fill"
          class="text-cyan-400 text-sm flex-shrink-0 mt-0.5"
        />
        <div class="text-[9px] sm:text-[10px] text-cyan-100">
          <p class="font-semibold mb-0.5">Ready to use!</p>
          <p class="text-cyan-200">
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
