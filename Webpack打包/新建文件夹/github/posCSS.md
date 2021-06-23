### 使用posCss处理浏览器前缀

- 处理效果



-  安装loader

  1. 安装postcss-loader 和autoprefixer

  2. 下载：

     npm install --save-dev postcss-loader autoprefixer

- 配置loader

  需要和autoprefixer一起用



​		loader中设置：

​		

```
{
	browsers:[
		'ie>=8',//ie版本大于等于ie8
		'Firefox>=20',//火狐浏览器大于20版本
		'Safari>=5',//safari大于5版本
		'Android>=4',//版本大于andriod4
		'ios>=6',//版本大于ios6
		'last 4 version'//浏览器最新的四个版本
	]
}
```

