import vue from 'rollup-plugin-vue'

export default {
  input: 'src/main.js',
  output: [
    {
      file: 'dist/index.common.js',
      format: 'cjs',
    },
    {
      file: 'dist/index.esm.js',
      format: 'es',
    },
  ],
  plugins: [
    vue({
      preprocessStyles: true,
      css: false,
      compileTemplate: true,
    }),
  ],
}
