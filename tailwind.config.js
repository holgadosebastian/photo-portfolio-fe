module.exports = {
  purge: {
    content: [
      'src/**/*.js',
      'src/**/*.jsx',
      'src/**/*.ts',
      'src/**/*.tsx',
      'public/**/*.html',
    ],
    options: {
      safelist: [
        'w-1/12',
        'w-2/12',
        'w-3/12',
        'w-4/12',
        'w-5/12',
        'w-6/12',
        'w-7/12',
        'w-8/12',
        'w-9/12',
        'w-10/12',
        'w-11/12',
        'w-12/12',

        'md:w-1/12',
        'md:w-2/12',
        'md:w-3/12',
        'md:w-4/12',
        'md:w-5/12',
        'md:w-6/12',
        'md:w-7/12',
        'md:w-8/12',
        'md:w-9/12',
        'md:w-10/12',
        'md:w-11/12',
        'md:w-12/12',

        'lg:w-1/12',
        'lg:w-2/12',
        'lg:w-3/12',
        'lg:w-4/12',
        'lg:w-5/12',
        'lg:w-6/12',
        'lg:w-7/12',
        'lg:w-8/12',
        'lg:w-9/12',
        'lg:w-10/12',
        'lg:w-11/12',
        'lg:w-12/12',

        'xl:w-1/12',
        'xl:w-2/12',
        'xl:w-3/12',
        'xl:w-4/12',
        'xl:w-5/12',
        'xl:w-6/12',
        'xl:w-7/12',
        'xl:w-8/12',
        'xl:w-9/12',
        'xl:w-10/12',
        'xl:w-11/12',
        'xl:w-12/12',
      ],
    },
  },
  theme: {
    screens: {
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },

    fontFamily: {
      display: [
        'Source Sans Pro',
        'system-ui',
        'BlinkMacSystemFont',
        '-apple-system',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif',
      ],
      body: [
        'Roboto',
        'system-ui',
        'BlinkMacSystemFont',
        '-apple-system',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif',
      ],
    },
    extend: {
      spacing: {
        '50p': '50%',
        '100p': '100%',
      },
    },
  },
  variants: {},
  plugins: [],
}
