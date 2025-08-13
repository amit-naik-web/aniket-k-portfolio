/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'rgb(var(--color-primary) / <alpha-value>)',
          500: 'rgb(var(--color-primary) / <alpha-value>)',
          600: 'rgb(var(--color-primary) / <alpha-value>)',
          700: 'rgb(var(--color-primary-dark) / <alpha-value>)',
        },
        secondary: {
          500: 'rgb(var(--color-secondary) / <alpha-value>)',
          600: 'rgb(var(--color-secondary) / <alpha-value>)',
        },
        accent: {
          500: 'rgb(var(--color-accent) / <alpha-value>)',
          600: 'rgb(var(--color-accent) / <alpha-value>)',
        },
      },
      fontFamily: {
        artistic: ['"Pacifico"', 'cursive'],
        sans: ['var(--font-family-sans)'],
        mono: ['var(--font-family-mono)'],
        serif: ['var(--font-family-serif)'],
      },
    },
  },
  plugins: [],
}

