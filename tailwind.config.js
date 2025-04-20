module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        emerald: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
        gold: {
          50: '#fff9eb',
          100: '#ffefc2',
          200: '#ffe099',
          300: '#ffd070',
          400: '#ffc147',
          500: '#ffb21e',
          600: '#e69500',
          700: '#cc8500',
          800: '#a36a00',
          900: '#7a5000',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        amiri: ['Amiri', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
