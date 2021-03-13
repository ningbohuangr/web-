### 探秘js的第七中数据类型Symbol

#### 简介：介绍Symbol是什么及使用场景

- ​	ES6之前javaScript的数据类型

  - Number(数字)
  - String(字符串)
  - Boolean（布尔值）
  - Object（对象）
  - null（空对象指针）
  - Undefined(声明的变量未被初始化时)

- 引入的背景

  - 对象的属性名容易产生命名冲突，为保证键名的唯一性,故es6引入Symbol这种新的原始数据类型，确保创建的每个变量都是唯一无二的

- 特点

  - Symbol类型的数据时类似字符串的数据类型，由于Symbol函数返回的值是原始的数据，不是对象，故Symbol函数前不能使用new命令，否则会报错。

  - 可选参数，由于控制台输出不同的Symbol变量时都是Symbol(),故为了区分，可在创建Symbol变量时传入参数进行区分。如：

    ```
    //这里a1,a2的作用可以说时为了备注，以至于我们输出Symbol变量时能区分不同变量。
    let a1 =Symbol('a1')
let a2 =symbol('a2')
    ```
    
  
- 用法

  - 定义对象的唯一属性名

    ```
    // 在对象里用Symbol作为属性的三种写法
    let name =Symbol()
    //第一种方式:借助数组读取name变量，此时不能用点运算符，带运算符默认后面的参数是字符串
    let a={}
    a[name] ="Nick"
    //第二种方法：构造函数声明
    let a={
    [name]:"Nick"
    }
    //第三种 Object。defineProperty
    let a={}
    Object.defineProperty(a,name,{value:Nick)};
    ```

  - 定义常量

    ```
    //定义字符串常量
    const name =Symbol("Nick");
    ```

    

