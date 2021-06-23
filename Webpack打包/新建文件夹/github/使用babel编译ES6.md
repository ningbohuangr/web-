### 使用babel编译ES6

### 1.了解babel

​		目前，ES6(ES2015)这样的语法已经得到很大规模的应用，它具有更加简洁、功能更加强大的特点，实际的项目中很可能采用了ES6的语法模块，但浏览器对于ES6语法的支持并不完善。为了实现兼容，就需要使用转换工具对ES6语法转换为ES5语法，babel就是最常用的一个工具

```
let a=10;
console.log(a);
//转换
var a=10;
console.log(a);
```

babel转化语法所需的依赖项：

​			babel-loader:负责es6语法转化

​			babel-core：bael核心包

​			babel-preset-env：告诉babel使用哪种转换规则进行文件处理

#### 2.安装依赖

npm install babel-loader @babel/core @babel/preset-env --save-dev



#### 3.配置config文件



##### 		exclude表示不在指定目录查找相关文件

```
module:{
	rules:[
		{
			test:'/\.js$/',
			exclude:/node_modules,
			user:'babel-loader'
		}
	]
}
```

#### 4.新建 .babelrc 文件配置转换规则

```
{
	"presets":["@babel/preset-env"]
}
```



#### 5.另一种规则配置

```
use:{
	loader:'babel-loader',
	options:{
	presets:['@babel/preset-env']
	}
}
```

