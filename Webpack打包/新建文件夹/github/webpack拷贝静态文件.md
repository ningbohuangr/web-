### webpack拷贝静态文件

1.处理效果

![image-20210622175452605](C:\Users\5.4\AppData\Roaming\Typora\typora-user-images\image-20210622175452605.png)

2.安装下载

​	npm install --save-dev copy-webpack-plugin

3.配置config文件

​	引入插件

```
const CopyWebpackPlugin=require("copy-webpack-plugin")
```

​	 webpack4语法plugin设置

```
plugin:[
	new CopyWebpackPlugin([
	{
	from:__dirname+'/public/assets',
	to:__dirname+'/build/assets'
	}
	])
]
```

 webpack4语法plugin设置

```
plugin:[
new CopyWebpackPlugin(options:{
patters:[
{
	from:__dirname+'/public/assets',
	to:__dirname+'/build/assets'
	}
]
})
]
```

