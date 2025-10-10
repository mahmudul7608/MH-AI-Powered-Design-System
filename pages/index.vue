<template>
  <div class="min-h-screen relative overflow-hidden">
    <div
      class="relative z-10 container mx-auto px-3 sm:px-4 lg:px-6 py-3 sm:py-4 max-w-[1200px]"
    >
      <!-- Header -->
      <header class="text-center mb-4 sm:mb-5 pt-2 sm:pt-3">
        <div
          class="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-white/95 backdrop-blur-md mb-2 shadow-xl border border-gray-200"
        >
          <Icon
            name="ph:sparkle-fill"
            class="text-purple-600 text-sm sm:text-base"
          />
          <span class="text-[10px] sm:text-xs font-semibold text-gray-900"
            >AI-Powered Design System</span
          >
        </div>
        <h1
          class="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 px-2 drop-shadow-lg"
        >
          Design System
          <span
            class="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse"
          >
            Previewer
          </span>
        </h1>
        <p
          class="text-xs sm:text-sm text-gray-200 max-w-xl mx-auto px-4 font-medium drop-shadow-md"
        >
          Create beautiful UI themes in real-time with live component previews.
        </p>
      </header>

      <!-- Main Content Grid -->
      <div
        class="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 lg:items-stretch"
      >
        <!-- Theme Controls - Left Section -->
        <div class="order-1 h-full">
          <ThemeControls />
        </div>

        <!-- Preview Area - Center Section -->
        <div class="order-3 lg:order-2 h-full flex flex-col">
          <div
            class="bg-gradient-to-br from-slate-800/90 via-blue-900/80 to-slate-800/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-5 shadow-2xl border border-cyan-500/30 h-full flex flex-col"
          >
            <div
              class="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 gap-1.5"
            >
              <div class="flex items-center gap-1.5">
                <Icon
                  name="ph:eye-bold"
                  class="text-cyan-400 text-base sm:text-lg drop-shadow"
                />
                <h2 class="text-base sm:text-lg font-bold text-white">
                  Live Preview
                </h2>
              </div>
              <div class="text-[10px] sm:text-xs text-cyan-100 font-semibold">
                Font: <span class="text-cyan-400">{{ theme.font }}</span>
              </div>
            </div>

            <!-- Component Selector Tabs -->
            <div
              class="flex gap-1 sm:gap-1.5 mb-3 p-1 bg-slate-900/50 rounded-lg shadow-inner border border-cyan-500/20"
            >
              <button
                v-for="comp in components"
                :key="comp"
                @click="component = comp"
                :class="[
                  'flex-1 px-2 sm:px-3 py-1.5 sm:py-2 rounded-md font-semibold text-[10px] sm:text-xs transition-all duration-200',
                  component === comp
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-md'
                    : 'text-cyan-100 hover:bg-slate-700/50 hover:text-white',
                ]"
              >
                <Icon
                  :name="
                    comp === 'card'
                      ? 'ph:cards-fill'
                      : comp === 'button'
                      ? 'ph:cursor-click-fill'
                      : 'ph:navigation-arrow-fill'
                  "
                  class="inline mr-0.5 sm:mr-1 text-xs sm:text-sm"
                />
                <span>{{ comp.charAt(0).toUpperCase() + comp.slice(1) }}</span>
              </button>
            </div>

            <!-- Preview Container -->
            <div
              class="bg-slate-900/50 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5 flex-grow flex items-center justify-center overflow-x-auto shadow-inner border border-cyan-500/20"
            >
              <PreviewCard v-if="component === 'card'" />
              <PreviewButton v-if="component === 'button'" />
              <PreviewNav v-if="component === 'nav'" />
            </div>
          </div>
        </div>

        <!-- Code Display - Right Section -->
        <div class="order-2 lg:order-3 h-full">
          <CodeDisplay />
        </div>
      </div>

      <!-- Footer Info -->
      <div class="mt-3 sm:mt-4 text-center">
        <div
          class="glass-effect rounded-lg sm:rounded-xl p-2.5 sm:p-3 shadow-lg"
        >
          <div class="flex items-start gap-1.5 sm:gap-2 text-left">
            <Icon
              name="ph:lightbulb-fill"
              class="text-yellow-500 text-base sm:text-lg flex-shrink-0 mt-0.5 drop-shadow"
            />
            <div>
              <h3 class="font-semibold text-gray-900 mb-0.5 text-xs sm:text-sm">
                Pro Tip
              </h3>
              <p class="text-[10px] sm:text-xs text-gray-700 font-medium">
                Copy the generated code and paste it anywhere! Inline styles
                included for maximum portability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { theme, component, loadTheme, loadGoogleFont } = useTheme();

const components = ["card", "button", "nav"] as const;

// Load theme from localStorage on mount
onMounted(() => {
  loadTheme();
  loadGoogleFont();
});

// Watch for font changes and load new font
watch(
  () => theme.value.font,
  () => {
    loadGoogleFont();
  }
);
</script>
