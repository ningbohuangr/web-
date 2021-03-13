### 快速理解Es6中的代理Proxy和反射Reflect

#### 简介:手把手教你如何使用proxy与Reflect实现简单的双向数据绑定

- proxy

  - 概述

    正如proxy的"英译代理所示"，proxy是ES6为了操作对象引入的API。它不直接作用在对象上，而是作为一种媒介，如果需要操作对象的话，需要经过这个媒介的同意。

  - 使用方式

    ```js
    /*@params
    ** target:用proxy包装的目标对象
    **handler:一个对象，对代理对象进行拦截操作的函数，如set，get
    */
    let p = new Proxy(target,handler)
    ```

    

  - 常用方法

- Reflect

  - 概述

    与Proxy相同，ES6引入Reflect也是用来操作对象的，它将对象里明显属于语言内部的方法移植到Reflect上，它对某些方法的返回结果进行了修改，使其更加合理，并且使用函数的方式实现了Object的命令式操作

  - 使用方法

    ```
    // 		Reflect.get(target,name,receiver)
    
    ```

  - 常用方法

    - Refelct.has(obj,name)

      是name in obj 指令的函数化， 用于判断对象中是否有某个属性，返回值为布尔值