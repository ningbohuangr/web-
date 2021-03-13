### JS的数据结构中统一的遍历接口iterator和for...of循环

#### 简介：介绍什么是iterator及其作用和与for...of循环

- 什么是iterator

  iterator遍历器是一种接口，目的是为了给不同的数据结构提供统一的循环方式，任何数据结构如果部署了iterator接口，就能够实现遍历操作。

- iterator的作用

  - 为不同的数据结构，提供一个统一的，简便的访问接口
  - 为了数据成员按照一定顺序输出
  - 提供给es6中的for of这个语句循环进行使用

- 什么结构具备原生的iterator

  - Array
  - String
  - Set
  - Map
  - 函数的argument对象

- 默认的iterator接口

  - Symbol.iterator

    - 本质

      是一个函数，就是当前数据集合默认的遍历器生成函数，执行这个函数，就返回一个遍历器。

    - 返回值

      - 返回一个遍历器对象。这个对象的显著特点就是有一个next()方法，每次调用next都会返回一个描述当前成员的信息对象，具有value和done两个属性