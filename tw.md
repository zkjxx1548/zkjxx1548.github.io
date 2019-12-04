# TW

**思沃学院**https://school.thoughtworks.cn/learn/auth/login 

反馈https://jinshuju.net/f/YcBAey

# 工具

**ZOOM** https://www.zoomus.cn/download 

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

# 思沃学院

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

## 2019.12.07



# 效率

## 一、vsc

1. 标签：
   * 直接写标签名，如`div`，`idel`自动补齐
   * 加类名则后跟`.类名`，如`div.类名`

## 二、作业

实战题+关键字+博客copy+F12

