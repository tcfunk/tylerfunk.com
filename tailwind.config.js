module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Oswald'],
      'serif': ['Quattrocento']
    },
    extend: {
      boxShadow: {
        neumorph: '20px 20px 60px #d9d9d9, -20px -20px 60px #ffffff;'
      },
      colors: {
        itch: {
          DEFAULT: '#FE2348'
        },
        twitch: {
          DEFAULT: '#9146FF'
        },
        twitter: {
          DEFAULT: '#55acee'
        },
        artstation: {
          DEFAULT: '#13aff0'
        }
      }
    },
  },
  variants: {
    extend: {
      visibility: ['hover']
    },
  },
  plugins: [],
}
