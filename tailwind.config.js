/** Brand tokens sampled from the Play Store screenshots (logo teal #00A3A5, FAB #00BFA8, forest #06231F, mint #EDF8F5). Swap these hex values to match the Android app exactly. */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        pine: { DEFAULT: '#00A3A5', dark: '#0B4139', soft: '#D2F3EC' },
        forest: '#06231F',
        saffron: { DEFAULT: '#00BFA8', soft: '#D2F3EC' },
        lime: '#C6E84B',
        mist: '#EDF8F5',
        ink: '#10231F',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        sans: ['Figtree', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
