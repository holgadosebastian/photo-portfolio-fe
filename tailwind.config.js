module.exports = {
  purge: [
    'src/**/*.js',
    'src/**/*.jsx',
    'src/**/*.ts',
    'src/**/*.tsx',
    'public/**/*.html',
  ],
  theme: {
    fontFamily: {
      'sans': ['Noto Sans JP', 'ui-sans-serif', 'system-ui'],
    },
    extend: {
      spacing: {
        '50p': "50%",
        '100p': "100%",
      }
    },
  },
  variants: {},
  plugins: [],
}