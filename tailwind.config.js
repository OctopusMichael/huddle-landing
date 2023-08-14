/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        'container': '75%', // Ancho personalizado para el contenedor
      },
      maxWidth: {
        'custom': '1440px', // Puedes ajustar el valor según tus necesidades
      },
      colors: {
        transparent : 'transparent',
        pink: '#ff52bf',
        pinkLight: '#ff52c08c',
        veryPaleCyan: '#ebfbff',
        veryDarkCyan: '#00252e',
        grayishBlue: '#808d99',
        grayLight: '#808d998e'

      },
      /* screens: {
        'md': '640px',
        // => @media (min-width: 640px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1440px',
        // => @media (min-width: 1440px) { ... }
      }, */
      
     
      
    },
  },
  plugins: [],
}

