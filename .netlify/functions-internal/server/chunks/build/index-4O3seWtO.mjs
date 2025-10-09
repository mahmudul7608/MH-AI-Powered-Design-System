import __nuxt_component_0 from './index-BX5YhHi5.mjs';
import { defineComponent, watch, mergeProps, unref, computed, toRef, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrRenderAttr } from 'vue/server-renderer';
import { a as useNuxtApp } from './server.mjs';
import '@iconify/vue';
import '@iconify/utils/lib/css/icon';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import '@iconify/utils';
import 'node:crypto';
import 'consola';
import 'node:fs';
import 'node:path';
import 'vue-router';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const useStateKeyPrefix = "$s";
function useState(...args) {
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  const [_key, init] = args;
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useState] key must be a string: " + _key);
  }
  if (init !== void 0 && typeof init !== "function") {
    throw new Error("[nuxt] [useState] init must be a function: " + init);
  }
  const key = useStateKeyPrefix + _key;
  const nuxtApp = useNuxtApp();
  const state = toRef(nuxtApp.payload.state, key);
  if (state.value === void 0 && init) {
    const initialValue = init();
    if (isRef(initialValue)) {
      nuxtApp.payload.state[key] = initialValue;
      return initialValue;
    }
    state.value = initialValue;
  }
  return state;
}
const fonts = [
  { name: "Inter", google: "Inter" },
  { name: "Poppins", google: "Poppins" },
  { name: "Roboto", google: "Roboto" },
  { name: "Montserrat", google: "Montserrat" },
  { name: "Nunito", google: "Nunito" },
  { name: "Playfair Display", google: "Playfair+Display" },
  { name: "Raleway", google: "Raleway" },
  { name: "Open Sans", google: "Open+Sans" }
];
const defaultTheme = {
  primary: "#0ea5e9",
  // sky-500
  neutral: "#111827",
  // gray-900
  accent: "#f97316",
  // orange-500
  text: "#0f172a",
  bg: "#ffffff",
  font: "Inter"
};
const useTheme = () => {
  const theme = useState("theme", () => ({ ...defaultTheme }));
  const component = useState("component", () => "card");
  const copied = useState("copied", () => false);
  const loadTheme = () => {
  };
  const saveTheme = () => {
  };
  const updateColor = (key, value) => {
    theme.value = { ...theme.value, [key]: value };
  };
  const resetTheme = () => {
    theme.value = { ...defaultTheme };
  };
  const updateFont = (fontName) => {
    theme.value = { ...theme.value, font: fontName };
  };
  const loadGoogleFont = () => {
  };
  const generateCode = () => {
    const fontFamily = theme.value.font;
    const fontData = fonts.find((f) => f.name === fontFamily);
    const googleName = (fontData == null ? void 0 : fontData.google) || "Inter";
    const commonStyle = `style="font-family: '${fontFamily}', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; color: ${theme.value.text}; background: ${theme.value.bg};"`;
    if (component.value === "card") {
      return `<!-- Card Component (Generated) -->
<link href="https://fonts.googleapis.com/css2?family=${googleName}:wght@300;400;600;700&display=swap" rel="stylesheet">
<div ${commonStyle} class="p-6 rounded-2xl shadow-lg max-w-xl">
  <div style="background:${theme.value.primary};border-radius:12px;padding:12px 16px;color:#fff;display:inline-block;font-weight:700;font-size:14px;">Featured</div>
  <h3 style="margin-top:16px;margin-bottom:8px;font-size:24px;font-weight:700;">Awesome Product</h3>
  <p style="margin-bottom:16px;opacity:0.85;line-height:1.6;">A short description showing how the theme maps to an actual UI component. Perfect for showcasing your design system.</p>
  <button style="background:${theme.value.accent};color:#fff;padding:12px 24px;border-radius:10px;border:0;font-weight:600;cursor:pointer;">Buy Now</button>
</div>`;
    }
    if (component.value === "button") {
      return `<!-- Button Component (Generated) -->
<link href="https://fonts.googleapis.com/css2?family=${googleName}:wght@300;400;600;700&display=swap" rel="stylesheet">
<div style="display:flex;gap:12px;align-items:center;font-family:'${fontFamily}';">
  <button style="background:${theme.value.primary};color:#fff;padding:12px 24px;border-radius:12px;border:0;font-weight:600;cursor:pointer;transition:all 0.2s;">Primary Action</button>
  <button style="background:${theme.value.accent};color:#fff;padding:12px 24px;border-radius:12px;border:0;font-weight:600;cursor:pointer;transition:all 0.2s;">Secondary</button>
  <button style="background:transparent;color:${theme.value.text};padding:12px 24px;border-radius:12px;border:2px solid ${theme.value.primary};font-weight:600;cursor:pointer;transition:all 0.2s;">Outline</button>
</div>`;
    }
    return `<!-- Navigation Component (Generated) -->
<link href="https://fonts.googleapis.com/css2?family=${googleName}:wght@300;400;600;700&display=swap" rel="stylesheet">
<nav ${commonStyle} style="display:flex;gap:24px;align-items:center;padding:16px 24px;border-radius:12px;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
  <div style="font-weight:700;font-size:20px;color:${theme.value.primary};">Brand</div>
  <div style="margin-left:24px;display:flex;gap:20px;align-items:center;">
    <a href="#" style="color:${theme.value.text};text-decoration:none;font-weight:500;transition:color 0.2s;">Home</a>
    <a href="#" style="color:${theme.value.text};text-decoration:none;font-weight:500;transition:color 0.2s;">Features</a>
    <a href="#" style="color:${theme.value.text};text-decoration:none;font-weight:500;transition:color 0.2s;">Pricing</a>
    <a href="#" style="color:${theme.value.text};text-decoration:none;font-weight:500;transition:color 0.2s;">Docs</a>
  </div>
  <div style="margin-left:auto;">
    <button style="background:${theme.value.accent};color:#fff;padding:10px 20px;border-radius:8px;border:0;font-weight:600;cursor:pointer;">Get Started</button>
  </div>
</nav>`;
  };
  const copyCode = async () => {
    const code = generateCode();
    try {
      await (void 0).clipboard.writeText(code);
      copied.value = true;
      setTimeout(() => {
        copied.value = false;
      }, 2e3);
    } catch (e) {
      console.error("Failed to copy:", e);
    }
  };
  return {
    theme,
    component,
    copied,
    fonts,
    loadTheme,
    saveTheme,
    updateColor,
    resetTheme,
    updateFont,
    loadGoogleFont,
    generateCode,
    copyCode
  };
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ThemeControls",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme, fonts: fonts2, copied } = useTheme();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "glass-effect rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:sticky lg:top-3 shadow-xl" }, _attrs))}><div class="flex items-center gap-1.5 mb-3">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:palette-fill",
        class: "text-purple-600 text-base sm:text-lg drop-shadow"
      }, null, _parent));
      _push(`<h2 class="text-sm sm:text-base font-bold text-gray-900">Theme Controls</h2></div><div class="space-y-2 sm:space-y-2.5"><div><label class="block text-[10px] sm:text-xs font-semibold text-gray-800 mb-1">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:circle-fill",
        class: "inline text-blue-500"
      }, null, _parent));
      _push(` Primary Color </label><div class="flex gap-2"><input type="color"${ssrRenderAttr("value", unref(theme).primary)} class="w-full h-10 sm:h-11 rounded-lg cursor-pointer border-2 border-gray-200 hover:border-purple-400 transition-colors"><input type="text"${ssrRenderAttr("value", unref(theme).primary)} class="w-16 sm:w-20 px-1.5 sm:px-2 py-1.5 rounded-md border-2 border-gray-200 text-[10px] sm:text-xs font-mono focus:border-purple-400 focus:outline-none"></div></div><div><label class="block text-[10px] sm:text-xs font-semibold text-gray-800 mb-1">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:circle-fill",
        class: "inline text-orange-500"
      }, null, _parent));
      _push(` Accent Color </label><div class="flex gap-2"><input type="color"${ssrRenderAttr("value", unref(theme).accent)} class="w-full h-10 sm:h-11 rounded-lg cursor-pointer border-2 border-gray-200 hover:border-purple-400 transition-colors"><input type="text"${ssrRenderAttr("value", unref(theme).accent)} class="w-16 sm:w-20 px-1.5 sm:px-2 py-1.5 rounded-md border-2 border-gray-200 text-[10px] sm:text-xs font-mono focus:border-purple-400 focus:outline-none"></div></div><div><label class="block text-[10px] sm:text-xs font-semibold text-gray-800 mb-1">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:circle-fill",
        class: "inline text-gray-100 stroke-gray-400"
      }, null, _parent));
      _push(` Background </label><div class="flex gap-2"><input type="color"${ssrRenderAttr("value", unref(theme).bg)} class="w-full h-10 sm:h-11 rounded-lg cursor-pointer border-2 border-gray-200 hover:border-purple-400 transition-colors"><input type="text"${ssrRenderAttr("value", unref(theme).bg)} class="w-16 sm:w-20 px-1.5 sm:px-2 py-1.5 rounded-md border-2 border-gray-200 text-[10px] sm:text-xs font-mono focus:border-purple-400 focus:outline-none"></div></div><div><label class="block text-[10px] sm:text-xs font-semibold text-gray-800 mb-1">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:text-aa-fill",
        class: "inline text-gray-900"
      }, null, _parent));
      _push(` Text Color </label><div class="flex gap-2"><input type="color"${ssrRenderAttr("value", unref(theme).text)} class="w-full h-10 sm:h-11 rounded-lg cursor-pointer border-2 border-gray-200 hover:border-purple-400 transition-colors"><input type="text"${ssrRenderAttr("value", unref(theme).text)} class="w-16 sm:w-20 px-1.5 sm:px-2 py-1.5 rounded-md border-2 border-gray-200 text-[10px] sm:text-xs font-mono focus:border-purple-400 focus:outline-none"></div></div></div><div class="mt-2.5 sm:mt-3"><label class="block text-[10px] sm:text-xs font-semibold text-gray-800 mb-1">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:text-t-fill",
        class: "inline"
      }, null, _parent));
      _push(` Font Family </label><select${ssrRenderAttr("value", unref(theme).font)} class="w-full px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg border-2 border-gray-200 focus:border-purple-400 focus:outline-none text-xs sm:text-sm font-medium cursor-pointer hover:border-gray-300 transition-colors"><!--[-->`);
      ssrRenderList(unref(fonts2), (font) => {
        _push(`<option${ssrRenderAttr("value", font.name)}>${ssrInterpolate(font.name)}</option>`);
      });
      _push(`<!--]--></select></div><div class="mt-2.5 sm:mt-3 pt-2.5 sm:pt-3 border-t border-gray-200 space-y-1.5 sm:space-y-2"><button class="${ssrRenderClass([
        "w-full px-2.5 sm:px-3 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-1.5",
        unref(copied) ? "bg-green-500 text-white" : "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:scale-[1.02]"
      ])}">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: unref(copied) ? "ph:check-circle-fill" : "ph:copy-fill",
        class: "text-sm sm:text-base"
      }, null, _parent));
      _push(` ${ssrInterpolate(unref(copied) ? "Copied!" : "Copy Code")}</button><button class="w-full px-2.5 sm:px-3 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-semibold border-2 border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 flex items-center justify-center gap-1.5">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:arrow-counter-clockwise-bold",
        class: "text-sm sm:text-base"
      }, null, _parent));
      _push(` Reset Theme </button></div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ThemeControls.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "PreviewCard",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme } = useTheme();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "w-full max-w-[240px] sm:max-w-[280px] p-3 sm:p-4 lg:p-5 rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl transition-all duration-300 hover:scale-[1.02]",
        style: {
          background: unref(theme).bg,
          color: unref(theme).text,
          fontFamily: unref(theme).font
        }
      }, _attrs))}><div class="inline-block px-2 py-1 sm:px-3 sm:py-1.5 rounded-md sm:rounded-lg font-bold text-[10px] sm:text-xs mb-2 sm:mb-3" style="${ssrRenderStyle({ background: unref(theme).primary, color: "#fff" })}"> Featured </div><h3 class="text-sm sm:text-base lg:text-lg font-bold mb-1.5 sm:mb-2">Awesome Product</h3><p class="text-[10px] sm:text-xs opacity-90 mb-3 sm:mb-4 leading-relaxed"> A short description showing how the theme maps to an actual UI component. </p><div class="flex flex-col xs:flex-row gap-1.5 sm:gap-2"><button class="px-3 py-1.5 sm:px-4 sm:py-2 rounded-md sm:rounded-lg text-[10px] sm:text-xs font-semibold transition-transform hover:scale-105" style="${ssrRenderStyle({ background: unref(theme).accent, color: "#fff" })}"> Buy Now </button><button class="px-3 py-1.5 sm:px-4 sm:py-2 rounded-md sm:rounded-lg text-[10px] sm:text-xs font-semibold border-2 transition-transform hover:scale-105" style="${ssrRenderStyle({
        borderColor: unref(theme).primary,
        color: unref(theme).primary,
        background: "transparent"
      })}"> Learn More </button></div></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PreviewCard.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "PreviewButton",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme } = useTheme();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "flex flex-col gap-1.5 sm:gap-2 w-full max-w-[200px] sm:max-w-xs",
        style: { fontFamily: unref(theme).font }
      }, _attrs))}><button class="px-4 py-2 sm:px-5 sm:py-2.5 rounded-md sm:rounded-lg text-[10px] sm:text-xs font-semibold shadow-md transition-transform hover:scale-105" style="${ssrRenderStyle({ background: unref(theme).primary, color: "#fff" })}"> Primary Action </button><button class="px-4 py-2 sm:px-5 sm:py-2.5 rounded-md sm:rounded-lg text-[10px] sm:text-xs font-semibold shadow-md transition-transform hover:scale-105" style="${ssrRenderStyle({ background: unref(theme).accent, color: "#fff" })}"> Secondary Action </button><button class="px-4 py-2 sm:px-5 sm:py-2.5 rounded-md sm:rounded-lg text-[10px] sm:text-xs font-semibold border-2 transition-transform hover:scale-105" style="${ssrRenderStyle({
        borderColor: unref(theme).primary,
        color: unref(theme).primary,
        background: "transparent"
      })}"> Outline Button </button><button class="px-4 py-2 sm:px-5 sm:py-2.5 rounded-md sm:rounded-lg text-[10px] sm:text-xs font-semibold transition-all hover:bg-gray-100" style="${ssrRenderStyle({
        color: unref(theme).text,
        background: "transparent"
      })}"> Ghost Button </button></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PreviewButton.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "PreviewNav",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme } = useTheme();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: "w-full flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-md overflow-x-auto",
        style: {
          fontFamily: unref(theme).font,
          background: unref(theme).bg,
          color: unref(theme).text
        }
      }, _attrs))}><div class="font-bold text-sm sm:text-base lg:text-lg whitespace-nowrap" style="${ssrRenderStyle({ color: unref(theme).primary })}"> Brand </div><div class="hidden sm:flex gap-2 sm:gap-3 ml-2 sm:ml-3"><a href="#" class="font-medium text-[10px] sm:text-xs hover:opacity-70 transition-opacity whitespace-nowrap">Home</a><a href="#" class="font-medium text-[10px] sm:text-xs hover:opacity-70 transition-opacity whitespace-nowrap">Features</a><a href="#" class="font-medium text-[10px] sm:text-xs hover:opacity-70 transition-opacity whitespace-nowrap hidden md:inline">Pricing</a></div><div class="ml-auto flex items-center gap-1.5 sm:gap-2"><button class="hidden sm:inline-block px-2 sm:px-3 py-1 sm:py-1.5 rounded-md text-[10px] sm:text-xs font-medium hover:opacity-80 transition-opacity whitespace-nowrap" style="${ssrRenderStyle({ color: unref(theme).text })}"> Sign In </button><button class="px-2 sm:px-3 py-1 sm:py-1.5 rounded-md text-[10px] sm:text-xs font-semibold transition-transform hover:scale-105 whitespace-nowrap" style="${ssrRenderStyle({ background: unref(theme).accent, color: "#fff" })}"> Get Started </button></div></nav>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PreviewNav.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CodeDisplay",
  __ssrInlineRender: true,
  setup(__props) {
    const { generateCode, copied } = useTheme();
    const generatedCode = computed(() => generateCode());
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "glass-effect rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:sticky lg:top-3 shadow-xl" }, _attrs))}><div class="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2 gap-1.5"><div class="flex items-center gap-1.5">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:code-bold",
        class: "text-purple-600 text-base sm:text-lg drop-shadow"
      }, null, _parent));
      _push(`<h2 class="text-sm sm:text-base font-bold text-gray-900"> Generated Code </h2></div><div class="text-[10px] text-gray-700 font-semibold px-2 py-0.5 bg-gray-100 rounded-full"> HTML + CSS </div></div><div class="relative"><pre class="bg-gray-900 text-gray-100 p-2 sm:p-3 rounded-lg text-[9px] sm:text-[10px] overflow-x-auto max-h-[220px] sm:max-h-[280px] overflow-y-auto font-mono leading-relaxed"><code>${ssrInterpolate(unref(generatedCode))}</code></pre><button class="${ssrRenderClass([
        "absolute top-1.5 right-1.5 sm:top-2 sm:right-2 px-1.5 sm:px-2 py-1 rounded-md text-[9px] sm:text-[10px] font-semibold transition-all duration-200",
        unref(copied) ? "bg-green-500 text-white" : "bg-white/10 text-white hover:bg-white/20"
      ])}"> &gt; `);
      _push(ssrRenderComponent(_component_Icon, {
        name: unref(copied) ? "ph:check-bold" : "ph:copy-bold",
        class: "inline mr-0.5 sm:mr-1"
      }, null, _parent));
      _push(`<span class="hidden xs:inline">${ssrInterpolate(unref(copied) ? "Copied" : "Copy")}</span></button></div><div class="mt-2 sm:mt-2.5 p-2 sm:p-2.5 bg-blue-50 border border-blue-200 rounded-lg"><div class="flex gap-1.5">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:info-fill",
        class: "text-blue-600 text-sm flex-shrink-0 mt-0.5"
      }, null, _parent));
      _push(`<div class="text-[9px] sm:text-[10px] text-blue-900"><p class="font-semibold mb-0.5">Ready to use!</p><p class="text-blue-700"> Copy and paste into any HTML file. Font link included. </p></div></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CodeDisplay.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme, component } = useTheme();
    const components = ["card", "button", "nav"];
    watch(
      () => theme.value.font,
      () => {
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0;
      const _component_ThemeControls = _sfc_main$5;
      const _component_PreviewCard = _sfc_main$4;
      const _component_PreviewButton = _sfc_main$3;
      const _component_PreviewNav = _sfc_main$2;
      const _component_CodeDisplay = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen relative overflow-hidden" }, _attrs))}><div class="relative z-10 container mx-auto px-3 sm:px-4 lg:px-6 py-3 sm:py-4 max-w-[1200px]"><header class="text-center mb-4 sm:mb-5 pt-2 sm:pt-3"><div class="inline-flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-white/95 backdrop-blur-md mb-2 shadow-xl border border-gray-200">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:sparkle-fill",
        class: "text-purple-600 text-sm sm:text-base"
      }, null, _parent));
      _push(`<span class="text-[10px] sm:text-xs font-semibold text-gray-900">AI-Powered Design System</span></div><h1 class="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 px-2 drop-shadow-lg"> Design System <span class="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse"> Previewer </span></h1><p class="text-xs sm:text-sm text-gray-200 max-w-xl mx-auto px-4 font-medium drop-shadow-md"> Create beautiful UI themes in real-time with live component previews. </p></header><div class="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4"><div class="lg:col-span-3 order-1">`);
      _push(ssrRenderComponent(_component_ThemeControls, null, null, _parent));
      _push(`</div><div class="lg:col-span-5 order-3 lg:order-2"><div class="glass-effect rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-5 min-h-[320px] sm:min-h-[360px] shadow-xl"><div class="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 gap-1.5"><div class="flex items-center gap-1.5">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:eye-bold",
        class: "text-purple-600 text-base sm:text-lg drop-shadow"
      }, null, _parent));
      _push(`<h2 class="text-base sm:text-lg font-bold text-gray-900"> Live Preview </h2></div><div class="text-[10px] sm:text-xs text-gray-700 font-semibold"> Font: <span class="text-purple-600">${ssrInterpolate(unref(theme).font)}</span></div></div><div class="flex gap-1 sm:gap-1.5 mb-3 p-1 bg-gray-100/80 rounded-lg shadow-inner"><!--[-->`);
      ssrRenderList(components, (comp) => {
        _push(`<button class="${ssrRenderClass([
          "flex-1 px-2 sm:px-3 py-1.5 sm:py-2 rounded-md font-semibold text-[10px] sm:text-xs transition-all duration-200",
          unref(component) === comp ? "bg-white text-purple-600 shadow-lg" : "text-gray-700 hover:text-gray-900 hover:bg-white/50"
        ])}">`);
        _push(ssrRenderComponent(_component_Icon, {
          name: comp === "card" ? "ph:cards-fill" : comp === "button" ? "ph:cursor-click-fill" : "ph:navigation-arrow-fill",
          class: "inline mr-0.5 sm:mr-1 text-xs sm:text-sm"
        }, null, _parent));
        _push(`<span class="hidden xs:inline">${ssrInterpolate(comp.charAt(0).toUpperCase() + comp.slice(1))}</span><span class="xs:hidden">${ssrInterpolate(comp.charAt(0).toUpperCase())}</span></button>`);
      });
      _push(`<!--]--></div><div class="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-5 min-h-[240px] sm:min-h-[280px] flex items-center justify-center overflow-x-auto shadow-2xl border-2 border-white/60" style="${ssrRenderStyle({ "background-image": "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.08) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.08) 0%, transparent 50%)" })}">`);
      if (unref(component) === "card") {
        _push(ssrRenderComponent(_component_PreviewCard, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(component) === "button") {
        _push(ssrRenderComponent(_component_PreviewButton, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(component) === "nav") {
        _push(ssrRenderComponent(_component_PreviewNav, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="lg:col-span-4 order-2 lg:order-3">`);
      _push(ssrRenderComponent(_component_CodeDisplay, null, null, _parent));
      _push(`</div></div><div class="mt-3 sm:mt-4 text-center"><div class="glass-effect rounded-lg sm:rounded-xl p-2.5 sm:p-3 shadow-lg"><div class="flex items-start gap-1.5 sm:gap-2 text-left">`);
      _push(ssrRenderComponent(_component_Icon, {
        name: "ph:lightbulb-fill",
        class: "text-yellow-500 text-base sm:text-lg flex-shrink-0 mt-0.5 drop-shadow"
      }, null, _parent));
      _push(`<div><h3 class="font-semibold text-gray-900 mb-0.5 text-xs sm:text-sm"> Pro Tip </h3><p class="text-[10px] sm:text-xs text-gray-700 font-medium"> Copy the generated code and paste it anywhere! Inline styles included for maximum portability. </p></div></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-4O3seWtO.mjs.map
