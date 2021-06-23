### 用clean-webpca-plugin清除文件

#### 1.处理效果

​			当我们修改带hash文件并进行打包时，没打包一次就会生成一个新的文件，而旧的文件并没有删除。

![image-20210622184706676](C:\Users\5.4\AppData\Roaming\Typora\typora-user-images\image-20210622184706676.png)

​			为了解决这种情况，我们可以使用clear-webpack-plugin在打包之前先清除门之后再打包出最新的文件



#### 2.安装

​				npm install --save-dev clean-webpack-plugin

#### 3.配置config文件

​			引入插件

```
const ClearWebpackPlugin=require("clean-webpack-plugin");
//3.0写法
const {ClearWebpackPlugin} =require("clean-webpack-plugin");
```

​			plugin配置

```
plugin;[
	new ClearWebpackPlugin(['build'])
]
//3.0写法
plugin;[
	new ClearWebpackPlugin()
]
```

