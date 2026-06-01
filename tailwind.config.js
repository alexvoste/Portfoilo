export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        hokusai: {
          bg: '#F5F0E5',
          content: '#D6DDE2',
          text: '#344955',
          heading: '#AFC8DC',
          accent: '#CB624F'
        }
      },
      fontFamily: {
        display: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace']
      }
    }
  },
  plugins: []
}
