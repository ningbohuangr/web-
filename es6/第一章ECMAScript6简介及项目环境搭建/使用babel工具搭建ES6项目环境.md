### 使用babel工具搭建ES6项目环境

#### 简介：讲解如何使用bable搭建ES6项目环境及bable的常用配置及用法

- node安装

- 初始化工程项目

  ```
  #使用默认配置初始化项目
  npm init -y
  ```

- 安装对应的依赖包

  ```
  #本地安装babel-cli及对应的转化规则
  npm install --save-dev babel-cli babel=preset-es2015
  ```

- 创建项目目录

  - src目录用于存放编写的es6代码
  - dist目录用于存放由es6转化后的代码

- 配置.babelrc文件

  - 新建.babelrc文件

    ```
    //配置用于转化当前代码的规则集
    {
    "presets":{"es2015"}
    }
    ```

  - bable的基本用法

    ```
     # 这是局部安装babel的用法,全局安装的话就不用输入目录了
     
     # 转码结果写入一个文件
     # --outfile 或 -o 参数指定输出文件
     $ node_modules/.bin/babel-node test.js --out-file test.js
     #或者
     $node_modules/.bin/babel-node test.js -o test.js
     
     #整个目录转码
     #--out-dir 或 -d 参数指定输出目录
     $ node_modules/.bin/babel-node src --out-dir dist
     #或者
     $node_modules/.bin/bale-node src -d dist
    ```

  - 配置package.json文件

    ```
    //配置启动脚本的命令
    "scripts":{
    //监听index.js文件,一旦发生变化就执行bable转译的命令
    "dev":"babel src/index.js -w -o dist/index.js",
    //将指定文件转译后输出到指定目录下
    "build":"babel src/index.js -o dist/index.js",
    //将src目录下所有es6文件转译后输出到dist目录
    "buildall":"bable src -d dist"
    }
    ```

    