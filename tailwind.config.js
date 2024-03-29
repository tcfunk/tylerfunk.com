module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: false,
  theme: {
    fontFamily: {
      'sans': ['Outfit'],
      'serif': ['Outfit']
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
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
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
        },
        tsbg: { // turbosquid background color
          DEFAULT: '#f7f7f7'
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
  plugins: [],
}
