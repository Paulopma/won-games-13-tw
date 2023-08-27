import type { Config } from 'tailwindcss'

/* eslint-disable @typescript-eslint/no-unused-vars */
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: '#F231A5',
      accent: '#3CD3C1',
      black: '#030517',
      white: '#FAFAFA',
      gray: {
        900: '#F3F3F3',
        800: '#EAEAEA',
        700: '#B5B5B5',
        600: '#8F8F8F',
        500: '#666',
      },
      red: '#FF5F5F',
      'bg-dark': '#06092B',
    },
    extend: {
      keyframes: {
        slideDownAndFade: {
          from: { opacity: '0', transform: 'translateY(-2px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeftAndFade: {
          from: { opacity: '0', transform: 'translateX(2px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideUpAndFade: {
          from: { opacity: '0', transform: 'translateY(2px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideRightAndFade: {
          from: { opacity: '0', transform: 'translateX(-2px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        slideDownAndFade:
          'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideLeftAndFade:
          'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideRightAndFade:
          'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function ({ addUtilities }: { addUtilities: any }) {
      const newUtilities = {
        '.diagonal-clip': {
          clipPath: 'polygon(0 12%, 100% 0, 100% 100%, 0% 100%)',
        },
      }
      addUtilities(newUtilities, ['responsive'])
    },
  ],
}
export default config
