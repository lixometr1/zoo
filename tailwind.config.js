const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')
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
    screens: {
      xl: { max: '1450px' },
      lg: { max: '1350px' },
      md: { max: '990px' },
      sm: { max: '760px' },
      xs: { max: '550px' },
      xxs: { max: '350px' },
    },
    extend: {
      fontSize: {
        '2lg': '1.375rem',
        xxs: '0.625rem',
      },
      spacing: {
        18: '4.5rem',
        5.5: '1.375rem',
        4.5: '1.125rem',
      },
      padding: {
        page: '30px',
        'page-mob': '15px',
      },
      borderRadius: {
        12: '12px',
        5: '5px'
      },
      boxShadow: {
        arrow: '0px 4px 25px rgba(69, 80, 103, 0.2)',
        image: '10px 10px 24px rgba(82, 98, 114, 0.25)',
        inner: 'inset 1px 1px 4px rgba(0, 0, 0, 0.15)'
      },
      zIndex: {
        100: 100,
        200: 200,
        300: 300,
        400: 400,
        500: 500
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    plugin(({ addUtilities, theme }) => {
      const utilities = [
        {
          '.flex-center': {
            display: 'flex',
            'align-items': "center",
            'justify-content': 'center'
          }
        },
        {
          '.flex-y-center': {
            display: 'flex',
            'align-items': "center",
          }
        },
        {
          '.flex-x-center': {
            display: 'flex',
            'justify-content': 'center'
          }
        },
      ]
      addUtilities(utilities)
    })
  ],
}
