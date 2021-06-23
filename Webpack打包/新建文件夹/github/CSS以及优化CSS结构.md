# CSS以及优化CSS结构

#### 1.处理效果

变成一行

#### 2.optimize-css-assets-webpack-plugin插件

​			(1)安装(下载)

​					npm install --save-dev optimize-css-assets-webpack-plugin

​			(2)配置config文件

​			引入插件：

```
const OptimizeCssAssetssPlugin=require('optimize-css-assets-webpack-plugin')
```

​			Plugin 设置

​			assetNameRegExp:正则表达式，用于匹配需要优化或压缩的资源名。默认是/\.css$/g

​			cssProcessor:用于压缩和优化css的处理器，默认是cssnano.

​			cssProcsseorPluginOptions：传递给cssProcessor的插件选项，默认为{}

​			canPrint:表示插件能够在console中打印信息，默认是true

​			discardComments：去除注释

3.webpack5使用CssMinimizerPlugin

​		(1)安装

​				npm install --save-dev  css-minimizer-webpack-plugin

​		(2)配置config

​				

```
 optimization: {
    minimize: true,
    minimizer: [
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            'default',
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
    ],
  },
```