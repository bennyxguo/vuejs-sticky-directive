import babel from 'rollup-plugin-babel'

export default {
  entry: './src/index.js',
  dest: 'vuejs-sticky-directive.js',
  plugins: [
    babel({
      exclude: 'node_modules/**',
      presets: ['es2015-rollup']
    })
  ],
  format: 'umd',
  moduleName: 'VuejsStickyDirective'
}
