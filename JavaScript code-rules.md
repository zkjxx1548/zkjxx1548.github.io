# JavaScript 编码规范

### 一、代码风格



#### 1、缩进



- 强制使用一致的缩进（`2` 个空格，不允许出现 `4` 个空格，禁止使用 `tab` 进行缩进）；

```
// good
function hello(indentSize, type) {
  if (indentSize === 2 && type !== 'tab') {
    console.log('Each next indentation will increase on 2 spaces');
  }
}

// bad
function hello(indentSize, type) {
    if (indentSize === 4 && type !== 'tab') {
        console.log('Each next indentation will increase on 4 spaces');
    }
}
```

- `switch` 下的 `case` 和 `default` 必须增加一个缩进层级；

```
// good
switch (variable) {
  case '1':
    // do...
    break;
    
  case '2':
    // do...
    break;
    
  default:
  // do...
}

// bad
switch (variable) {
case '1':
    // do...
    break;

case '2':
    // do...
    break;

default:
    // do...
}
```



#### 2、空行



- 不允许多个空行，最大空行数不允许超过 `2` 行；

> 空白对于分离代码代码段逻辑是有帮助的，有时候可以提高代码的可读性；但过量的空白会占用更多的屏幕。

```
// good
var foo = 5;

var bar = 3;

// bad
var foo = 5;



var bar = 3;
```



#### 3、空格



- 二元运算符两侧必须有一个空格，一元运算符与操作对象之间不允许有空格；

```
var a = !arr.length;
a++;
a = b + c;
```

- 用作代码块起始的左花括号 `{` 前必须有一个空格；

```
// good
if (condition) {
}

while (condition) {
}

function funcName() {
}

// bad
if (condition){
}

while (condition){
}

function funcName(){
}
```

- `if / else / for / while / function / switch / do / try / catch / finally` 关键字后，必须有一个空格；

```
// good
if (condition) {
}

while (condition) {
}

(function () {
})();

// bad
if(condition) {
}

while(condition) {
}

(function() {
})();
```

- 在对象创建时，属性中的 `:` 之后必须有空格，`:` 之前不允许有空格；

```
// good
var obj = {
    a: 1,
    b: 2,
    c: 3
};

// bad
var obj = {
    a : 1,
    b:2,
    c :3
};
```

- 函数声明、具名函数表达式、函数调用中，函数名和 `(` 之间不允许有空格；

```
// good
function funcName() {
}

var funcName = function funcName() {
};

funcName();

// bad
function funcName () {
}

var funcName = function funcName () {
};

funcName ();
```

- `,` 和 `;` 前不允许有空格；

```
// good
var a, b;
callFunc(a, b);

// bad
var a , b ;
callFunc(a, b) ;
```

- 在函数调用、函数声明、括号表达式、属性访问、`if / for / while / switch / catch` 等语句中，`()` 和 `[]` 内紧贴括号部分不允许有空格；

```
// good

callFunc(param1, param2, param3);

save(this.list[this.indexes[i]]);

needIncream && (variable += increament);

if (num > list.length) {
}

while (len--) {
}


// bad

callFunc( param1, param2, param3 );

save( this.list[ this.indexes[ i ] ] );

needIncreament && ( variable += increament );

if ( num > list.length ) {
}

while ( len-- ) {
}
```

- 单行初始化的数组与对象，如果包含元素，`{}` 和 `[]` 内紧贴括号部分不允许包含空格；

> 初始化包含元素的数组与对象，只有当内部元素的形式较为简单时，才允许写在一行。元素复杂的情况，还是应该换行书写。

```
// good
var arr1 = [];
var arr2 = [1, 2, 3];
var obj1 = {};
var obj2 = {name: 'obj'};
var obj3 = {
    name: 'obj',
    age: 20,
    sex: 1
};

// bad
var arr1 = [ ];
var arr2 = [ 1, 2, 3 ];
var obj1 = { };
var obj2 = { name: 'obj' };
var obj3 = {name: 'obj', age: 20, sex: 1};
```

- 行尾不得有多余的空格；

```
// good
var foo = 0;
var baz = 5;

// bad
var foo = 0;//•••••
var baz = 5;//••
```



#### 4、换行



- 每个独立语句结束后必须换行；
- 每行不得超过 `120` 个字符；超长的不可分割的代码允许例外，如复杂的正则表达式；
- 运算符处换行时，运算符必须在新行的行首；

```
// good
if (user.isAuthenticated()
  && user.isInRole('admin')
  && user.hasAuthority('add-admin')
  || user.hasAuthority('delete-admin')
) {
  // Code
}

var result = number1 + number2 + number3
  + number4 + number5;


// bad
if (user.isAuthenticated() &&
  user.isInRole('admin') &&
  user.hasAuthority('add-admin') ||
  user.hasAuthority('delete-admin')) {
  // Code
}

var result = number1 + number2 + number3 +
  number4 + number5;
```

- 在函数声明、函数表达式、函数调用、对象创建、数组创建、`for` 语句等场景中，不允许在 `,` 或 `;` 前换行；

```
// good
var obj = {
  a: 1,
  b: 2,
  c: 3
};

foo(
  aVeryVeryLongArgument,
  anotherVeryLongArgument,
  callback
);


// bad
var obj = {
  a: 1
  , b: 2
  , c: 3
};

foo(
  aVeryVeryLongArgument
  , anotherVeryLongArgument
  , callback
);
```

- 对于 `if...else...`、`try...catch...finally` 等语句，推荐使用在 `}` 号后添加一个换行的风格，使代码层次结构更清晰，阅读性更好；

```
if (condition) {
  // some statements;
}
else {
  // some statements;
}

try {
  // some statements;
}
catch (ex) {
  // some statements;
}
```



#### 5、语句



- 不得省略语句结束的分号；
- 在 `if / else / for / do / while` 语句中，即使只有一行，也不得省略块 `{...}`；

```
// good
if (condition) {
  callFunc();
}

// bad
if (condition) callFunc();
if (condition)
  callFunc();
```

- 函数定义结束不允许添加分号，如果是函数表达式，分号是不允许省略；

```
// good
function funcName() {
}

// bad
function funcName() {
};

// 如果是函数表达式，分号是不允许省略的。
var funcName = function () {
};
```



### 二、命名

#### 1、变量与函数

- 变量使用驼峰命名法；
- 常量的名称全部字母大写，单词间以下划线分割；
- 函数名使用驼峰命名法，函数名使用动宾短语；

```
function getStyle(element) {
}
```

- 函数的参数使用驼峰命名法；
- 类使用驼峰命名法，但是首字母需要大写（`Pascal` 命名法），类名使用名词；
- 类的属性 / 方法使用驼峰命名法；
- 枚举变量使用 `Pascal` 命名法，枚举的属性名称全部大写，单词间以下划线分割；

```
var TargetState = {
    READING: 1,
    READED: 2,
    APPLIED: 3,
    READY: 4
};
```

- `boolean` 类型的变量使用 `is` 或 `has` 开头；

```
var isReady = false;
var hasMoreCommands = false;
```

#### 2、文件与文件夹

1. 文件和文件夹命名是以字母开头的英文名称，禁止使用中文或者数字(特殊情况除外)。
2. 文件和文件夹的命名应当代表该文件的业务价值，应当有确切的含义。
3. 文件夹和文件命名用小写字母，禁止大写字母， 多个单词用英文的中划线(-)链接。
4. 库文件可用逗点（.），用于体现版本或从属关系

**备注：**

> 鉴于这一块在行业内争议比较大，在我们非计培训的过程中是这样规定的，大家日后进入项目组，以项目组里的为准

以下是不好的代码规范：



```
测试.js
test.js
test2.js
Add.js
FirstPage.js
```



以下是好的代码实践：



```
index.js
game-easy.js
vue.min.js
```

###  

### 三、语言特性



#### 1、变量



- 变量在使用前必须通过 `var` 定义（`ES5`），不使用 `var` 定义变量将导致变量污染全局环境；

```
// good
var name = 'MyName';

// bad
name = 'MyName';
```

- 使用 `ES6` 新语法之后，禁止使用 `var` 来定义变量；
- 不允许初始化变量值为 `undefined`，字面值 `undefined` 的主要目的是用于比较；

```
// bad
var foo = undefined;
let bar = undefined;
```

- 每个 `var` 只能声明一个变量；

> 一个 `var` 声明多个变量，容易导致较长的行长度，并且在修改时容易造成逗号和分号的混淆。

```
// good
var a = [];
var b = [];
var c = {};

// bad
var a = [],
  b = [],
  c = {};
```

- 变量必须 **即用即声明**，不得在函数或其它形式的代码块起始位置统一声明所有变量；

> 变量声明与使用的距离越远，出现的跨度越大，代码的阅读与维护成本越高。

```
// good
function kv2List(source) {
  var list = [];

  for (var key in source) {
    if (source.hasOwnProperty(key)) {
      var item = {
        k: key,
        v: source[key]
      };
      list.push(item);
    }
  }

  return list;
}

// bad
function kv2List(source) {
  var list = [];
  var key;
  var item;

  for (key in source) {
    if (source.hasOwnProperty(key)) {
      item = {
        k: key,
        v: source[key]
      };
      list.push(item);
    }
  }

  return list;
}
```



#### 2、条件判断



- 使用 `===` 和 `!==` 来进行判断，不允许使用 `==` ，仅当判断 `null` 或 `undefined` 时，允许使用 `== null`；

> 避免判断中的隐式类型转换。

- 尽可能使用简洁的表达式；

```
// 字符串为空

// good
if (!name) {
  // ......
}

// bad
if (name === '') {
  // ......
}

// 数组非空

// good
if (collection.length) {
  // ......
}

// bad
if (collection.length > 0) {
  // ......
}

// 布尔不成立

// good
if (!notTrue) {
  // ......
}

// bad
if (notTrue === false) {
  // ......
}

// null 或 undefined

// good
if (noValue == null) {
  // ......
}

// bad
if (noValue === null || typeof noValue === 'undefined') {
  // ......
}
```

- 如果函数或全局中的 `else` 块后没有任何语句，需要删除 `else`；

```
// bad
function foo() {
  if (x) {
    return y;
  } else {
    return z;
  }
}

// good
function foo() {
  if (x) {
    return y;
  }

  return z;
}
```

- 不要在循环体中包含函数表达式，事先将函数提取到循环体外；

> 循环体中的函数表达式，运行过程中会生成循环次数个函数对象。

```
// good
function clicker() {
  // ......
}

for (var i = 0, len = elements.length; i < len; i++) {
  var element = elements[i];
  addListener(element, 'click', clicker);
}


// bad
for (var i = 0, len = elements.length; i < len; i++) {
  var element = elements[i];
  addListener(element, 'click', function () { });
}
```

- 对循环内多次使用的不变值，在循环外用变量缓存；

```
// good
var width = wrap.offsetWidth + 'px';
for (var i = 0, len = elements.length; i < len; i++) {
  var element = elements[i];
  element.style.width = width;
  // ......
}


// bad
for (var i = 0, len = elements.length; i < len; i++) {
  var element = elements[i];
  element.style.width = wrap.offsetWidth + 'px';
  // ......
}
```

- 对有序集合进行遍历时，缓存 `length` ；

```
for (var i = 0, len = elements.length; i < len; i++) {
  var element = elements[i];
  // ......
}
```



#### 3、类型检测



- 类型检测优先使用 `typeof` ；
- 对象类型检测使用 `instanceof`；
- 判断 `null` 使用下面的方法：

```
var exp = null;
if (!exp && typeof (exp) != 'undefined' && exp != 0) {
  console.log('is null');
}
```



#### 4、对象



- 使用对象字面量的方式创建 `Object`；

```
// good
var obj = {};

// bad
var obj = new Object();
```

- 不允许修改和扩展任何原生对象和宿主对象的原型；

```
// 以下行为绝对禁止
String.prototype.trim = function () {
};
```

- 访问属性时，能使用 `.` 来访问的属性，需要使用 `.` 来访问；

```
// good
info.age;
info['more-info'];

// bad
info[age];
```

- 使用 `for in` 遍历对象时, 使用 `hasOwnProperty` 过滤掉原型中的属性；

```
var newInfo = {};
for (var key in info) {
  if (info.hasOwnProperty(key)) {
    newInfo[key] = info[key];
  }
}
```



#### 5、数组



- 使用数组字面量 `[]` 创建新数组，除非想要创建的是指定长度的数组；

```
// good
var arr = [];

// bad
var arr = new Array();
```

- 不允许使用 `for in` 遍历数组；

> 数组对象可能存在数字以外的属性, 这种情况下 `for in` 不会得到正确结果。
>
> 1. `for in` 迭代顺序依赖于执行环境，不一定保证顺序；
> 2. `for in` 不仅会遍历当前对象，还包括原型链上的可枚举属性；
> 3. `for in` 没有 `break` 中断；
> 4. `for in` 不适合遍历数组，主要应用为对象。

```
let arr = [{ age: 1 }, { age: 5 }, { age: 100 }, { age: 34 }];
for (let key in arr) {
  console.log(key, arr[key]);
}
// 打印
// 0 {age: 1}
// 1 {age: 5}
// 2 {age: 100}
// 3 {age: 34}
```



#### 6、函数



- 一个函数的长度应控制在 30 行以内，推荐 20 行以内；

> 将过多的逻辑单元混合在一个大的函数里，会导致难以维护的缺点，且不利于单元测试。

- 禁止出现空函数；

```
// bad
function foo() { }

var foo = function () { };

var foo = () => { };

function* foo() { }

var foo = function* () { };

var obj = {
  foo: function () { },

  foo: function* () { },

  foo() { },

  *foo() { },

  get foo() { },

  set foo(value) { }
};

class A {
  constructor() { }

  foo() { }

  *foo() { }

  get foo() { }

  set foo(value) { }

  static foo() { }

  static *foo() { }

  static get foo() { }

  static set foo(value) { }
}
```

- 参数设计，一个函数的参数输了一般控制在 `6` 个以内；
- 禁用 `eval()`  

> JavaScript 中的 `eval()` 函数是有潜在危险的，而且经常被误用。在不可信的代码里使用 `eval()` 有可能使程序受到不同的注入攻击。`eval()` 在大多数情况下可以被更好的解决问题的方法代替。