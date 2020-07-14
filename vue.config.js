

const TerserPlugin = require('terser-webpack-plugin');

var baseUrl = './'
if(process.env.NODE_ENV === 'production') {
   baseUrl = '././'
}
module.exports = {
    outputDir : "dist",//打包项目名称
    baseUrl,
    lintOnSave : false,//关闭eslint
    configureWebpack: {
      optimization: {
        minimizer: [
          new TerserPlugin({
            terserOptions: {
              ecma: undefined,
              warnings: false,
              parse: {},
              compress: {
                drop_console: true,
                drop_debugger: false,
                pure_funcs: ['console.log'] //移除console
              }
            },
          }),
        ]
      }
    }
}