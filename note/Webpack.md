# 定义

1. js打包工具，资源模块化
2. 代码分割特性：`code splitting`:项目只加载需要的模块。
3. `loader`：模块通过`loader`处理各种文件，包括`Commn JS`,`AMD`,`ES6`,`CSS`,`Image`,`JSON`，自定义文件等

## 作用

1. 将各种文件打包成浏览器可以识别的`.js`,`.png`,`.css`,`.jpg`

## 目标

1. 依赖树切分在不同代码块里面（懒加载）
2. 保持初始化的加载时间更少
3. 任何静态资源都可以视为一个模块
4. 整合第三方内库
5. 可以自定义
6. 适用于大型项目

## 优点

1. 代码分割
2. loader
3. 插件系统，模块热更新

## 安装

1. 创建文件夹

2. 在文件夹目录 `npm init`

3. `npm install webpack -g`

4. `npm install webpack --save-dev`

5. 使用`webpack -v`查看版本

6. 如果出现

   ```
   One CLI for webpack must be installed. These are recommended choices, delivered as separate packages:
   ```

   使用`npm install webpack-cli -g`

   再`npm install webpack -D`

7. 打包 `webpack （打包的.js）（ 打包出来的.js文件名）`

8. 出现

   ```
   ERROR in multi ./hello.js hello.bundle.js
   Module not found: Error: Can't resolve 'hello.bundle.js' in '/Users/kangjian.zhou/Desktop/webpack-test'
    @ multi ./hello.js hello.bundle.js main[1]
    // 版本过高
   ```

   使用`webpack （打包的.js）-o（ 打包出来的.js文件名）`

9. 出现黄色警告：

   ```
   WARNING in configuration
   The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
   You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/
   // 因为webpack4引入了模式,有开发模式,生产模式,无这三个状态,然后我们没有设置模式，找到package.json.添加上"dev"和"build"这两个信息以及他们的值.
   
   "scripts": {
     "test": "echo \"Error: no test specified\" && exit 1",
     "dev": "webpack --mode development", //输出没压缩文件
     "build": "webpack --mode production" //输出压缩后的文件
   }
   ```

10. 新建src文件和dist文件

    dist：存放打包文件

    在src文件里创建index.js

11. 执行`npm run dev`

    dist里面会有一个main.js文件，存放打包后的index.js的代码



# 报错

1. 文件太大，没有压缩

   报错：

   ```
   Error: html-webpack-plugin could not minify the generated output.
     In production mode the html minifcation is enabled by default.
     If you are not generating a valid html output please disable it manually.
     You can do so by adding the following setting to your HtmlWebpackPlugin config:
     |
     |    minify: false
     |
   ```

   解决：

   ```
    config.plugins.push(
       new HtmlWebPackPlugin({
         alwaysWriteToDisk: true,
         filename: path.resolve(dist, path.basename(file).replace(/.hbs$/, '.html')),
         template: file,
         minify: false,// 在这里加
   ```

   

# webpack.config.js





# module，chunk 和 bundle

同一份逻辑代码在不同转换场景下的取了三个名字
module：源码
chunk：webpack处理时
bundle：生成的浏览器可以直接运行
# hash、chunkhash、contenthash
hash：是跟**整个项目**的构建相关，只要项目里有文件更改，整个项目构建的hash值都会更改，并且全部文件都共用相同的hash值。
chunkhash：跟**入口文件**的构建有关，根据入口文件构建对应的chunk，生成每个chunk对应的hash；入口文件更改，对应chunk的hash值会更改。
contenthash：跟**文件内容本身**相关，根据文件内容创建出唯一hash，也就是说文件内容更改，hash就更改。

# entry --入口
  * 单模块
  ```
  entry: './index.js',
  ```
  * 多模块（数组）
  ```
  entry: [
        //模块1
        './src/module1.js',
        //模块2
        './src/module2.js', 
        //模块3
        './src/module3.js'
    ],
  ```
  * 分开打包，对象形式，如分页面打包
  ```
  entry: {
        home: './src/home.js',
        login: './src/login.js',
        detail: ['./src/detail.js', './src/common.js'],
  },
  ```
# output --输出
定义如何输入编译后的文件模块；
多个entry，只能配置一个output
## filename
* 单模块
```
output: {
    filename: 'xxx.js',
},
```
* 多模块
需要占位符，否则webpack会提示`Conflict: Multiple chunks emit assets to the same filename`，即多个文件资源有相同的文件名称；
```
output: {
    filename: '[name].js',
},
```
### 占位符
* [hash]	模块标识符(module identifier)的 hash
* [chunkhash]	chunk 内容的 hash
* [name]	模块名称
* [id]	模块标识符
* [query]	模块的 query，例如，文件名 ? 后面的字符串
## path --输出路径
```
output: {
    path: path.resolve(__dirname, 'xxx'), //必须使用绝对地址，输出xxx文件夹
},
```
# 模式（webpack4提供）
开发模式,打包出来的内容要对开发友好，便于代码调试以及实现浏览器实时更新
```
mode: 'development',
mode: 'production',
```
# 插件
## clean-webpack-plugin
用于在打包前清理上一次项目生成的bundle文件，它会根据output.path自动清理文件夹；
在生产环境用的频率非常高，因为生产环境经常会通过hash生成很多bundle文件，如果不进行清理的话每次都会生成新的，导致文件夹非常庞大；
```
// 安装
npm i -D clean-webpack-plugin
// 调用
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    //其他配置
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: 'index.html',
        })
    ]
}
```
## mini-css-extract-plugin
比如开发通过style-loader插入到页面中去，
而生产环境需要单独抽离样式文件，该插件可以从js中剥离样式
```
// 安装
npm i -D mini-css-extract-plugin
// 调用
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    //其他配置
    module: {
        rules: [
            {
                test: /\.less/,
                use: [{
                    loader: isDev ? 'style-loader' : MiniCssExtractPlugin.loader
                },{
                    loader: 'css-loader'
                },{
                    loader: 'less-loader'
                }]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].[hash:8].css",
        })
    ]
}
```
需要引入loader。
## optimize-css-assets-webpack-plugin
mode配置为生产，仅压缩js
该插件可以压缩css
```
// 安装
npm i optimize-css-assets-webpack-plugin -D
// 调用
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
module.exports = {
    //其他配置
    plugins: [
        new OptimizeCSSAssetsPlugin(),
    ]
}
```
## copy-webpack-plugin
打包时webpack并不会将静态资源拷贝到dist目录，
该插件可以拷贝
```
// 安装
npm i -D copy-webpack-plugin
// 调用
const CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    plugins: [
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'public/js/*.js',
                    to: path.resolve(__dirname, 'dist', 'js'),
                    flatten: true,
                }
            ]
        }),
    ]
}
```
需要配置拷贝的源路径和目标路径
## ProvidePlugin
该插件可以很快的加载想要引入的模块，而不用require。
如：加载jQuery需要先import
```
module.exports = {
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
    ]
}
```
这样能够不用import，直接使用$。
但是在项目中引入了太多模块而没有require会很迷惑。
建议加载一些常见的比如jQuery、vue、lodash等。
## CommonsChunkPlugin
抽取共同代码
```
module.exports = {
//...
  output: {
    path: path.join(__dirname, 'dist'),
    // 既然我们希望缓存生效，就应该每次在更改代码以后修改文件名
    // [chunkhash]会自动根据文件是否更改而更换哈希
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
    // vendor 的意义和之前相同
    // manifest文件是将每次打包都会更改的东西单独提取出来，保证没有更改的代码无需重新打包，这样可以**加快打包速度**
      names: ['vendor', 'manifest'],
      // 配合 manifest 文件使用
      minChunks: Infinity
    })
  ]
};
```
## HtmlWebpackHarddiskPlugin
文件分开打包后生成多个 JS 了，每次新增 JS 文件我们都需要手动在 HTML 中新增标签，
该插件可自动完成这个功能
```
// 安装
npm install html-webpack-plugin --save-dev
// 配置
module.exports = {
//...
  plugins: [
  // 我们这里将之前的 HTML 文件当做模板
  // 注意在之前 HTML 文件中请务必删除之前引入的 JS 文件
    new HtmlWebpackPlugin({
      template: 'index.html'
    })
  ]
};
```
## HashedModuleIdsPlugin
该插件会根据模块的相对路径生成一个四位数的hash作为模块id, 建议用于生产环境。
```
new webpack.HashedModuleIdsPlugin({
  hashFunction: 'sha256',
  hashDigest: 'hex',
  hashDigestLength: 20
})
```
## PreloadWebpackPlugin
能方便的给编译的html文件添加相关资源的preload和pretch
这个插件的作用是向html中注入<link rel='preload|prefetch'> 标签，从而到达优化页面静态资源预加载的功能，而且支持异步的chunk。此插件必须配合html-webpack-plugin插件使用，而且配置的时候紧跟其后，下面是一个简单的配置：
```
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
  plugins: [
  	new HtmlWebpackPlugin(),
  	new PreloadWebpackPlugin()
	]
]
```
## CssUrlRelativePlugin

# loader和plugin的区别
loader：由于webpack只能识别js，loader相当于翻译官的角色，帮助webpack对其他类型的资源进行转译的预处理工作。
plugins：plugins扩展了webpack的功能，在webpack运行时会广播很多事件，plugin可以监听这些事件，然后通过webpack提供的API来**改变输出结果**。
# Babel
可以让你使用 ES2015/16/17 写代码而不用顾忌浏览器的问题，可以帮你转换代码
* babel-loader 用于让 webpack 知道如何运行 babel
* babel-core 可以看做编译器，这个库知道如何解析代码
* babel-preset-env 这个库可以根据环境的不同转换代码
```
// 安装
npm i --save-dev babel-loader babel-core babel-preset-env
// 调用
module.exports = {
// ......
    module: {
        rules: [
            {
            // js 文件才使用 babel
                test: /\.js$/,
             // 使用哪个 loader
                use: 'babel-loader',
            // 不包括路径
                exclude: /node_modules/
            // 配置babel
                options: {
                    "presets": ["babel-preset-env"]
                }
            }
        ]
    }
}
```
# 处理图片
* url-loader
* file-loader
```
// 安装
npm i --save-dev url-loader file-loader
// 配置
module.exports = {
// ...
    module: {
        rules: [
            // ...
            {
            // 图片格式正则
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: [
                  {
                    loader: 'url-loader',
                    // 配置 url-loader 的可选项
                    options: {
                    // 限制 图片大小 10000B，小于限制会将图片转换为 base64格式
                      limit: 10000,
                    // 超出限制，创建的文件格式
                    // build/images/[图片名].[hash].[图片格式]
                      name: 'images/[name].[hash].[ext]'
                   }
                  }
                ]
            }
        ]
    }
  }
```
# 自动刷新
方便debug
```
// 安装
npm i --save-dev webpack-dev-server
// 配置（package.json）
"scripts": {
    "build": "webpack",
    "dev": "webpack-dev-server --open"
  },
```