第一 webpack加载css所需的loader及其使用方式
	简介：讲解css加载器的使用方式
	1了解loader
		loader让webpack能够去处理那些非JavaScript文件(webpack自身只理解javascript)。loader可以将所有类型的文件转换为webpack能够处理的有效模块，然后你就可以利用webpack的打包能力，对它们进行处理。
	2安装loader
		安装style-loader和css-loader
		下载:
		npm install style-loader css-loader --save-dev
	3配置loader
		在webpack.congfig.js文件里配置module中的rules在webpack的配置中loader有两个目标：
		1.test属性，用于标识出应该被对应的loader进行转换的某个或某些文件
		2.user属性，表示进行转换，应该使用哪个loader。
		bug：CssSyntaxError文件不能多写
		解决方式：交换顺序
	4创建css文件并运行命令
		创建index.css文件并import进index.js文件中
