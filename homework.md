## 1.2.2

1. 数据类型

   * 基本数据类型
     * `Boolean`：布尔值，有`true`和`false`
     * `Null`：表明“空”的值
     * `Undefined`：表明变量未定义时的属性
     * `Number`：表示数字，有范围，超出范围数据不安全，不准确
     * `BigInt`：表示数字，相比在Number的范围外是安全的。
     * `String`：表示字符串
     * `Symbol`：其实例唯一且不可变
   * `Object`类型：引用类型

2. 区别：

   * 存储方式：基本类型存储在栈中，其值直接存储在变量访问的位置。引用数据类型存储在堆中的对象，存储在变量出的值是一个指针，指向存储对象的内存处，放在栈空间的值是该对象存储在堆中的地址。

   * 基本类型按值传递，值不可变，只有对象可变，看似“修改”，其实是创建新的值，函数形参是被调用时所传实参的副本。引用类型按引用传递，值可变，函数的形参接受实参的隐式引用，不再是副本。
   * 基本类型不能添加属性和方法
   * 用`==`比较时，基本数据类型比较变量的值，引用数据类型比较两个对象在堆中的地址是否相同

3. 变量提升：

   * 函数声明和变量声明总是会被解释器“提升”到方法体的最顶部。所以可以在使用变量后再声明。
   * 只有声明的变量会提升，如`var x;`，初始化的不会，如`var x=5;`。
   * 为避免产生不必要问题，通常在每个作用域前声明变量。

4. `typeof`：返回一个字符串，表示未经计算的操作数的类型。

   ```js
   undefined
   boolean
   number
   string
   object
   ```

## 1.2.3

1. `num++`和`++num`的区别
   
* 前者会将值做计算值，再自加1。后者是先自加1，再将值做计算值。
  
2. 用`Math`方法对结果进行操作
   * 保留两位小数：`Math.round(num*100) / 100`;
   * 四舍五入：`Math.round(num)`;
   * 向上取整：`Math.ceil(num)`;
   * 向下取整：`Math.floor(num)`;

3. 计算结果：
   * `42 == "42";`---------`true`
   
   * `42 === "42";`---------`false`
   
   * `"foo" == ["foo"];`------`false`
   
   * `"0" == false;`------------`false`
   
   * `"" == [];`------------------`false`
   
   * `"" == 0;`--------------------`false`
   
   * `[] == 0;`--------------------`false`
   
   * `"true" == true;`-----------`false`
   
     * 如果有一个操作数是布尔值，则在比较相等性之前先将其转换为数值——`false`转换为`0`，而`true`转换为`1`；这时为`"true" == 1;`
   
     * 如果一个操作数是字符串，另一个操作数是数值，在比较相等性之前先将字符串转换为数值；这里用`Number()`转化:
   
       1. 如果字符串中只包含数字（包括前面带加号或负号的情况），则将其转换为十进制数值， 即`"1"`会变成`1`，`"123"`会变成`123`，而`"011"`会变成`11`（前导的零会被忽略了）；
   
       2. 如果字符串中包含有效的浮点格式，如`"1.1"`，则将其转换为对应的浮点数值（也会忽略前导零）
   
       3. 如果字符串中包含有效的十六进制格式，例如`"0xf"`，则将其转换为相同大小的十进制整数值；
   
       4. 如果字符串是空的（不包含任何字符），则将其转换为`0`
   
       5. 如果字符串中包含除上述格式之外的字符，则将其转换为`NaN`
   
     * 这里适用第5条转化为`NaN == 1;`
   
     * 因为`NaN`不与任何值相等，包括本身。这里答案为`false`
   
   * `0 == "\n";`-------------------`false`
   
   * `0 == null;`-------------------`false`
   
   * `false == {};`----------------`false`
   
   * `0.1 + 0.2 == 0.3;`---------`false`
4. 计算，并说明为什么：
   * 第一处：`42`，因为`a++`为先计算后自加
   * 第二处：`43`，因为上面计算完后，`a`自加了`1`
   * 第三处：`44`，因为`++a`为先自加，后计算
   * 第四处：`44`，因为上面的`a`自加后为`44`

5. 计算，并说明原因：
   * 第一处：`8`，`&`是运算符按位与，左右不是二进制时，把左右两边转化为二进制，每一位进行比较，相等为`1`，不同为`0`。`42`的二进制为`00101010`，`24`的二进制为`00011000`，作`&`运算后为`00001000`。
   * 第二处：`34`，`&&`是逻辑运算符与，左边为真走右边，左边为假只走左边。`false`，`undefined`，`''`，`null`，`0`和`NaN`被认定为假。这里左边是`8`，为真，走右边。
   * 第三处：`54`，`|`是位的或运算符，同时转化为二进制，每一位比较，只要有一个`1`，结果为`1`，否则为`0`。左边`34`的二进制为`00100010`，右边`54`的二进制为`00110110`，作`|`后为`001100110`。
   * 第四处：`54`，`||`是逻辑或运算符，只要左右为`false`，返回右边；只要左边为`true`，都返回左边。这里左边是`54`，为真，返回左边。

## 1.2.4

1. 判断成绩

   ```js
   var result;
   if (result >= 95) {
     console.log("卓越");
   }else if (result >= 85) {
     console.log("优秀");
   }else if (result >= 75) {
     console.log("一般");
   }else if (result >=60) {
     console.log("及格")
   }else {
     console.log("不及格")
   }
   
   ```

2. 简易计算器：

   ```js
   var x = 10, y = 8, operator;
   switch (operator) {
     case '+':
       console.log(x + y);
       break;
     case '-':
       console.log(x - y);
       break;
     case '*':
       console.log(x * y);
       break;
     case '/':
       console.log(x / y);
       break;
     case '%':
       console.log(x % y);
       break;
   }
   ```

3. 累加1~100，跳过个位为3的数：

   ```js
   let n = 1;
   let sum = 0;
   while (n <= 100) {
     if (n % 10 != 3) {
       sum += n;
     }
     n++;
   }
   console.log(sum);
   ```

4. 打印`*`矩阵：

   ```js
   var a = "";
   for (let i = 6; i > 0; i--) {
     for (let j = i; j > 0; j--) {
       a += "*" + " ";
     }
     a += "\n";
   }
   console.log(a);
   ```

5. 打印99乘法表：

   ```js
   var a = "";
   for (let i = 1; i < 10; i++) {
     for (let j = 1; j <= i; j++) {
       a = a + i + "*" + j + "=" + i*j + " ";  
     }
     a += "\n";
   }
   console.log(a);
   ```

## 1.2.5

1. 四种：

   * 使用function语句

     ```js
     function sum(a, b) {
       return a + b;
     }
     //解析器会自动提升函数至代码的头部
     ```

   * 使用Function()构造函数

     ```js
     var sum = new Function("a", "b", "return a + b;");
     //不常用
     ```

   * 使用函数表达式

     ```js
     var sum = function(a, b) {
       return a + b;
     }
     //不会让函数名声明提起那，符合先定义后使用的要求。
     ```

   * 自调用函数

     ```js
     (function () {
       return a + b;
     })();
     /*
     自动调用，也称立即执行函数，条件：表达式后面紧跟()。但不能自调用声明的函数。
     */
     ```

     

2. `b = 5;`这里使用函数自调用，函数立即执行。

3. 代码：

   ```js
   var str, n;
   var repeatStr = function(str, n) {
     var newStr = "";
     if (n > 0) {
       for (let i = 0; i < n; i++) {
         newStr += str;
       }
     }else {
       newStr = str;
     }
     return newStr;
   }
   ```

4. 结果：

   ```js
   undefined;  
   /*函数内部的var声明的变量会提升至全局变量，导致test内部的console.log(a)前面没有声明变量a，所以在内部打印a，属未定义类型。
   */
   2； //test内部，foo()会提升至顶部，所以打印foo不出错。
   ```

5. 结果：

   ```js
   function;//var声明会自动放在代码头部，这里foo没有定义数据类型，可以看作函数表达式方式创建函数。
   number; 
   /*
   函数声明和变量声明都会置顶，且函数声明优先级更高（函数代码在变量上面）
   声明过的变量不会重新声明
   */
   这里第二小题约等于：
   var foo = function() {
     return 1;
   }
   var foo = 1;
   //也就是说foo被重新赋值了，不再是函数了。
   ```

6. 乘法计算器：

   ```js
   var multiplicationCaculator = function() {
     var result = 1;
     for (var i = 0; i < arguments.length; i++) {
       result *= arguments[i];
     }
     return result;
   }
   ```

7. 代码：

   ```js
   var add = function(a) {
     var add1 = function(b) {
         return add(a + b);
     }
     add1.toString = function() {
       return a;
     }
     return add1;
   }
   console.log(add(2)(3)(4));
   /*
   函数的toString方法会返回一个表示函数源代码的字符串，包括function关键字，形参列表，大括号，以及函数体中的内容。如果调用者不是函数，会报错。这里调用者为add1。函数add返回函数add1，如果add1没有参数了，则add1返回的是add(a)；接下来顺序调用add1的toString函数，返回其参数列表a。
   */
   ```
## 1.2.6

1. 常用字符串方法：

```
length//返回字符串长度
trim()//从字符串两端删除空白字符串，包括(space, tab, no-break space等)以及所有行终止符(如LF, CR等)
toLowerCase()//转化字符串为小写并返回
toUpperCase()//转化字符串为大写并返回
indexOf()//返回字符串第一次出现指定值在调用对象内的索引，从开始搜索
laseIndexOf()//返回字符串第一次出现指定值在调用对象内的索引，从末尾搜索
includes()//a.includes(b),在字符串a中去找把字符串，返回true和false
split()//使用指定的分隔符字符串将字符串对象分割成子字符串数组，指定的分割字符串决定每个拆分位置。
slice()//提取某字符转的一部分，并返回一个新字符串，原字符串不改动，允许开始索引为负，为负时，作为length + start处理，可以处理数组。
substring()//返回一个字符串在开始索引到结束索引之间的一个子集，或从从开始索引直到字符串末尾的一个子集，开始、结束索引为负时，当作0，不可以处理数组
replace()//返回一个由替换值（replacement）替换一些或所有匹配的模式（pattern）后的新字符串。模式可以是一个字符串或者一个正则表达式，替换值可以是一个字符串或者一个每次匹配都要调用的回调函数。
match()//检索字符串和正则表达式匹配的结果
matchAll()// 返回一个包含所有匹配正则表达式的结果及分组捕获组的迭代器。
```

2. 完成下面程序，将`name`变量中的字母全部转为为大写，输出出：`'HELLO'`。

   ```js
   var name = "hello";
   var nameToUpper = function(name) {
     return name.toUpperCase();
   }
   nameToUpper(name);
   ```

3. 完成下面程序，将sentence变量中的所有单词首字母变为大写，输出：'Good Afternoon, Mr Mike.'。

   ```js
   var sentence = "good afternoon, mr mike.";
   var sentenceToUpperFirst = function(sentence) {
     var words = sentence.split(' ');
     var newSentence = "";
     for (var i = 0; i < words.length; i++) {
       words[i] = words[i].substring(0, 1).toUpperCase() + words[i].substring(1);
       //newSentence = newSentence + words[i] + ' ';
     }
     //return newSentence.trim();
     return words.join(' ');
   }
   sentenceToUpperFirst(sentence);
   ```

4. 完成下面程序，将money变量中的金额提取出来，输出：20。

   ```js
   var money = "￥20";
   var moneyToValue = function(money) {
     return parseInt(money.substring(1));
   }
   moneyToValue(money);
   ```

5. 编写函数 toCamelStyle, 满足`_`后面的首字母变大写，并删除`_`。

   ```js
   function toCamelStyle(str) {
     var flag = 0;
     if (str.substring(0, 1) === '_') {
       str = str.substring(1);
       flag = 1;
     }
     var words = str.split('_');
     var newStr = words[0];
     for(var i = 1; i < words.length; i++) {
       words[i] = words[i].substring(0, 1).toUpperCase() + words[i].substring(1);
       newStr += words[i];
     }
       
     if (flag === 1) {
       return '_' + newStr;
     }
     return newStr;
   }
   
   toCamelStyle("abc_bcd"); //输出"abcBcd"
   toCamelStyle('a_3_c_d_ef');  // 输出 'a3CDEf'
   toCamelStyle('_a_b_c_d_ef');  // 输出 '_aBCDEf'
   ```

## 1.2.7

1. 创建数组的方式：

   * 使用Array构造函数

     ```js
     var a = new Array();
     var b = new Array(5);  //创建长度为5的数组
     var c = new Array("a","b","c");
     ```

   * 使用数组字面量表示法

     ```js
     var a = [];
     var b = [5];
     var c = ["a", "b", "c"];
     ```

2. 判断下列变量是不是数组类型：

   ```js
   var a = '[a, b, c, d]';//不是，这是一个字符串，且字符串写法错了，该用双引号包裹。
   var b = [1, 2, 3, 4];//是，采用数组字面量表示法创建，且是number类型的数组。
   ```

3. 编写程序，将下面数组中的每一项都乘以2。

   ```js
   var a = [1, 2, 3, 4, 5];
   for (var i = 0; i < a.length; i++) {
     a[i] = a[i] * 2;
   }
   console.log(a);
   ```

4. 编写程序，按下面的要求输出结果。

   ```js
   var colors = ["Red", "Green", "White", "Black"];
   console.log(colors.join(' '));
   console.log(colors.join('+'));
   console.log(colors.join(','));
   ```

5. 编写程序，将下面数组中的数字按从大到小的顺序排序。

   ```js
   var a = [5, 1, 8, 10, 4];
   a.sort(function(a, b){
     return b - a;
   });
   console.log(a.sort());
   //这里sort是将数组对象转化为字符串比较，需要更改比较规则
   ```

6. 编程程序，找出下列数组中出现频率最高的元素。

   ```js
   var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
   var findTheMostElement = function(a) {
     a.sort();
     var index = 0;
     var num = 0;
     var maxIndex = 0;
     var maxNum = 0;
     for (var i = 0; i < a.length; i++) {
       if (a[index] === a[i]) {
         num++;
       }else{
         if(num > maxNum) {
           maxNum = num;
           maxIndex = index;
         }
         num = 1;
         index = i;
       }
     }
     if(num > maxNum) {
       maxNum = num;
       maxIndex = index;
       }//判断最后一个元素的个数，更新maxIndex
     return a[maxIndex];
   }
   console.log(findTheMostElement(a));
   ```

## 1.3.1

1. 对象：一个包含数据和方法的集合（通常由一些变量和函数组成，称之为对象里面的属性和方法）。

   创建对象的方式：

   * 字面量表示法，使用key : value的形式直接创建:

     ```js
     var book = {};//创建一个没有属性的对象
     var book = {
       name : "zkj",
       age : 24
     };
     ```

   * 使用new关键字：

     ```js
     var book = new Object(); //创建一个没有属性的对象，具体创建出什么对象，要看使用的new的类。
     ```

2. 编程程序，完成需求：

   * 创建一个空对象，变量名为user；

     ```js
     var user = {};
     ```

   * 添加一个 name 属性，并设置值为 John；

     ```js
     user.name = "John";
     ```

   * 添加一个 surname 属性，并设置其值为 Mike；

     ```js
     user.surname = "Mike";
     ```

   * 将 name 属性的值改为 Peter;

     ```js
     user.name = "Peter";
     ```

   * 删除 user 的 name 属性；

     ```js
     delete user.name;
     ```

3. 答案为`18`。这里并没有新建一个新的对象b，而是让变量b的地址指向对象a，所以答案为18；

4. 值？为什么？

   `call`、`bind`、`apply`的区别：

   1. `call`是一个一个传递值；`apply`是把需要传递的值放在一个数组进行操作，也相当于一个一个传递；`bind`是事先把函数的`this`改变为需要的结果，并准备好对应参数，但不会马上执行，需要用的时候立刻执行。（`bind`在IE6~8不兼容）
   2. `call`可以将被操作的对象的`this`关键字变成`call`里面的参数，然后继续执行该对象，但是之后的`this`已经改变，相关的属性要变成对应的`this`的属性。

   * 第一小题：

     ```js
     var name = 'window-Jack';
     var person = {
      name : 'person-Rose',
      greeting: function() {
        console.log('Hi! I\'m ' + this.name + '.');
      }
     }
     var greeting = person.greeting;
     greeting();
     //值为"Hi! I'm window-Jack."因为在声明greeting函数时，指定其代码块为person对象的greeting方法的内容，这时的this为全局的，此时调用greeting函数，执行代码块，里面存在this.name,必然用到的是全局的name属性。
     ```
     
   * 第二小题：

     ```js
    var name = 'window-Jack';
     var person = {
      name : 'person-Rose',
      greeting: function() {
        console.log('Hi! I\'m ' + this.name + '.');
      }
     }
     var greeting = person.greeting.bind(person);
     greeting();
     //值为"Hi! I'm person-Rose."因为bind这里设置了函数greeting的this关键字为person，并且已经将对应参数配置好，调用greeting函数时，直接赋值。
     ```
   
   * 第三小题：

     ```js
    var name = 'window-Jack';
     var person = {
      name : 'person-Rose',
      greeting: function() {
        console.log('Hi! I\'m ' + this.name + '.');
      }
     }
     person.greeting.apply(this);
     //值为"Hi! I'm window-Jack."原因同第四小题，apply和call都立即改变this关键字。
     
     ```
   
   * 第四小题：

     ```js
    var name = 'window-Jack';
     var person = {
      name : 'person-Rose',
      greeting: function() {
        console.log('Hi! I\'m ' + this.name + '.');
      }
     }
     person.greeting.call(this);
     //值为"Hi! I'm window-Jack."因为函数greeting执行call方法后其this变为全局的this，在执行函数greeting时，里面的this.name是全局的name。
     ```

5. 编写程序，实现下列需求：计算下面 fruit 对象共有多少个水果，应该输出 50。

   ```js
   var fruit = {
     apple: 20,
     pear: 20,
     peach: 10
   };
   var num = 0;
   for (let key in fruit) {
     num += fruit[key];
   }
   console.log(num);
   ```

6. 什么是 JSON？JSON 和 JavaScript 的关系以及 JSON 的适用场景是什么？

   * 定义：JSON（JavaScript对象表示法）是用于将结构化数据表示为JavaScript对象的标准格式，通常用于在网站上表示和传输数据。
     1. 基于JS语法，又独立于JS，多种环境可读取。
     2. 可以作为对象或者字符串存在，前者用于解读数据，后者用于传输数据。
     3. 一个JSON对象可以存储在自己的文件中，扩展名`.json`。

   * 关系：
     1. JSON对象基于JS对象，字符串，数字，数组、布尔及其他的字面值对象都可以写入JSON对象，使用`[]`访问对象内的数据。
     2. JSON是纯数据格式，只有属性，没有方法，JS有属性和方法
     3. JSON两头都有`{}`，规范和JS一样
     4. JSON要求更严格，一个错位的逗号或者分号都能导致JSON文件出错。可用JSONLint程序来检测
     5. 可以将任何标准合法的JSON数据格式化保存，只有字符串才能作属性，JS中标识符可以作属性。
   
   * 适用场景：两种
     1. JS原生态JSON使用，使用`JSON.stringify(object)`把前端的一个Object对象转化为字符串格式，传输到后端。
     2. jQuery中使用，使用`$.parseJSON(JSONString)`把从后端接受的JSON字符串转换为Object对象便于前段使用，或者是使用`JSON.parse(JSONString)`达到同样的效果。

7. 写一篇总结，关于JS对象基础，[简书链接](https://www.jianshu.com/p/0388df6298ed)

## 1.3.4

1. 总结Ajax请求共有多少种回调？

   五种：

   * `beforeSend`：在发送请求之前调用，并且传入一个`XMLHttpRequest` 作为参数。
   * `error`：在请求出错时调用。传入 `XMLHttpRequest` 对象，描述错误类型的字符串以及一个异常对象（如果有的话）
   * `dataFilter`：在请求成功之后调用。传入返回的数据以及 `dataType` 参数的值，并且必须返回新的数据（可能是处理过的）传递给 `success` 回调函数。
   * `success`：当请求之后调用。传入返回后的数据，以及包含成功代码的字符串。
   * `complete`：当请求完成之后调用这个函数，无论成功或失败。传入 `XMLHttpRequest` 对象，以及一个包含成功或错误代码的字符串。

2. 编程实现，创建一个名为 ajax 的 XHR 对象

   ```js
   let ajax = {
     request(url, method, callback, params) {
       var xhr = new XMLHttpRequest();
       xhr.onreadystatechange = (function (myxhr) {
         return function() {
           if (myxhr.readyState === 4 && myxhr.status === 200) {
             callback(myxhr);
           }
         }
       })(xhr);
       xhr.open(method, url, true);
       xhr.send(params || '');
     }
   }
   
   function myCallback(xhr) { 
      alert(xhr.responseText); 
    }
    ajax.request("somefile.txt", "get", myCallback);
    ajax.request("script.php", "post", myCallback, "first=John&last=Smith");
   ```

3. 造成跨域的原因有哪些？
   * 同源策略：浏览器上为安全性考虑实施的非常重要的安全策略。两个页面地址中的协议、域名和端口号一致，则表示同源。
   * 协议、端口、和域名有任意一个不同就会造成跨域。
   * 一个为ip地址，一个为域名地址，进行的访问行动也是跨域的，不允许跨域请求资源。如：localhost和127.0.0.1虽然都指向本机，但也属于跨域。

4. 有哪些办法可以解决跨域？

   5种：

   * 响应头添加`Header`允许访问

     这个跨域访问的解决方案的安全基础是基于"JavaScript无法控制该HTTP头"。它需要通过目标域返回的HTTP头来授权是否允许跨域访问。

     ```js
     response.addHeader("Access-Control-Allow-Origin:*");//允许所有来源访问 
     response.addHeader("Access-Control-Allow-Method:POST,GET");//允许访问的方式
     设置headers的内容？content-type，常用的headers？
     ```

   * `jsonp` 只支持`get`请求，不支持`post`请求
     1. dataType改为jsonp
     2. jsonp : "jsonpCallback"
     3. 后端获取get请求中的jsonpCallback
     4. 构造回调结构

   * `httpClient`内部转发
     在原站点中ajax请求访问原站点的HttpClient，再通过HttpClient转发请求获取目标站点的数据结果。这种方式产生了两次请求，效率低，但属于内部请求，抓包工具无法分析，安全。

   * 使用`nginx`搭建企业级接口网关方式

     两次请求，第一次请求nginx服务器，第二次nginx服务器通过拦截匹配分发到对应的网址。

   * 使用`Spring Cloud zuul`接口网关

5. 有一个方法，可以避免每次请求重复去写创建 XHR 的整个过程，请求方法现只考虑 `POST` 和 `GET`，要求默认请求方法是 `GET`

   ```js
   function ajax(params) {   
     params = params || {};   
     params.data = params.data || {};   
     var json = params.jsonp ? jsonp(params) : json(params);
     function json(params) {   
       params.type = (params.type || 'GET').toUpperCase(); 
       params.data = formatParams(params.data);   
       var xhr = new XMLHttpRequest();
     }
    
     function ajax(url, success, fail){
       var xhr = new XMLHttpRequest();
       xhr.open('get', url, true)
       xhr.send(null);
       xhr.onreadystatechange = function(){
         if(xhr.readyState == 4){
           if(xhr.status == 200)
             success(xhr.responseText);
           else 
             fail && fail(xhr.status);
         }
       }
     }
   }
   ```

## 2.1.1

```js
//命令提示符
node question1.js

//question1.js
'use strict'

console.log('Hello World');
```

```js
//package.json内容
{
  "_from": "express",
  "_id": "express@4.17.1",
  "_inBundle": false,
  "_integrity": "sha512-mHJ9O79RqluphRrcw2X/GTh3k9tVv8YcoyY4Kkh4WDMUYKRZUq0h1o0w2rrrxBqM7VoeUVqgb27xlEMXTnYt4g==",
  "_location": "/express",
  "_phantomChildren": {},
  "_requested": {
    "type": "tag",
    "registry": true,
    "raw": "express",
    "name": "express",
    "escapedName": "express",
    "rawSpec": "",
    "saveSpec": null,
    "fetchSpec": "latest"
  },
  "_requiredBy": [
    "#USER",
    "/"
  ],
  "_resolved": "https://registry.npmjs.org/express/-/express-4.17.1.tgz",
  "_shasum": "4491fc38605cf51f8629d39c2b5d026f98a4c134",
  "_spec": "express",
  "_where": "S:\\tw\\zkjxx1548.github.io\\course2\\week1\\section1",
  "author": {
    "name": "TJ Holowaychuk",
    "email": "tj@vision-media.ca"
  },
  "bugs": {
    "url": "https://github.com/expressjs/express/issues"
  },
  "bundleDependencies": false,
  "contributors": [
    {
      "name": "Aaron Heckmann",
      "email": "aaron.heckmann+github@gmail.com"
    },
    {
      "name": "Ciaran Jessup",
      "email": "ciaranj@gmail.com"
    },
    {
      "name": "Douglas Christopher Wilson",
      "email": "doug@somethingdoug.com"
    },
    {
      "name": "Guillermo Rauch",
      "email": "rauchg@gmail.com"
    },
    {
      "name": "Jonathan Ong",
      "email": "me@jongleberry.com"
    },
    {
      "name": "Roman Shtylman",
      "email": "shtylman+expressjs@gmail.com"
    },
    {
      "name": "Young Jae Sim",
      "email": "hanul@hanul.me"
    }
  ],
  "dependencies": {
    "accepts": "~1.3.7",
    "array-flatten": "1.1.1",
    "body-parser": "1.19.0",
    "content-disposition": "0.5.3",
    "content-type": "~1.0.4",
    "cookie": "0.4.0",
    "cookie-signature": "1.0.6",
    "debug": "2.6.9",
    "depd": "~1.1.2",
    "encodeurl": "~1.0.2",
    "escape-html": "~1.0.3",
    "etag": "~1.8.1",
    "finalhandler": "~1.1.2",
    "fresh": "0.5.2",
    "merge-descriptors": "1.0.1",
    "methods": "~1.1.2",
    "on-finished": "~2.3.0",
    "parseurl": "~1.3.3",
    "path-to-regexp": "0.1.7",
    "proxy-addr": "~2.0.5",
    "qs": "6.7.0",
    "range-parser": "~1.2.1",
    "safe-buffer": "5.1.2",
    "send": "0.17.1",
    "serve-static": "1.14.1",
    "setprototypeof": "1.1.1",
    "statuses": "~1.5.0",
    "type-is": "~1.6.18",
    "utils-merge": "1.0.1",
    "vary": "~1.1.2"
  },
  "deprecated": false,
  "description": "Fast, unopinionated, minimalist web framework",
  "devDependencies": {
    "after": "0.8.2",
    "connect-redis": "3.4.1",
    "cookie-parser": "~1.4.4",
    "cookie-session": "1.3.3",
    "ejs": "2.6.1",
    "eslint": "2.13.1",
    "express-session": "1.16.1",
    "hbs": "4.0.4",
    "istanbul": "0.4.5",
    "marked": "0.6.2",
    "method-override": "3.0.0",
    "mocha": "5.2.0",
    "morgan": "1.9.1",
    "multiparty": "4.2.1",
    "pbkdf2-password": "1.2.1",
    "should": "13.2.3",
    "supertest": "3.3.0",
    "vhost": "~3.0.2"
  },
  "engines": {
    "node": ">= 0.10.0"
  },
  "files": [
    "LICENSE",
    "History.md",
    "Readme.md",
    "index.js",
    "lib/"
  ],
  "homepage": "http://expressjs.com/",
  "keywords": [
    "express",
    "framework",
    "sinatra",
    "web",
    "rest",
    "restful",
    "router",
    "app",
    "api"
  ],
  "license": "MIT",
  "name": "express",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/expressjs/express.git"
  },
  "scripts": {
    "lint": "eslint .",
    "test": "mocha --require test/support/env --reporter spec --bail --check-leaks test/ test/acceptance/",
    "test-ci": "istanbul cover node_modules/mocha/bin/_mocha --report lcovonly -- --require test/support/env --reporter spec --check-leaks test/ test/acceptance/",
    "test-cov": "istanbul cover node_modules/mocha/bin/_mocha -- --require test/support/env --reporter dot --check-leaks test/ test/acceptance/",
    "test-tap": "mocha --require test/support/env --reporter tap --check-leaks test/ test/acceptance/"
  },
  "version": "4.17.1"
}
```

## 2.2.1

### 1. 请参考推荐资料的内容，理解为什么需要块级作用域？如果没有，可能会出现哪些问题，请举例说明。

* 原因：
  1. 变量可以在声明之前使用，这种现象有些奇怪，按照一般的逻辑，变量应该在声明语句之后才可以使用。
  2. 内层变量可能会覆盖外层变量
  3. 用来计数的循环变量泄露为全局变量。
  4. 块级作用域的出现，使得获得广泛应用的匿名立即执行函数表达式不再必要。

* 没有块级会出现以下场景：

  1. 内层变量可能会覆盖外层变量

     ```js
     var tmp = new Date();
     
     function f() {
       console.log(tmp);
       if (false) {
         var tmp = 'hello world';
       }
     }
     
     f(); // undefined,函数f执行后，输出结果为undefined，原因在于变量提升，导致内层的tmp变量覆盖了外层的tmp变量。
     ```

  2. 用来计数的循环变量泄露为全局变量。

     ```js
     var s = 'hello';
     
     for (var i = 0; i < s.length; i++) {
       console.log(s[i]);
     }
     
     console.log(i); // 5,循环结束后，i并没有消失，泄露成了全局变量。
     ```

     



