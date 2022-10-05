module.exports = {
  // These paths are just examples, customize them to match your project structure
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  mode: 'jit',
  darkMode: 'class',
  theme: {
    textShadow: {
      'one': '2px 2px 4px rgb(0 0 0 / 100%)',
    },
    extend: {
      fontFamily: {
        chomsky: 'Chomsky, serif',
        opensans: 'Open Sans, sans-serif',
        poppins: 'Poppins, sans-serif',
      }
    },
    screens: {
      'pp': '540px',
      // => @media (min-width: 640px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'mm': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-textshadow')
  ],
}