### 使用sourcemap调试

#### 1.了解sourcemap

​			sourcemap是为了解决实际运行代码(打包后的)出现问题时，无法定位到开发环境中的源代码问题。

##### devtool选项

(1)eval

​		每个模块使用eval执行，每个一个模块会增加sourceURL来关联模块处理前后的对应关系。如下图

![image-20210623084900825](C:\Users\5.4\AppData\Roaming\Typora\typora-user-images\image-20210623084900825.png)

​		由于会映射到转换后的代码，而不是映射到原始代码(没有从loader中获取sourcemap),所以不能正确的显示行数，因为不需要生成模块的sourcemap，因此打包速度很快

(2)source-map

​		source-map会为模板生成独立的soucemap文件

​		![image-20210623084636395](C:\Users\5.4\AppData\Roaming\Typora\typora-user-images\image-20210623084636395.png)

​		打包后的模块在模块后会对应引用一个.map文件，同时在打包好的目录下会生成对应的.map文件。如下图

![image-20210623085456693](C:\Users\5.4\AppData\Roaming\Typora\typora-user-images\image-20210623085456693.png)

(3) inline

​		与source-map不同，增加inline属性后，不会单独生成独立的.map文件，source map 转换为DataUrl后添加到bundle中。如下图所示

![image-20210623085735630](C:\Users\5.4\AppData\Roaming\Typora\typora-user-images\image-20210623085735630.png)

（4）cheap(推荐 cheap-module-eval-source-map:webpack5;eval-cheap-module-source-map)

​			cheap属性在打包后同样会为每个模块生成.map文件会忽略原始代码中的列信息，也不包含sourcemap。

(5) module

​			包含了loader模块之间的sourcemap，将loader source map 简化为每行一个映射。

#### 2.使用sourcemap调试

​			(1)js调试

![image-20210623101825518](C:\Users\5.4\AppData\Roaming\Typora\typora-user-images\image-20210623101825518.png)

​			(2)css调试

![image-20210623103517368](C:\Users\5.4\AppData\Roaming\Typora\typora-user-images\image-20210623103517368.png)

