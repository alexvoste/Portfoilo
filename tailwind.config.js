export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        industrial: {
          bg: '#0f0f0f',
          surface: '#1e1f1e',
          surface2: '#252625',
          border: '#3a3b3a',
          border2: '#2a2b2a',
          text: '#e0e0e0',
          textDim: '#a0a0a0',
          textFaint: '#707070',
          accent: '#4a6a8a',
          accentHover: '#8a9aaa',
          terminalBg: '#0a0a0a',
          terminalPrompt: '#5a8a5a',
          terminalPromptHover: '#7a8a7a'
        }
      },
      fontFamily: {
        display: ['IBM Plex Sans', 'Inter', 'sans-serif'],
        mono: ['IBM Plex Mono', 'JetBrains Mono', 'Fira Code', 'monospace']
      }
    }
  },
  plugins: []
}

