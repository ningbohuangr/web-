### 根据Html模板生成Html

#### 1.了解html-webpack-plugin



​		HtmlWebpackPlugin会自动为你生成一个HTML文件，根据指定的index.html模板生成对应的html文件。

​		根据src下的index.html自动在打包后的目录下生成html文件，相关引用关系和文件路劲都会按照正确的配置被添加生成的html里

#### 2.安装依赖

​		npm install html-webpack-plugin --save-dev

#### 3.配置fonfig文件

```
const HtmlWebpackPlugin=require('html-webpack-plugin')
pulgins:[
	new HtmlwebpackPlugin({
		template:"./src/index.html",//模板文件路径
		filename:"webpack.html",生成的文件的名称
		minify:{
		minimize:true,//是否打包为最小值
		removeAttributeQuotes:true,//去除注释
		collapseWhitespace:true,//去除空格
		minfiyCSS：true//压缩html样式
		minifyJS：true,//压缩html内的js
		removeEmpotyElements:true,//清除内容为空的元素
		},
		hash:true//引入产出资源的时候加上哈希避免缓存
	})
]
```

