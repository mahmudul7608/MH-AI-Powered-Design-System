export interface Theme {
  primary: string
  neutral: string
  accent: string
  text: string
  bg: string
  font: string
}

export interface Font {
  name: string
  google: string
}

export const fonts: Font[] = [
  { name: 'Inter', google: 'Inter' },
  { name: 'Poppins', google: 'Poppins' },
  { name: 'Roboto', google: 'Roboto' },
  { name: 'Montserrat', google: 'Montserrat' },
  { name: 'Nunito', google: 'Nunito' },
  { name: 'Playfair Display', google: 'Playfair+Display' },
  { name: 'Raleway', google: 'Raleway' },
  { name: 'Open Sans', google: 'Open+Sans' },
]

export const defaultTheme: Theme = {
  primary: '#0ea5e9', // sky-500
  neutral: '#111827', // gray-900
  accent: '#f97316', // orange-500
  text: '#0f172a',
  bg: '#ffffff',
  font: 'Inter',
}

export const useTheme = () => {
  const theme = useState<Theme>('theme', () => ({ ...defaultTheme }))
  const component = useState<'card' | 'button' | 'nav'>('component', () => 'card')
  const copied = useState<boolean>('copied', () => false)

  // Load theme from localStorage on client side
  const loadTheme = () => {
    if (process.client) {
      try {
        const raw = localStorage.getItem('previewer:theme')
        if (raw) {
          const parsed = JSON.parse(raw)
          theme.value = { ...defaultTheme, ...parsed }
        }
      } catch (e) {
        console.error('Failed to load theme:', e)
      }
    }
  }

  // Save theme to localStorage
  const saveTheme = () => {
    if (process.client) {
      try {
        localStorage.setItem('previewer:theme', JSON.stringify(theme.value))
      } catch (e) {
        console.error('Failed to save theme:', e)
      }
    }
  }

  // Update a specific color in the theme
  const updateColor = (key: keyof Theme, value: string) => {
    theme.value = { ...theme.value, [key]: value }
    saveTheme()
  }

  // Reset theme to default
  const resetTheme = () => {
    theme.value = { ...defaultTheme }
    saveTheme()
  }

  // Update font
  const updateFont = (fontName: string) => {
    theme.value = { ...theme.value, font: fontName }
    saveTheme()
  }

  // Load Google Font dynamically
  const loadGoogleFont = () => {
    if (process.client) {
      const id = 'previewer-google-font'
      const existing = document.getElementById(id)
      const fontData = fonts.find((f) => f.name === theme.value.font)
      const googleName = fontData?.google || 'Inter'
      const href = `https://fonts.googleapis.com/css2?family=${googleName}:wght@300;400;600;700&display=swap`

      if (existing) {
        existing.setAttribute('href', href)
      } else {
        const link = document.createElement('link')
        link.id = id
        link.rel = 'stylesheet'
        link.href = href
        document.head.appendChild(link)
      }
    }
  }

  // Generate code for the selected component
  const generateCode = (): string => {
    const fontFamily = theme.value.font
    const fontData = fonts.find((f) => f.name === fontFamily)
    const googleName = fontData?.google || 'Inter'
    const commonStyle = `style="font-family: '${fontFamily}', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; color: ${theme.value.text}; background: ${theme.value.bg};"`

    if (component.value === 'card') {
      return `<!-- Card Component (Generated) -->
<link href="https://fonts.googleapis.com/css2?family=${googleName}:wght@300;400;600;700&display=swap" rel="stylesheet">
<div ${commonStyle} class="p-6 rounded-2xl shadow-lg max-w-xl">
  <div style="background:${theme.value.primary};border-radius:12px;padding:12px 16px;color:#fff;display:inline-block;font-weight:700;font-size:14px;">Featured</div>
  <h3 style="margin-top:16px;margin-bottom:8px;font-size:24px;font-weight:700;">Awesome Product</h3>
  <p style="margin-bottom:16px;opacity:0.85;line-height:1.6;">A short description showing how the theme maps to an actual UI component. Perfect for showcasing your design system.</p>
  <button style="background:${theme.value.accent};color:#fff;padding:12px 24px;border-radius:10px;border:0;font-weight:600;cursor:pointer;">Buy Now</button>
</div>`
    }

    if (component.value === 'button') {
      return `<!-- Button Component (Generated) -->
<link href="https://fonts.googleapis.com/css2?family=${googleName}:wght@300;400;600;700&display=swap" rel="stylesheet">
<div style="display:flex;gap:12px;align-items:center;font-family:'${fontFamily}';">
  <button style="background:${theme.value.primary};color:#fff;padding:12px 24px;border-radius:12px;border:0;font-weight:600;cursor:pointer;transition:all 0.2s;">Primary Action</button>
  <button style="background:${theme.value.accent};color:#fff;padding:12px 24px;border-radius:12px;border:0;font-weight:600;cursor:pointer;transition:all 0.2s;">Secondary</button>
  <button style="background:transparent;color:${theme.value.text};padding:12px 24px;border-radius:12px;border:2px solid ${theme.value.primary};font-weight:600;cursor:pointer;transition:all 0.2s;">Outline</button>
</div>`
    }

    // nav
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
</nav>`
  }

  // Copy code to clipboard
  const copyCode = async () => {
    const code = generateCode()
    try {
      await navigator.clipboard.writeText(code)
      copied.value = true
      setTimeout(() => {
        copied.value = false
      }, 2000)
    } catch (e) {
      console.error('Failed to copy:', e)
    }
  }

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
    copyCode,
  }
}
