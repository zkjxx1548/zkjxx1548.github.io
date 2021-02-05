# 命令

## npm init

生成package.json的两种方式

命令用来初始化一个简单的 `package.json` 文件，执行该命令后终端会依次询问 `name`, `version`, `description` 等字段

可以追加 --yes，避免回车

### 自定义 npm init 行为

#### 原理

调用shell脚本，输出初始化的package.json文件。

#### 自定义

在电脑 `npmStudy` 目录创建一个 `.npm-init.js` 即可，该文件的 `module.exports` 即为 `package.json` 配置内容，需要获取用户输入时候，使用 `prompt()` 方法即可

## 依赖包

dependenices 和 devDependenices

> 从`npm 5.x`开始，可以不用手动添加`-S/--save`指令，直接执行`npm i packageName`把依赖包添加到`dependencies`中去。

devDependenices只在本地install的时候才被安装和管理

- `-D` 会添加到 `devDependencies` 里面，`-S` 会添加到 `dependencies`
- `--save-dev` 也会添加到 `devDependencies`
- `--save` 会添加到 `dependencies`
- 从`npm 5.x`开始，如果什么参数都不带，那么默认添加到 `dependencies` 中

## bin

字段指定了各个内部命令对应的`可执行文件`的位置。如果全局安装模块报，`npm` 会使用符号链接把可执行文件链接到 `/usr/local/bin`，如果项目中安装，会链接到 `./node_modules/.bin/`。

## main

属性指定程序的主入口文件，其他项目在引用这个 `npm` 包时，实际上引入的是 `lib/index` 中暴露出去的模块。

## npm script

在生成的 `package.json` 文件中，有一个 `scripts` 对象，在这个对象中，`npm` 允许使用 `scripts` 字段定义脚本命令。

### 原理

执行时，系统都会自动新建一个shell(一般是Bash)，在这个shell里面执行指定的脚本命令。因此 **凡是能在 shell 中允许的脚本，都可以写在npm scripts中。**

> 特别的点，`npm run 新建的 shell`，会在当前目录的 `node_modules/.bin` 子目录加入到 PATH 变量，执行结束后，再将 PATH 变量恢复原样。也就是说，当前项目目录 `node——modules/.bin` 子目录中所有的脚本，都可以直接用脚本名称调用，不需要增加路径.（简单总结：通过 npm 启动的脚本，会默认把 `node_modules/.bin` 加到 PATH 环境变量中。）

### 脚本默认值

- `npm run start` 的默认值是 `node server.js` ，前提是根目录下有 `server.js` 这个脚本
- `npm run install` 的默认值是 `node-gyp rebuild`，前提是根目录下有 `binding.gyp` 文件

- node-gyp：`node` 下的 `gyp`。解决跨平台的问题。`node-gyp` 是用来编译原生 `C++` 模块的，也可以编写自己写的 `C++`文件，`node-gyp` 在较新的 `Node` 版本中都是自带的，而且是最先版本。
- gyp 文件：当 `Node.js` 项目中有需要和 `C++` 交互的需求时，项目的根目需要创建 `binging.gyp` 文件，每个`.gyp` 文件都描述了如何去构建项目，每个.gyp文件都描述了如何去构建项目，gyp文件的语法是 `Python`数据格式(Json格式)，配置中数据是`键-值对`的形式。

### 钩子

两个钩子， pre和post，可以做一些准备和清理工作

如start： 

`npm run prestart && npm run start && npm run poststart`

> 钩子好用，但是不可乱用，举个开发过程中遇到的坑，有一次想设置运行时的环境变量，当时想优雅一点，就在 `prestart` 里面设置了一个环境变量，但是在项目 `start` 的时候，无法拿到设置的环境变量，因为 `script` 的属性运行的时候都会新启动一个 `shell`，所以在 `prestart`中设置的环境变量只对应了那个`shell`的运行时。

### env

Package.json里所有字段：npm_package_

npm 相关的所有配置：npm_config_

正在运行的脚本名称：npm_lifecycle_event

> 强调：这些环境变量只能在 `npm run` 的脚本执行环境内拿到，正常执行的 node 脚本是获取不到的。所以，不能直接通过 `env $npm_package_name` 的形式访问，但可以在 scripts 中定义脚本`"scripts": {"bundle": "echo $npm_package_name"}`来访问。

小技巧

1. npm run env  列出所有环境变量

2. echo PATH    shell脚本中输出环境变量

3. echo PATH = /usr/local/lib  在 shell 脚本设置环境变量

4. 有的时候我们需要设置的环境变量是相对项目的 再补充一个shell脚本中设置环境变量时候如何拼接相对路径

   echo PATH = ${pwd}/lib/include  //使用${},也可以直接使用双引号

### 脚本传入参数

`node` 处理 `scripts` 中的参数，除了**属性后面的第一个命令，以空格分割的任何字符串(除特别shell语法)都是参数**，并且都能通过 `process.argv` 属性访问。

> `process.argv` 属性返回一个数组，数组包含了启动 `node` 进程时的命令行参数。第一个元素为启动 `node` 进程的可执行文件的绝对路径名 `process.execPath`,第二个元素为当前执行的 `jacascript` 文件路径。**剩余的元素为其他命令行参数。**

### 执行顺序

& 并行

&& 串行

### 任意脚本

因为交给 `shell` 去解释执行的，说明配置的脚本可以是任意能够在 `shell` 中运行的命令，而不仅仅是 `node` 脚本或者 `js` 代码

## npm 配置

### npm config

+ ls -l：查看 npm 的所有配置，包括默认配置

我们使用相关的常见重要配置:

- `proxy, https-proxy`: 指定 npm 使用的代理
- `registry` 指定 `npm` 下载安装包时的源，默认为 `https://registry.npmjs.org/` 可以指定为私有 `Registry` 源
- `package-lock` 指定是否默认生成 `package-lock` 文件，建议保持默认 true
- `save true/false` 指定是否在 `npm install` 后保存包为 `dependencies`, `npm 5` 起默认为 `true`

删除指定的配置项命令为 `npm config delete <key>`.

这里最常见的一个操作是 `npm` 太慢，设置淘宝镜像

> npm config set registry https://registry.npm.taobao.org

恢复使用之前的 `npm`

> npm config set registry https://registry.npmjs.org

### env环境变量（更改npm配置一）

如果`env`环境变量中存在以`npm_config_`为前缀的环境变量，则会被识别为`npm`的配置属性。（*修改的是内存中的变量，只对当前终端有效*）

查看某个环境变量：echo $NODE_ENV 删除某个环境变量：unset NODE_ENV

### npmrc文件（更改npm配置二）

可以通过 `npmrc` 文件直接修改配置

这样的 `npmrc` 文件优先级由高到低包括：

- 工程内配置文件: `/path/to/my/project/.npmrc`
- 用户级配置文件: `~/.npmrc`
- 全局配置文件: `$PREFIX/etc/npmrc` (即npm config get globalconfig 输出的路径)
- npm内置配置文件:`/path/to/npm/npmrc`

因为项目级 `.npmrc` 文件的作用域只在本项目下，所以在非本目录下，这些配置并不生效。对于使用笔记本工作的开发者，可以很好地隔离公司的工作项目、在家学习研究项目两种不同的环境。

将这个功能与 `~/.npm-init.js` 配置相结合，可以将特定配置的 `.npmrc` 跟 `.gitignore`, `README` 之类文件一起做到 `npm init` 脚手架中，进一步减少手动配置。

## npm 包发布

### 规范的npm模块目录

一个 node.js 模块是基于 CommonJS 模块化规范实现的，严格按照 CommonJS 规范，模块目录下除了必须包含包描述文件 package.json 以外，还需要包含以下目录：

- bin：存放可执行二进制文件的目录
- lib：存放js代码的目录
- doc：存放文档的目录
- test：存放单元测试用例代码的目录

### 如何写Readme

> https://www.zhihu.com/question/29100816

### 如何发布npm包

1. 先去 npm 注册个账号，然后在命令行使用

```
npm adduser #根据提示输入用户名密码即可
```

1. 使用命令发布你的包

> 在推送之前，可以通过配置一个 `.npmignore` 文件来排除一些文件, 防止大量的垃圾文件推送到 `npm`, 规则上和你用的 `.gitignore` 是一样的。`.gitignore` 文件也可以充当 `.npmignore` 文件

```
npm publish
```

1. 发布成功之后，你就可以像下载安装其他包一样使用你自己的开发工具了

```
npm install koalanpmstudy
```

#### 关于 npm 包的更新

更新 npm 包也是使用 npm publish 命令发布，不过必须更改 npm 包的版本号，即 package.json 的 version 字段，否则会报错，同时我们应该遵 **Semver**(语义化版本号) 规范，npm 提供了 npm version 给我们升级版本

```
# 升级补丁版本号
$ npm version patch

# 升级小版本号
$ npm version minor

# 升级大版本号
$ npm version major
```

### 本地开发的npm包的调试

在本地开发的模块包的时候，可以使用 `npm link` 调试，将模块链接到对应的运行项目中去，方便地对模块进行调试和测试。具体使用步骤如下

- 假如我的项目是 `koalaNpmStudy`，假如我的 npm 模块包名称是 `npm-ikoala`
- 进入到 模块包 `npm-ikoala` 目录中，执行 `npm link`
- 在自己的项目 `koalaNpmStudy` 中创建连接执行 `npm link npm-ikoala`
- 在自己项目的 `node_module` 中会看到链接过来的模块包，然后就可以像使用其他的模块包一样使用它了。
- 调试结束后可以使用 `npm unlink` 取消关联

> `npm link` 主要做了两件事：
>
> 1. 为目标 `npm` 模块创建软链接，将其链接到全局 `node` 模块安装路径 `/usr/local/lib/node_modules/`。
> 2. 为目标 `npm` 模块的可执行 `bin` 文件创建软链接，将其链接到全局 `node` 命令安装路径 `/us`