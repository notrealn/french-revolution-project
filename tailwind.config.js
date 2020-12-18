module.exports = {
  future: {
    purgeLayersByDefault: true,
  },
  purge: {
    mode: 'layers',
    content: ['./src/**/*.tsx', './src/**/*.ts', './src/**/*.ejs'],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
