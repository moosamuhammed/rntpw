// module.exports = {
//     theme: {
//       extend: {
//         animation: {
//           fadeIn: 'fadeIn 1s ease-out forwards',
//         },
//         keyframes: {
//           fadeIn: {
//             '0%': { opacity: 0 },
//             '100%': { opacity: 1 },
//           },
//         },
//       },
//     },
//     plugins: [],
//   }
  


 
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: 0, transform: 'translateX(-50px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.8s ease-out forwards',
        slideIn: 'slideIn 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
}

