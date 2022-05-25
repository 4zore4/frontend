const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    // https:false,
    open:true,
    proxy: {
      '/api': {
        target : 'http://localhost:8081',
        changeOrigin: true,
        PathRewrite: {
          '/api': ''
        }
      }
    }
  }
})
