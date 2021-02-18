module.exports = {
  purge: false,
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Overpass'],
      'serif': ['Permanent Marker']
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
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
      },
      flex: {
        '3/2': '1.5 1.5 auto',
        '2': '2 2 auto',
      },
      lineHeight: {
        'zero': '0',
      },
      width: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      }
    },
  },
  variants: {
    extend: {
      flexDirection: ['odd', 'even'],
      visibility: ['hover'],
      width: ['odd', 'even']
    },
  },
  plugins: [],
}
