const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      green: {
        DEFAULT: '#20BD56',
        500: '#E5F7EB',
        700: '#20A74E'
      },
      white: '#fff',
      grey: {
        bg: "#F6F6F6",
        light: '#E9E9E9',
        DEFAULT: '#455067',

      },
      blue: '#4A90E2',
      red: {
        DEFAULT: '#EE1944',
        light: '#FC5D5D'
      },
      yellow: "#FFD600"
    },
    fontFamily: {
      main: ['Gilroy', ...defaultTheme.fontFamily.sans]
    },
    boxShadow: {

    },
    screens: {
      lg: { max: '1440px' },
      md: { max: '990px' },
      sm: { max: '760px' },
      xs: { max: '550px' },
      xxs: { max: '350px' },
    },
    extend: {
      padding: {
        page: '30px'
      },
      borderRadius: {
        12: '12px',
        5: '5px'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
