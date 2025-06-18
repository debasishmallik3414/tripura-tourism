/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // important for app router
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
// // tailwind.config.js
// module.exports = {
//   content: [...],
//   theme: {
//     extend: {
//       animation: {
//         'fade-in': 'fadeIn 1s ease-out forwards',
//       },
//       keyframes: {
//         fadeIn: {
//           '0%': { opacity: 0, transform: 'translateY(20px)' },
//           '100%': { opacity: 1, transform: 'translateY(0)' },
//         },
//       },
//     },
//   },
//   plugins: [],
// };

