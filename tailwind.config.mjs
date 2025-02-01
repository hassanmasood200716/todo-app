module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backdropBlur: {
        lg: '24px',
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}