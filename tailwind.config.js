const minMax = {
  min: 'min-content',
  max: 'max-content',
}

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
  ],
  theme: {
    extend: {
      width: minMax,
      height: {
        ...minMax,
        '1/2': '50%'
      }
    },
    typography: (theme) => ({
      default: {
        css: {
          pre: {
            backgroundColor: theme('colors.gray.900')
          },
        },
      },
    }),
  },
  variants: {},
  plugins: [],
}
