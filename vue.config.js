module.exports = {
  publicPath: '/my_autodeployment/',
  outputDir: 'dist',
  indexPath: 'index.html',
  filenameHashing: true,
  lintOnSave: process.env.NODE_ENV === 'production',
  runtimeCompiler: false,
  productionSourceMap: true
}