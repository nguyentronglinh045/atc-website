/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '17': 'repeat(17, minmax(0, 1fr))',
      },
      gridColumnStart: {
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
        '18': '18',
      },
      gridColumnEnd: {
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
        '18': '18',
      },
      backgroundImage: {
        'getInTouch': "url('../pages/assets/images/get-in-touch-bg.png'), linear-gradient(267.37deg, rgba(145, 48, 244, 0.4) 55.42%, rgba(70, 70, 249, 0.4) 96.83%)",
        'footer': "url('../pages/assets/images/footer-bg.png')",
        'buttonAboutUs': "linear-gradient(231.56deg, rgba(90, 0, 104, 0.6) 0%, rgba(255, 67, 42, 0.6) 11.56%, rgba(224, 67, 73, 0.6) 24.48%, rgba(42, 63, 255, 0.6) 80.21%, rgba(0, 2, 53, 0.6) 100%)",
        'requestDemoButton': "linear-gradient(90deg, #8882E3 0%, #DF8381 46.82%, #F6C07C 100%)",
        'requestDemo': "url('../pages/assets/images/request-demo-bg-1.png'), url('../pages/assets/images/request-demo-bg-2.png')",
        'cardTestimonial': "linear-gradient(356.02deg, rgba(197, 23, 241, 0.4) -13.02%, rgba(90, 255, 255, 0.4) 102.35%, rgba(233, 30, 213, 0.4) 157.37%)",
        'preface-0.75x': "url('../pages/assets/images/about-us-0.75x.png')",
        'preface-0.5x': "url('../pages/assets/images/about-us-0.5x.png')",
        'prefaceBar': "linear-gradient(231.56deg, #5A0068 0%, #FF432A 11.56%, #E04349 24.48%, #2A3FFF 80.21%, #000235 100%)",
      },
      backgroundPosition: {
        'requestDemo': "left top, center center"
      },
      backgroundSize: {
        'requestDemo': "auto, auto"
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    plugin(function({ addUtilities }) {
      addUtilities({
        '.no-scrollbar::-webkit-scrollbar': {
          'display': 'none',
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
        '.text-title-green-shadow': {
          'background': 'linear-gradient(90deg, #8882E3 0%, #DF8381 46.82%, #F6C07C 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
          'text-fill-color': 'transparent',
          'text-shadow': '0px 10px 18px rgba(9, 104, 93, 0.56)'
        },
        '.green-shadow': {
          'text-shadow': '0px 10px 18px rgba(9, 104, 93, 0.56)'
        },
        '.text-bg-bottom': {
          'color':'transparent',
          '--g':'linear-gradient(90deg, #8882E3 0%, #DF8381 10.6%, #F6C07C 22.64%)',
          'background': 'var(--g),var(--g)  bottom 2px left 0/100% 2px no-repeat',
          '-webkit-background-clip': 'text, padding-box'
        }
      })
    }),
    plugin(function({ matchUtilities }) {
      matchUtilities(
        {
          'bg-gradient': (angle) => ({
            'background-image': `linear-gradient(${angle}, var(--tw-gradient-stops))`,
          }),
          'text-1440': (value) => ({
            'font-size': `calc((100vw / 1440) * ${value})`,
            'line-height': `calc((100vw / 1440) * ${value})`,
            '@media (min-width: 1440px)': {
              'font-size': `${value}px`,
              'line-height': `${value}px`,
            },
          }),
          'text-360': (value) => ({
            'font-size': `calc((100vw / 360) * ${value})`,
            'line-height': `calc((100vw / 360) * ${value})`,
          }),
          'leading-1440': (value) => ({
            'line-height': `calc((100vw / 1440) * ${value}) !important`,
            '@media (min-width: 1440px)': {
              'line-height': `${value}px !important`,
            },
          }),
          'leading-360': (value) => ({
            'line-height': `calc((100vw / 360) * ${value}) !important`,
          }),
        },
      )
    })
  ]
}
