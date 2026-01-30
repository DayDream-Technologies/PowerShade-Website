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
        // Ocean blues (primary palette)
        ocean: {
          50: '#f0f9ff',
          100: '#caf0f8',
          200: '#90e0ef',
          300: '#00b4d8',
          400: '#0096c7',
          500: '#0077b6',
          600: '#005f8f',
          700: '#023e8a',
          800: '#03045e',
          900: '#020438',
        },
        // Sunset warmth (accent palette)
        sunset: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        },
        // Sand neutrals (warm grays)
        sand: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
        },
      },
      fontFamily: {
        heading: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
        body: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'ocean-gradient': 'linear-gradient(135deg, #0077b6 0%, #00b4d8 50%, #90e0ef 100%)',
        'sunset-gradient': 'linear-gradient(135deg, #f59e0b 0%, #0077b6 100%)',
        'hero-gradient': 'linear-gradient(180deg, rgba(3,4,94,0.8) 0%, rgba(0,119,182,0.6) 100%)',
        'card-gradient': 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,119,182,0.05) 100%)',
        'cta-gradient': 'linear-gradient(135deg, #0077b6 0%, #023e8a 100%)',
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0, 119, 182, 0.1)',
        'card-hover': '0 8px 30px rgba(0, 119, 182, 0.2)',
        'button': '0 4px 14px rgba(0, 119, 182, 0.3)',
        'button-hover': '0 6px 20px rgba(0, 119, 182, 0.4)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
