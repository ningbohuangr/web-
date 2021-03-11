### CSS扩展高级知识点之BFC

#### 简介：讲解什么是BFC

- MDN解释
  - 块格式化上下文(Block Flormatting Contentext,BFC) 是web页面的可视化CSS渲染的一部分，是块盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。
- 通俗的解释
  - 形成了一块封闭的区域，能检测到区域内脱离文档流的元素
- 作用
  - 清除浮动带来的影响
  - 解决边距塌陷问题()
    - 浮动元素不会与任何元素发生叠加，也包括它的子元素
    - 创建了BFC的元素不会和它的子元素发生外边距叠加
    - 绝对定位元素和其他任何元素之间不发生外边距叠加，也包括它的子元素
    - inline-block元素和其他任何元素之间不发生外边距叠加，也包括它的子元素
    - 普通流中的块级元素的margin-bottom永远和它相邻的下一个块级元素的margin-top叠加，除非相邻的兄弟元素clear
    - 普通流中的块级元素（没有border-top、没有padding-top）的margin-top和它的第一个普通流中的子元素（没有clear）发生margin-top叠加
    - 普通流中的块级元素（height为auto、min-height为0、没有border-bottom、没有padding-bottom）和它的最后一个普通流中的子元素（没有自身发生margin叠加或clear）发生margin-bottom叠加
    - 如果一个元素的min-height为0、没有border、没有padding、高度为0或者auto、不包含子元素，那么它自身的外边距会发生叠加