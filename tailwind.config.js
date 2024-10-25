import colors from 'tailwindcss/colors'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        base: {
          light: colors.white,
          dark: colors.black,
        },
        accent: {
          light: colors.teal[600],
          dark: colors.teal[400],
        },
        background: {
          light: colors.slate[50],
          DEFAULT: colors.slate[500],
          dark: colors.slate[800],
        },
      },
    },
  },
  // darkMode: 'selector',
  plugins: [],
}
