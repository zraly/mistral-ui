const plugin = require('tailwindcss/plugin')

module.exports = plugin(
  function ({ matchUtilities, addUtilities, theme, variants, e }) {

  },
  {
    theme: {
      extend: {
        animation: {
            'mistral-slideDown': '350ms ease 0ms 1 normal none running mistral-slideDown',
          },
          keyframes: {
            'mistral-slideDown': {
              '0%': {
                opacity: 0,
                transform: 'translateY(-50px)'
              },
              '40%': {
                transform: 'translateY(3px)'
              },
              '100%': {
                opacity: 1,
                transform: 'translateY(0) '
              }
            }
          }
      },
    }
  }
)

