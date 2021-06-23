### 处理htnl内嵌图片

#### 1.如果图片没有被作为静态资源被打包，html无法打包内嵌图片

#### 2.安装

cnpm install --save-dev html-loader

3.配置config文件

rules中的配置

```
{
	test：/\.(html)$/,
	use:{
		loader:'html-loader',
		options:{
			attrs:['img:src','img:data-src']
		}
	}
}
```

最新配置

```
{
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    sources: {
                        list: [
                            {
                                tag: 'img',
                                attribute: 'data-src',
                                type: 'src',
                            },
                        ]
                    },
                },
            },
            }
```

