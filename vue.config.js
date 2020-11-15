module.exports = {
  css: {
    extract: false,
  },
  productionSourceMap: false,
  configureWebpack: {
    externals: {
      simplemde: {
        commonjs: 'simplemde',
        commonjs2: 'simplemde',
        amd: 'simplemde',
        root: 'SimpleMDE',
      },
      marked: 'marked',
      simplemde: {
        commonjs: 'smartmd',
        commonjs2: 'smartmd',
        amd: 'smartmd',
        root: 'Smartmd',
      },
    },
  },
};
