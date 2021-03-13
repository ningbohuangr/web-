### Map与WeakMap解构的特点

#### 简介：详细介绍Map与WeakMap解构的特点

- 背景

- JavaScript中的对象，实质是键值对的集合(Hash结构),但是在对象里却只能用字符串作为键名。在一些特定的场景里就不满足我们的需要了，正因如此，map这已数据提出了，它是JavaScript中的一种更完善hash结构

- Map对象

  - 用于保存键值对，任何(对象或者原始值)都可以作为一个键或一个值

  - 使用介绍

    ```
    //通过构造函数创建一个Map
    var m =new Map();
    ```

- 内置API

  | 属性方法       | 作用                                          | 列子             |
  | -------------- | --------------------------------------------- | ---------------- |
  | size           | 返回键值对的数量                              | m.size           |
  | clear()        | 清除所有键值对                                | m.clear()        |
  | has(key)       | 判断键值对中是否有指定的键名,返回值是布尔值   | m.has(key)       |
  | get(key)       | 获取指定键名的键值队，如不存在则返回undefined | m.get(key)       |
  | set(key,value) | 添加键值对，如键名已存在，则更新键值对        | m.set(key,value) |
  | delete(key)    | 删除指定键名的键值对                          | m.delete(key)    |

  - 遍历生成函数
    - keys
    - value
    - enteries

  - 遍历方法
    - forEach

- WeakMap

  - 键名必须是对象
  - WeaMap对键名是弱引用的，键值是正常引用
  - 垃圾回收不考虑WeaMap的键名，不会改变引用计数器，键在其他地方不被引用时即删除
  - 因为WeakMap 是弱引用，由于其他地方操作成员可能会不存在，所以不可以进行forEach( )遍历等操作
  - 也是因为弱引用，WeaMap 结构没有keys( )，values( )，entries( )等方法和 size 属性
  - 当键的外部引用删除时，希望自动删除数据时使用 WeakMap