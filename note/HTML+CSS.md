# HTML

>  一种用于组织页面内容的标记语言，不是编程语言

## 原理

1. load
2. parse
3. create DOM Tree
4. Create Render Tree
5. Display

## 实现

### 划分结构

1. 上下左右
2. 语义话标签
   * header
   * main
   * aside
   * footer
   * section
   * article
   * nav
   * figure: 图片
   * figcaption：图片文字介绍
3. 

# CSS

>  一种用于指定文档样式的样式语言

## 原理

1. 在parse html时加载（link在body前）=> load
2. parse
3. create CSSOM Tree
4. 与html共同生成Render Tree

## 实现

### 类型

1. 类型
2. 通配
3. 类
4. ID
5. 标签属性
6. 伪类：一个选择处于特定状态的元素的选择器 Pseudo-classes
   * `:focus`
   * `:target`
   * `:enabled`
   * `:disabled`
   * `:checked`
   * `:required`
   * `:acttive`
   * `:link`
   * 
7. 伪元素
8. 后代
9. 子代： >