/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'SF Pro Text',
          'Helvetica Neue',
          'sans-serif'
        ],
      },
      fontSize: {
        'xs': ['0.8125rem', { lineHeight: '1.125rem' }],     // 13px
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],      // 14px
        'base': ['0.9375rem', { lineHeight: '1.375rem' }],   // 15px
        'lg': ['1rem', { lineHeight: '1.5rem' }],           // 16px
        'xl': ['1.125rem', { lineHeight: '1.75rem' }],      // 18px
      },
      colors: {
        primary: {
          DEFAULT: '#007AFF',
          50: '#E6F0FF',
          100: '#CCE1FF',
          200: '#99C3FF',
          300: '#66A5FF',
          400: '#3387FF',
          500: '#007AFF',
          600: '#0062CC',
          700: '#004999',
          800: '#003166',
          900: '#001833',
        },
        success: '#34C759',
        warning: '#FF9500',
        error: '#FF3B30',
        info: '#5856D6',
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        }
      },
      spacing: {
        'header': '3rem',      // 48px
        'sidebar': '14rem',    // 224px
        'toolbar': '2.5rem',   // 40px
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.25rem',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -4px rgba(0, 0, 0, 0.05)',
        'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.05)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
        'toolbar': '0 1px 0 0 rgba(0, 0, 0, 0.05)',
        'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
      },
      backdropBlur: {
        'toolbar': '20px',
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          "--btn-text-case": "none",
          "--rounded-btn": "0.5rem",
          "--rounded-badge": "0.375rem",
          "--rounded-box": "0.75rem",
          "--tab-radius": "0.5rem",
          "--btn-padding-x": ".75rem",
          "--btn-padding-y": ".375rem",
          "primary": "#007AFF",
          "primary-content": "#FFFFFF",
          "secondary": "#6B7280",
          "accent": "#FF375F",
          "neutral": "#1F2937",
          "base-100": "#FFFFFF",
          "base-200": "#F3F4F6",
          "base-300": "#E5E7EB",
          "base-content": "#1F2937",
          "info": "#5856D6",
          "success": "#34C759",
          "warning": "#FF9500",
          "error": "#FF3B30",
        },
        dark: {
          "--btn-text-case": "none",
          "--rounded-btn": "0.5rem",
          "--rounded-badge": "0.375rem",
          "--rounded-box": "0.75rem",
          "--tab-radius": "0.5rem",
          "--btn-padding-x": ".75rem",
          "--btn-padding-y": ".375rem",
          "primary": "#0A84FF",
          "primary-content": "#FFFFFF",
          "secondary": "#9CA3AF",
          "accent": "#FF375F",
          "neutral": "#D1D5DB",
          "base-100": "#1F2937",
          "base-200": "#374151",
          "base-300": "#4B5563",
          "base-content": "#F9FAFB",
          "info": "#5E5CE6",
          "success": "#32D74B",
          "warning": "#FF9F0A",
          "error": "#FF453A",
        },
      },
    ],
  },
} 