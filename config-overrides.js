process.env.GENERATE_SOURCEMAP = 'false'

const { override, fixBabelImports, addLessLoader, addDecoratorsLegacy } = require('customize-cra')

const rewiredMap = () => config => {
  config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false
  return config
}

module.exports = override(
  fixBabelImports('import', {
    // antd按需加载
    libraryName: 'antd',
    libraryDirectory: 'es',
    // style: 'css'
    // 修改主题样式
    style: true
  }),
  // antd 是使用 less，cra 默认不支持 less，需要安装一下 less-loader
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      importLoaders: true,
      modifyVars: {
        '@primary-color': 'red',
        '@border-color-base': 'green',
        '@link-color': 'orange'
      }
    }
  }),
  rewiredMap(),
  addDecoratorsLegacy()
)
