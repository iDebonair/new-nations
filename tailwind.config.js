// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './public/index.html',
    // Add any other files that contain your HTML or JSX code
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('postcss-nesting'),
    require('tailwindcss'),
  ],
};
