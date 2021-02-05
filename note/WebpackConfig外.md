# webpack目录分析

该文件讲述的webpack.config.js外其余文件的功能

# src --源码目录

* components --公共组件（可复用）
* jqComponents --自定义jquery方法$.fn
* locales --初始化数据
* page --页面文件夹
* public --静态资源
* scss --样式
  * index --样式入口
  * components --组件样式
  * page --页面样式
  * variables --样式变量入口
  * reset --初始化样式
* service --请求配置文件（请求封装）
* util --工具js文件（公共方法，可复用）
* index --js文件入口（components，page...）
* typings --类型js文件夹（定义对象接口）
# .editorconfig --统一代码风格文件
# .eslintignore --ESLint 忽略特定的文件和目录配置
# .eslintrc --ESLint规则配置
放在项目根目录，则会应用到整个项目；
如果子目录中也包含 .eslintrc 文件，则子目录会忽略根目录的配置文件
# .gitignore --git忽略特定的文件和目录配置
# .stylelintrc --css规则配置
# commitlint.config.js --commit规则配置
一个文本文件，它包含了 Jenkins 流水线的定义并被检入源代码控制仓库
# package.json
定义了这个项目所需要的各种模块，以及项目的配置信息（比如名称、版本、许可证等元数据）。
npm install命令根据这个配置文件，自动下载所需的模块，配置项目所需的运行和开发环境。
# postcss.config.js --postCss配置（配置插件）
postCss 将我们的css代码转为抽象语法树后，我们可以使用各种的插件去实现各种的功能，最后会转化为字符串输出到一个文件中。这里的插件可以是已存在的插件，也可以是按自己需要自己定制的插件。
# README --项目介绍
# tsconfig.json --ts配置文件
compilerOptions配置编译选项
files
include指定待编译文件
# yarn.lock
yarn.lock 文件是在安装期间，由 Yarn 自动生成的，并且由yarn来管理，不应该手动去更改，更不应该删除yarn.lock文件，且要提交到版本控制系统中，以免因为不同机器安装的包版本不一致引发问题。
依赖的更多版本的信息