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
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4">
        <!-- Theme Controls - Left Section -->
        <div class="order-1">
          <ThemeControls />
        </div>

        <!-- Preview Area - Center Section -->
        <div class="order-3 lg:order-2">
          <div
            class="glass-effect rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-5 min-h-[500px] shadow-xl"
          >
            <div
              class="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 gap-1.5"
            >
              <div class="flex items-center gap-1.5">
                <Icon
                  name="ph:eye-bold"
                  class="text-purple-600 text-base sm:text-lg drop-shadow"
                />
                <h2 class="text-base sm:text-lg font-bold text-gray-900">
                  Live Preview
                </h2>
              </div>
              <div class="text-[10px] sm:text-xs text-gray-700 font-semibold">
                Font: <span class="text-purple-600">{{ theme.font }}</span>
              </div>
            </div>

            <!-- Component Selector Tabs -->
            <div
              class="flex gap-1 sm:gap-1.5 mb-3 p-1 bg-gray-100/80 rounded-lg shadow-inner"
            >
              <button
                v-for="comp in components"
                :key="comp"
                @click="component = comp"
                :class="[
                  'flex-1 px-2 sm:px-3 py-1.5 sm:py-2 rounded-md font-semibold text-[10px] sm:text-xs transition-all duration-200',
                  component === comp
                    ? 'bg-white text-purple-600 shadow-lg'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-white/50',
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
                <span class="hidden xs:inline">{{
                  comp.charAt(0).toUpperCase() + comp.slice(1)
                }}</span>
                <span class="xs:hidden">{{
                  comp.charAt(0).toUpperCase()
                }}</span>
              </button>
            </div>

            <!-- Preview Container -->
            <div
              class="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5 min-h-[350px] flex items-center justify-center overflow-x-auto shadow-2xl border-2 border-white/60"
              style="background-image: radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.08) 0%, transparent 50%);"
            >
              <PreviewCard v-if="component === 'card'" />
              <PreviewButton v-if="component === 'button'" />
              <PreviewNav v-if="component === 'nav'" />
            </div>
          </div>
        </div>

        <!-- Code Display - Right Section -->
        <div class="order-2 lg:order-3">
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
const { theme, component, loadTheme, loadGoogleFont } = useTheme()

const components = ['card', 'button', 'nav'] as const

// Load theme from localStorage on mount
onMounted(() => {
  loadTheme()
  loadGoogleFont()
})

// Watch for font changes and load new font
watch(
  () => theme.value.font,
  () => {
    loadGoogleFont()
  }
)
</script>
