### webpack提取分离css单独打包(ExtractPlugin)

#### 1.处理效果

​		将所有的入口 chunk(entry chunks)中引用的 css,移动到独立分离的CSS文件

#### 2.ExtractTextPlugn插件(旧版本)

​		(1) 安装 (下载)

​			npm install --save-dev extract-text-webpack-plugin@next

​		(2) 配置config文件

​			引入插件：

```
const ExtractTexPlugin=require("extrcat-text-webpack-plugin");
```

​			Rules 设置

​			fallback：编译后用什么loader来提取css文件		

```
module:{
	rules:[
		{
			test:/\.css$/,
			use:ExtreactTextPlugin.extract({
			fallback:"style-loader",
			use:"css-loader"
			})
		}
	]
}
```

​			Plugin设置

```
plugins:[
	new ExtractTextPlugin("./css/[name].css")//可以打包在一个文件内
]
```

#### 3.mini-css-extract-plugin插件

​		(1)安装(下载)

​					npm install --save-dev mini-css-extract-plugin

​		(2)配置config文件

​				引入插件：

```
const MiniCssExtractPlugin=require("mini-css-extract-plugin");
```

​		Rules设置

```
module:{
	rules:[
		test:/\.css$/,
		use:[MiniCssExtractPlugin.loader,'css-loader']
	]
}
```

​		Plugins设置

```
		new MiniCssExtractplugin({
			fliename:'./css/[name].css"
})
```

