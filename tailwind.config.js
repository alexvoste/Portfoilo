export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        industrial: {
          bg: '#07080a',
          surface: '#121316',
          surface2: '#0d0e10',
          border: '#1f2128',
          text: '#8f94a0',
          hi: '#dcdfe5',
          green: '#5fa06d',
          blue: '#48698a',
          red: '#b04343'
        }
      },
      fontFamily: {
        display: ['JetBrains Mono', 'Fira Code', 'system-ui', 'monospace'],
        mono: ['JetBrains Mono', 'Fira Code', 'SF Mono', 'ui-monospace', 'system-ui', 'monospace']
      }
    }
  },
  plugins: []
}


