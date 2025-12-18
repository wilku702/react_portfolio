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
        type1: {
          '0%': { width: '0' },
          '99.9%': { borderRightColor: 'rgba(255,255,255,0.75)' },
          '100%': { width: '6em', borderRightColor: 'transparent' }
        },
        type2: {
          '0%': { width: '0', opacity: '0' },
          '1%': { opacity: '1' },
          '99.9%': { borderRightColor: 'rgba(255,255,255,0.75)' },
          '100%': { width: '12em', opacity: '1', borderRightColor: 'transparent' }
        },
        type3: {
          '0%': { width: '0', opacity: '0' },
          '1%': { opacity: '1' },
          '100%': { width: '18em', opacity: '1' }
        },
        blink: {
          '50%': { borderRightColor: 'transparent' }
        },
        scrollBounce: {
          '0%': { transform: 'translateY(-20px) rotate(45deg)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateY(20px) rotate(45deg)', opacity: '0' }
        }
      },
      animation: {
        snow: 'snowFall 10s linear infinite, snowShake 3s ease-in-out infinite',
        type: 'type1 1s steps(40, end) forwards',
        type2: 'type2 1.25s steps(40, end) 1s forwards',
        type3: 'type3 1.75s steps(60, end) 2.25s forwards, blink .5s step-end infinite alternate 2.25s',
        scroll: 'scrollBounce 3s cubic-bezier(0.19, 1, 0.22, 1) infinite'
      }
    }
  },
  plugins: []
};
