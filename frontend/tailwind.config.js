/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      serif: ['Montserrat', 'ui-sans-serif', 'system-ui'],
    },
    extend: {
      fontFamily: {},
      colors: {
        // FixitBay Brand Colors
        fixitbay: {
          red: '#C0362C',           // Orange-red (bridge, accents, logo)
          lightBlue: '#62C2E3',     // Light blue (banner background)
          darkBlue: '#1A3B5D',      // Dark blue (city, background, tech clothing)
          mediumBlue: '#2C3E50',    // Medium blue (secondary background and shadows)
          white: '#FFFFFF',         // White (text)
          gold: '#F39C12',          // Yellow-orange (secondary accent)
          lightGray: '#D3EAF2',     // Light gray (clouds)
        }
      },
      fontSize: {
        'hero': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'hero-mobile': ['2.5rem', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'fadeIn': 'fadeIn 0.6s ease-out',
        'slideUp': 'slideUp 0.8s ease-out',
        'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'bounce-gentle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      boxShadow: {
        'premium': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        'card': '0 8px 32px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 20px 40px rgba(0, 0, 0, 0.15)',
        'gold-glow': '0 8px 24px rgba(243, 156, 18, 0.3)',
        'red-glow': '0 8px 20px rgba(192, 54, 44, 0.3)',
        'blue-glow': '0 8px 20px rgba(26, 59, 93, 0.2)',
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
};