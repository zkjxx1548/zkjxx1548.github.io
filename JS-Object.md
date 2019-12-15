# JS对象基础

## 1. 创建Object对象

### 1.1 定义

​	JS中最基本的数据类型是对象，而对象是一个无序属性集合，以键值对存在（通常由一些变量和函数组成，称之为对象里面的属性和方法）。除了字符串，数字，true，false，null或者undefined以外，其他所有值在JS里头都是对象。对象是引用类型。所有对象都继承Object对象。

### 1.2 创建

1. 字面量表示法，使用key : value的形式直接创建：

   ```js
   var book = {};//创建一个没有属性的对象
   var book = {
     name : "zkj",
     age : 24
   };
   ```

2. 使用new关键字：

   ```js
   var book = new Object(); //创建一个没有属性的对象，具体创建出什么对象，要看使用的new的类。
   ```

### 1.3 Object对象属性

constructor属性：保存当前对象的构造函数。

## 2. 对象的操作

### 2.1 添加与删除

* 添加或更改：`对象名.属性名 = '属性值';`
* 删除：`delete 对象名.属性名;`

### 2.2 判断有无

格式：`'属性名' in 对象名;`，返回：boolean

### 2.3 `[]`的使用

* 获取：`.`和`[]`都可以获取属性值：`对象名['属性名'];`

* 计算属性名：属性名可以由其他属性得到

  ```js
  var param = 'size';
  var config = {
    [param]: 12,
    ['mobile' + param.charAt(0).toUpperCase() + param.slice(1)]: 4
  };
  
  console.log(config); // {size: 12, mobileSize: 4}
  ```

### 2.4 属性值缺省

```js
function makeUser(name, age) {
  return {
    name,//本来应该为name: name
    age//本来该为age: age
  };
}

let user = makeUser("John", 30);
console.log(user)//{ name: 'John', age: 30 }
```

### 2.5 遍历对象属性

使用`for in`：

```js
for (let key in user) {
  console.log(key);//打印对象名为user的属性
  console.log(user[key]);//打印对象名为user的属性名为key的值
}
```

### 2.6 const使用

* 用`const`设置常量：无法更改
* 用`const`修饰对象：对象的引用地址不可变，其中属性值可以变

## 3. JSON

### 3.1 定义

定义：JSON（JavaScript对象表示法）是用于将结构化数据表示为JavaScript对象的标准格式，通常用于在网站上表示和传输数据。

* 基于JS语法，又独立于JS，多种环境可读取。
* 可以作为对象或者字符串存在，前者用于解读数据，后者用于传输数据。
* 一个JSON对象可以存储在自己的文件中，扩展名`.json`。

### 3.2 JSON和JS的关系

* JSON对象基于JS对象，字符串，数字，数组、布尔及其他的字面值对象都可以写入JSON对象，使用`[]`访问对象内的数据。
* JSON是纯数据格式，只有属性，没有方法，JS有属性和方法
* JSON两头都有`{}`，规范和JS一样
* JSON要求更严格，一个错位的逗号或者分号都能导致JSON文件出错。可用JSONLint程序来检测
* 可以将任何标准合法的JSON数据格式化保存，只有字符串才能作属性，JS中标识符可以作属性。

### 3.3 JSON的适用场景

* JS原生态JSON使用，使用`JSON.stringify(object)`把前端的一个Object对象转化为字符串格式，传输到后端。
* jQuery中使用，使用`$.parseJSON(JSONString)`把从后端接受的JSON字符串转换为Object对象便于前段使用，或者是使用`JSON.parse(JSONString)`达到同样的效果。

