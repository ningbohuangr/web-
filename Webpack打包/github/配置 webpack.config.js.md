配置 webpack.config.js

1.新建一个webpack.config.js

2.配置入口entry(所需打包的文件路径)
	单文件：
	列如：entry：'./src/index.js'
	多文件：
		在你想要多个依赖文件一起注入，并且将他们的依赖导向到一个“chunck”时，传入数组的方式就很有用。
		entry：['./src/index.js','./src/index2.js,.....']
	多入口：
		列如：
			entry：{
			pageOne：'./src/pageOne/index.js',
			pageTwo:'./src/pageTwo/index.js',
			pageThree:'./src/pageThree/index.js'
		}

3.配置出口output
	(1)单出口
		output:{
		path:path.resolve(__dirname,'dist'),
		fliename:'bundle.js'
	}
	(2)多出口
		output:{
		path:path.resolve(__dirname,'dist'),
		filename:'[name].js'
	}




	（1） path指文件打包后存放路径
	（2） path.resolve()方法将路径或路径片段的序列处理成绝对路径
	（3）_dirname 表示当前文件所在目录的绝对路径
	（4）filename是打包后文件的名称