### Set与WeakSet结构的特点

- 介绍

  Set是ES6给开发者提供一种类似数组的数据结构,可以理解为值的集合,它和数组的最大区别就在于：它的值不会有重复项，

- 基本使用

  ```
  //创建
  let set=new Set();
  let set2 = new Set([1,2,3])
  
  //添加元素
  set.add()
  ```

- 特点

  - 成员的值唯一

- 属性及方法

  | 属性/方法     | 作用                                    | 列子          |
  | ------------- | --------------------------------------- | ------------- |
  | size()        | 返回成员个数                            | s.size        |
  | clear()       | 清除所有成员                            | s.clear()     |
  | has(value)    | 判断键值对中是否有指定的值,返回是布尔值 | s.has(key)    |
  | delete(value) | 删除指定值                              | s.delete(key) |

- 用途

  ```
  //去重
  let arr =[1,2,2,3,4,4,4]
  let a=new Set(arr)
  //结果：{1，2，3，4}
  let newArr=Array。form(s);
  //结果：[1,2,3,4]完成去重
  ```

- weakSet

  - 数组成员必须是对象
  - WeakSet结构也提供了add()方法，delet(）方法，has方法给开发者使用，作用与用法跟Set结构完全一致
  - weakSet结构不可遍历，因为它的成员都是对象的弱引用，随时被回收机制回收，成员消失，所以WeakSet结构不会有keys(),value(),enties(),forEach(）等方法和size属性。