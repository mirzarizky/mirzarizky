/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      borderWidth: {
        '3': '3px'
      },
      colors: {
        black: '#1A202C',
        dark: '#121212',
        hijau: '#88b04b'
      },
      fontFamily: {
        sans: ['"Work Sans"', 'sans-serif'],
        serif: ['Lora', 'Georgia']
      }
    }
  },
  variants: {},
  plugins: []
}
