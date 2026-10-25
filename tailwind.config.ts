import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0e0e10',
        card: '#161718',
        accent: '#e3fc02',
        gold: '#d4af37',
        'gold-light': '#FFD976',
        muted: '#A5A7AC',
        border: 'rgba(212,175,55,0.28)',
      },
      fontFamily: {
        heading: ['var(--font-oswald)', 'Oswald', 'sans-serif'],
        body: ['var(--font-figtree)', 'Figtree', 'sans-serif'],
      },
      maxWidth: {
        site: '1600px',
      },
    },
  },
  plugins: [],
}

export default config
