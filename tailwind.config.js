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
      },
      fontSize: {
        '6xl': '3.5rem'
      }
    }
  },
  variants: {
    animation: ['responsive', 'hover', 'group-hover'],
    alignSelf: ['responsive', 'even', 'odd', 'hover', 'focus'],
    borderColor: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    borderWidth: ['responsive', 'hover', 'focus'],
    scale: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    textDecoration: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    translate: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    opacity: ['responsive', 'hover', 'focus', 'active', 'group-hover']
  },
  plugins: [require('@tailwindcss/typography')],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
