/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        monteserrat: ['Monteserrat', 'sans-serif'],
        oj: ['Ojuju', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            h2: {
              fontSize: '1.5rem',
              fontWeight: '700',
              color: '#172554',
            },
            p: {
              fontSize: '1.25rem',
              color: '#172554',
              fontWeight: '500'
            },
            strong: {
              fontSize: '1.25rem',
              color: '#172554',
              fontWeight: '500'
            }
          }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

