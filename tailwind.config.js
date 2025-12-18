/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'rgb(20,20,20)',
        text: '#ffffff',
        main: 'rgb(148, 174, 247)',
        accent: {
          purple: '#9333ea',
          blue: '#3b82f6',
          cyan: '#06b6d4',
          pink: '#ec4899',
          orange: '#f97316'
        }
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
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-mesh': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-animated': 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)'
      },
      backdropBlur: {
        xs: '2px'
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
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' }
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' }
        },
        drawLine: {
          '0%': { width: '0%' },
          '100%': { width: '100%' }
        }
      },
      animation: {
        snow: 'snowFall 10s linear infinite, snowShake 3s ease-in-out infinite',
        type: 'type1 1s steps(40, end) forwards',
        type2: 'type2 1.25s steps(40, end) 1s forwards',
        type3: 'type3 1.75s steps(60, end) 2.25s forwards, blink .5s step-end infinite alternate 2.25s',
        scroll: 'scrollBounce 3s cubic-bezier(0.19, 1, 0.22, 1) infinite',
        'gradient-shift': 'gradientShift 15s ease infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
        shimmer: 'shimmer 2s infinite',
        float: 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'draw-line': 'drawLine 0.6s ease-out forwards'
      }
    }
  },
  plugins: []
};
