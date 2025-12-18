/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'rgb(20,20,20)',
        text: '#ffffff',
        main: 'rgb(148, 174, 247)'
      },
      fontFamily: {
        mono: [
          'RobotoMono',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'monospace'
        ],
        monoLight: ['RobotoMonoLight', 'RobotoMono', 'monospace'],
        monoBold: ['RobotoMonoBold', 'RobotoMono', 'monospace'],
        monoSemi: ['RobotoMonoSemiBold', 'RobotoMono', 'monospace']
      },
      keyframes: {
        snowFall: {
          '0%': { top: '-10%' },
          '100%': { top: '100%' }
        },
        snowShake: {
          '0%, 100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(80px)' }
        },
        typewriter: {
          '0%': { width: '0', opacity: '0' },
          '1%': { opacity: '1' },
          '100%': { width: '100%', opacity: '1' }
        },
        blink: {
          '0%, 50%': { 'border-color': 'rgba(255,255,255,0.75)' },
          '50%, 100%': { 'border-color': 'transparent' }
        },
        scrollBounce: {
          '0%': { transform: 'translateY(-20px) rotate(45deg)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateY(20px) rotate(45deg)', opacity: '0' }
        }
      },
      animation: {
        snow: 'snowFall 10s linear infinite, snowShake 3s ease-in-out infinite',
        type: 'typewriter 1.1s steps(40, end) forwards',
        type2:
          'typewriter 1.3s steps(40, end) 1s forwards, blink .5s step-end infinite alternate 2.3s',
        type3:
          'typewriter 1.7s steps(60, end) 2.4s forwards, blink .5s step-end infinite alternate 2.4s',
        scroll: 'scrollBounce 3s cubic-bezier(0.19, 1, 0.22, 1) infinite'
      }
    }
  },
  plugins: []
};
