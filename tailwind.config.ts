import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
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
        // Scene background patterns
        'waves-pattern': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%230077b6' fill-opacity='0.08' d='M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`,
        'waves-double': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%2390e0ef' fill-opacity='0.1' d='M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,197.3C672,213,768,235,864,229.3C960,224,1056,192,1152,181.3C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3Cpath fill='%230077b6' fill-opacity='0.06' d='M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,261.3C960,256,1056,224,1152,213.3C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`,
        'sun-rays': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Cdefs%3E%3CradialGradient id='sunGrad' cx='0%25' cy='0%25' r='100%25'%3E%3Cstop offset='0%25' stop-color='%23fbbf24' stop-opacity='0.15'/%3E%3Cstop offset='100%25' stop-color='%23fbbf24' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Ccircle cx='0' cy='0' r='300' fill='url(%23sunGrad)'/%3E%3C/svg%3E")`,
        'sun-rays-right': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Cdefs%3E%3CradialGradient id='sunGradR' cx='100%25' cy='0%25' r='100%25'%3E%3Cstop offset='0%25' stop-color='%23fbbf24' stop-opacity='0.12'/%3E%3Cstop offset='100%25' stop-color='%23fbbf24' stop-opacity='0'/%3E%3C/radialGradient%3E%3C/defs%3E%3Ccircle cx='400' cy='0' r='300' fill='url(%23sunGradR)'/%3E%3C/svg%3E")`,
        'grass-pattern': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 40'%3E%3Cpath d='M5,40 Q5,25 8,20 Q5,25 5,40' fill='%2322c55e' fill-opacity='0.15'/%3E%3Cpath d='M15,40 Q14,20 18,10 Q16,22 15,40' fill='%2316a34a' fill-opacity='0.12'/%3E%3Cpath d='M25,40 Q25,28 28,22 Q25,28 25,40' fill='%2322c55e' fill-opacity='0.1'/%3E%3Cpath d='M35,40 Q34,22 38,15 Q36,24 35,40' fill='%2316a34a' fill-opacity='0.15'/%3E%3Cpath d='M45,40 Q45,30 48,25 Q45,30 45,40' fill='%2322c55e' fill-opacity='0.12'/%3E%3Cpath d='M55,40 Q54,18 58,8 Q56,20 55,40' fill='%2316a34a' fill-opacity='0.1'/%3E%3Cpath d='M65,40 Q65,26 68,20 Q65,26 65,40' fill='%2322c55e' fill-opacity='0.15'/%3E%3Cpath d='M75,40 Q74,24 78,18 Q76,26 75,40' fill='%2316a34a' fill-opacity='0.12'/%3E%3Cpath d='M85,40 Q85,28 88,22 Q85,28 85,40' fill='%2322c55e' fill-opacity='0.1'/%3E%3Cpath d='M95,40 Q94,20 98,12 Q96,22 95,40' fill='%2316a34a' fill-opacity='0.15'/%3E%3C/svg%3E")`,
        'clouds-pattern': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 200'%3E%3Cellipse cx='100' cy='120' rx='60' ry='30' fill='%230077b6' fill-opacity='0.04'/%3E%3Cellipse cx='140' cy='110' rx='50' ry='25' fill='%230077b6' fill-opacity='0.05'/%3E%3Cellipse cx='80' cy='115' rx='40' ry='20' fill='%2390e0ef' fill-opacity='0.04'/%3E%3Cellipse cx='450' cy='80' rx='70' ry='35' fill='%230077b6' fill-opacity='0.04'/%3E%3Cellipse cx='500' cy='70' rx='55' ry='28' fill='%230077b6' fill-opacity='0.05'/%3E%3Cellipse cx='420' cy='75' rx='45' ry='22' fill='%2390e0ef' fill-opacity='0.04'/%3E%3Cellipse cx='280' cy='150' rx='50' ry='25' fill='%230077b6' fill-opacity='0.03'/%3E%3Cellipse cx='310' cy='145' rx='40' ry='20' fill='%2390e0ef' fill-opacity='0.04'/%3E%3C/svg%3E")`,
        'sand-dunes': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 200'%3E%3Cpath d='M0,200 Q360,120 720,160 Q1080,200 1440,140 L1440,200 L0,200 Z' fill='%23fde68a' fill-opacity='0.15'/%3E%3Cpath d='M0,200 Q300,160 600,180 Q900,200 1200,170 Q1350,155 1440,165 L1440,200 L0,200 Z' fill='%23fef3c7' fill-opacity='0.12'/%3E%3C/svg%3E")`,
        'beach-scene': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 400'%3E%3Cpath d='M0,400 L0,280 Q360,220 720,260 Q1080,300 1440,240 L1440,400 Z' fill='%23fde68a' fill-opacity='0.1'/%3E%3Cpath d='M0,400 Q240,340 480,360 Q720,380 960,350 Q1200,320 1440,360 L1440,400 L0,400 Z' fill='%23fef3c7' fill-opacity='0.08'/%3E%3Cpath fill='%230077b6' fill-opacity='0.06' d='M0,320L60,314.7C120,309,240,299,360,293.3C480,288,600,288,720,293.3C840,299,960,309,1080,304C1200,299,1320,277,1380,266.7L1440,256L1440,400L1380,400C1320,400,1200,400,1080,400C960,400,840,400,720,400C600,400,480,400,360,400C240,400,120,400,60,400L0,400Z'%3E%3C/path%3E%3C/svg%3E")`,
        'backyard-pattern': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect x='0' y='85' width='100' height='15' fill='%238b5cf6' fill-opacity='0.03'/%3E%3Cline x1='0' y1='85' x2='100' y2='85' stroke='%238b5cf6' stroke-opacity='0.08' stroke-width='2'/%3E%3Cline x1='10' y1='85' x2='10' y2='100' stroke='%238b5cf6' stroke-opacity='0.05' stroke-width='1'/%3E%3Cline x1='30' y1='85' x2='30' y2='100' stroke='%238b5cf6' stroke-opacity='0.05' stroke-width='1'/%3E%3Cline x1='50' y1='85' x2='50' y2='100' stroke='%238b5cf6' stroke-opacity='0.05' stroke-width='1'/%3E%3Cline x1='70' y1='85' x2='70' y2='100' stroke='%238b5cf6' stroke-opacity='0.05' stroke-width='1'/%3E%3Cline x1='90' y1='85' x2='90' y2='100' stroke='%238b5cf6' stroke-opacity='0.05' stroke-width='1'/%3E%3C/svg%3E")`,
        'camping-pattern': `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 100'%3E%3Cpath d='M20,100 L50,40 L80,100 Z' fill='%2322c55e' fill-opacity='0.08'/%3E%3Cpath d='M60,100 L100,30 L140,100 Z' fill='%2316a34a' fill-opacity='0.06'/%3E%3Cpath d='M120,100 L160,50 L200,100 Z' fill='%2322c55e' fill-opacity='0.07'/%3E%3Cpath d='M0,100 L20,60 L40,100 Z' fill='%2316a34a' fill-opacity='0.05'/%3E%3Cpath d='M160,100 L185,55 L210,100 Z' fill='%2322c55e' fill-opacity='0.06'/%3E%3C/svg%3E")`,
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
