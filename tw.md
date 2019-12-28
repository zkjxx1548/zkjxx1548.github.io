# TW

**思沃学院**https://school.thoughtworks.cn/learn/auth/login 

反馈https://jinshuju.net/f/YcBAey

# 工具

**ZOOM** https://www.zoomus.cn/download 

# 书籍

1. 《Head First HTML & CSS》入门
2. 《CSS揭秘》扩展学习
3. 《你不知道的JavaScript》微信读书
4. 《图解HTTP》微信读书
5. 搜 css 的属性https://www.zhangxinxu.com/wordpress/

# retro

Well

Less Well

Puzzle

Suggestion

Action

讲师

敏捷

自己的总结

trello

课程设计

工作环境



站会：

学了什么，遇到什么问题

## 2019.11.30

下周讨论课程题量。

题目标注清楚。

重点是MDN文档。

# 体验课

1. MDN文档：https://developer.mozilla.org/en-US/
2. 「我在 ThoughtWorks 中的敏捷实践」：https://www.infoq.cn/article/my-agile-practice-in-thoughtworks
3. 练习小册子：
    英文：https://www.freecodecamp.org/learn
    中文：https://www.freecodecamp.one/
4. 线下体验课作业案例：
   Demo： https://louisbarranqueiro.github.io/hexo-theme-tranquilpeak/
   时间轴：https://tridiamond.me/archives/

# 站会

**成都**https://thoughtworks.zoom.us/j/9657538633

**武汉**https://thoughtworks.zoom.us/my/xinchen

**西安**https://thoughtworks.zoom.us/j/9523364070

## 2019.11.26

* 完成思沃任务卡
* 以后站会轮流主持，并且尽可以简洁。

## 2019.11.28

* 完成前几天的资料整理，上传简书
* 周二课程的作业
* 

# 线上课

## 2019.11.26

***团队协作之Git By 姜玉珍***

Git是目前最先进的分布式版本控制系统 vcs

记录文件内容变化

**版本控制系统：**

* 集中式版本管理系统
  * Central VCS Server
  * 中央挂了就88
* 分布式版本管理系统
  * 哪怕GitHub挂了，A,B也能合并
  * 主要是合并

**Git**

只关心文件数据的整体是否发生变化

单个提交对象在仓库中的数据结构

* commit（40）+tree结构（40）+blob快照（40） +父提交（40）

* 版本库（Repository）

  * 暂存区（stage）

  * 工作区

  * 仓库

    * 本地

      commit后，更新本地

      .gitignore文件夹：系统忽视，不跟踪记录

    * 远端

  * 分支

    * 创建分支时：当前最新版本的指针，拷贝所有文件。

    * 创建后：
    * 指向一个commit

  * 版本回退

    * git log --pretty
    * git reset --hard 40位
    * git reflog

* PS：

  * 40位的安全码字符串（版本名称）
  * merge和rebase基于项目组的规范
  * Git按行跟踪（纯文本）
  * 尽量不版本回退，采取修改后commit新的

* 快捷

  * git add ./

  * git cat-file -p 40位

  * git log

  * git merge：解决代码冲突

    * 初始仓库历史
    * 合并分支形成最新master
    * 生成merge的commit历史，关注点在**真实的提交历史**
    * 两个版本融合成新的版本

  * git rebase：解决代码冲突

    * 初始仓库历史
    * 合并所有的分支，删除分支的
    * 不产生commit历史
    * 优化提交历史，看起来清晰，**忽略真实提交历史**
    * 先融合差异，吸收差异后更新自己的版本

  * git fetch/clone

  * git checkout

  * git pull

  * git add

  * git commit

  * git push

  * 效率：

    * 设置默认的打开路径

    * win下在文件夹里直接用git bash打开

**作业**

1. 实践并总结merge和rebase在pull时的功能，练习，写一篇日志
2. 了解Git的分支管理流程， git flow？

## 2019.11.28

***前端调试及常用工具 By 沈晓梦***

1. PC浏览器调试

   * 选择google浏览器调试的原因
     * 能调试移动端
   * 快捷：
     * ctrl+[
     * ctrl+]
     * ↑↓←→
     * 点击元素，右键
     * 

2. 移动端调试：

   * 本地调试

     * chrome调试

     * 局域网调试
     * vconsole

   * 线上调试：抓包
     * 工具
     * 工具教程

3. 实用工具：
   * 软件：取色器
   * 在线编辑器：CodeSandbox、Stack
   * 浏览器插件：FeHelper

#### 作业

1. 熟悉调试工具
2. 尝试其他浏览器

## 2019.12.03

***马欢欢***

1. 文档流
2. 块级元素
   * 独占一行
3. 内联元素
   * 被内容撑开，宽度跟内容有关
   * padding和margin只有左右
4. relative
   * 脱离文档流，占原坑
5. absolute
   * 没有父级且父级没有定位属性，根据html定位
   * 不占坑
6. fixed
   * 根据视窗
   * 不占坑
7. sticky
   * 暂时会随着动，等到了确定位置后，便不动
   * 脱离文档流，占原坑
8. float
   * 行内文字会环绕，
   * 脱离文档流，不占坑
   * 清除浮动：给下方的块级加clear：left

## 2019.12.05

***马欢欢***

1. left+inline-block+right
2. absolute + margin + absolute
3. flex
4. inline-flex:块变行，并且采用flex
5. span是行内元素
6. flex-wrap
7. justify-content: flex-start\flex-end\center\space-around\space-evenly\space-between
8. space-around\space-evenly:一个是1:1,一个是1：2
9. align-items:stretch:默认值，会撑开/baseline:按文字的基线居中
10. order和flex-grow

## 2019.12.10

***JavaScript编码规范--by姜玉珍***

### 一、代码规范

#### 1、缩进

* 两个空格

#### 2、空行

* 不允许多个空行，最大空行数不允许超过2行。
* 除非逻辑分离

#### 3、空格

* 一元运算符两侧必须有一个空格，一元运算符与操作对象之间不允许有空格
* 关键字后，必须有一个空格
* 对象创建时，`:`之后必须有空格，之前不空格
* 函数声明，具名，方法后不允许有空格
* `;`前不允许有空格
* 在函数调用，函数声明、括号表达式、属性访问等语句中，`()`和`[]`内紧贴括号部分不允许有空格

#### 4、换行

#### 5、语句

### 二、命名

### 三、语言特性

## 2019.12.12

***JavaScript中的函数和作用域By陈鑫***

函数与变量声明提升的优先级：

* 后声明的会覆盖前面声明的函数
* 

作用域链：作用域是分层的，内层的访问外层的。

* 全局作用域：
  1. 最外层函数和最外城函数外面定义的变量
  2. 未定义直接赋值的变量自动声明
  3. ##
* 局部作用域：

## 2019.12.19

***事件冒泡与捕获By姜玉珍***

1. 捕获：从文档的根节点流向目标对象
2. 冒泡：由目标对象回溯到文档根节点
3. 事件：三个阶段，先捕获再目标再冒泡（true和false对目标对象无效）。总是会发生，除非之前有一个事件处理明确规定了停止冒泡。
4. 使用事件代理（document代理）
5. 事件冒泡的好处：
   * 动态加载的过程中，事件重复绑定或者绑定失败的问题
   * 部分事件在move的过程中的bug，如mousemove
   * 有效避免事件处理器的内存泄露或者性能

6. 事件委托和事件代理：同一样东西，一个是事件捕获时的说法，一个是冒泡时的叫法

7. 阻止事件冒泡：

   event.stopPropagation()

   ps：无法在捕获阶段阻止事件冒泡

   何时需要阻止：

   * 防止不同的事件回调函数互相受到影响
   * 文档结构很复杂，需要关闭冒泡来节省系统资源，浏览器总是检查每一个上级元素看是否有时间出发的方法，就算找不到，找的过程也需要消耗资源。

8. 阻止默认事件：

   Event.preventdefault()

   

## 2019.12.26

***《Tasking与Test》By马欢欢***

1. 分模块
2. 语义化
3. 测试：
   * i单个测试
   * x跳过单个

## 一、HTML

初识：

* https://www.jianshu.com/p/a042e03b1c85 

* https://www.tianmaying.com/tutorial/html-kickstart 

进阶：

* https://www.w3school.com.cn/tags/index.asp 

* https://www.w3school.com.cn/html/index.asp 

练习：

* https://www.imooc.com/learn/9 
* https://learn.freecodecamp.one/responsive-web-design/basic-html-and-html5/ 

 浏览器从服务器获取HTML文件，并显示给用户。 

不是一种编程语言，而是一种标记语言 (markup language) ，是一套标记标签。

标签：

* 常规元素
* 空元素

### grid学习

display：grid

grid-template-columns:添加列。

grid-template-rows:添加行。

网格单位：

px

em

fr：设置列或行占剩余空间的一个比例，

auto：设置列宽或行高自动等于它的内容的宽度或高度，

%：设置列宽或行高自动等于它的内容的宽度或高度，

grid-column-gap：列间距

grid-row-gap:

grid-gap:

grid-column:控制网格列大小，以线为基准，写法：`1 / 3`

grid-row

# 周六线下

## 2019.11.30

通用选择器

大盒子设具体宽度，里面小盒子设百分比，块级元素自动充满

颜色属性，transparent，继承父元素，扩展性更高。

小图标可以用新标签标注出来，使用伪类

`<i>`

不在标签上直接修改样式

### 多行溢出省略的7种实现方式

1. **-webkit**：单行和多行分开用，兼容性问题，padding问题，响应布局好。**box**布局

2. **Fade+out**：padding问题
3. css伪元素：兼容性好
4. Float定位实现
5. Clamp.js
6. ftellipsis.js
7. Break the Game
8. CSS3？W3C

### 作业批改总结：

1. 行内块元素
2. zoom
3. 初始化浏览器，margin
4. calc计算宽高
5. 两列的四种布局：flex  margin-left absolute calc
6. 三列的布局：float
7. 多使用继承
8. 布局上，多使用flex布局（先掌握），参考著名的电商网站，兼容性好

## 2019.12.08

1. body:默认 + main：固定，尽量百分比
2. 标签语义化，换行用p
3. 《css解密》有三角形渐变的教程
4. 透明度：opacity
5. cursur
6. position:relative :不适合用作设置偏移
7. 导航栏ul-li-a，不是ul-a-li
8. 选择定位，优先给父元素
9. 内容相关的要放在一个盒子里
10. **先布局，最好画出来**
11. float和flex
12. 淘宝网站
13. rem/em
14. 对于feedback的处理要及时
15. fit-content的兼容性不好
16. 不用考虑是否为矩形
17. 先声明方法，在放.js
18. 函数柯里化（curry）
19. 输入输出(完成主体逻辑部分即可)
    * 输入: var x = []
    * 输出: console.log()
20. 理论题多谈自己的想法

## 2019.12.21

1. ajax的send的跨域问题
2. dom2的
3. 排序：
   * bubbleSort
   * quickSort
   * insertSort

## 2019.12.28

### dom2-shoppingcar

1. 使用caption，thead，tbody等提高语义化
2. 每次变动都全局刷新渲染，资源消耗大
3. 函数命名
   * 渲染
   * 设置按钮的监听，可以用：addEvent的命名


4. input里面的checked用boolean判断是否预选

   ```
   if (input.checked === true)
   	console.log("预选");
   if (input.checked === false)
     console.log("未预选");
   ```

   

### todolist

1. 缓存存一个数组key，每次操作数组去使用数据。
2. 数据存的是dom，导致结构复杂
3. key里面的对象的状态属性名为complete，值为布尔值。

### ajax

1. 创建顺序

2. sucess传入的是JSON

3. 路径上传参？

4. JSON与字符串转化

   JSON.parse(text):将JSON字符串转化为JS对象。

   JSON.stringify(obj):将JS对象转化为JSON字符串。

5. 关于xhr的status状态的值

# 效率

## 一、vsc

1. 标签：
   * 直接写标签名，如`div`，`idel`自动补齐
   * 加类名则后跟`.类名`，如`div.类名`

## 二、作业

实战题+关键字+博客copy+F12



https://zoom.com.cn/j/906610602?pwd=UzB6Mjk2c0xpT0IWL2hRNUhMRHIxdz09

# 通知

* 2020.1.11进行面试，现场代码



