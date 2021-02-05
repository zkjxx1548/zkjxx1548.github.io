# 版本

 http://jquery.com/download/ 

 2 个系列版本 1.x 与 2.x

 2.x 不再兼容 IE6、7、8浏览器，比 jQuery 1.x 更小、更快。

jQuery 每一个系列版本分为：压缩版(compressed) 与 开发版(development)，开发过程中使用**开发版**，项目上线发布使用**压缩版**

 jQuery是一个JavaScript脚本库，不需要特别的安装，只需要我们在页面 <head> 标签内中，通过 script 标签引入 jQuery 库即可。

```
<script type="text/javascript" src="https://www.imooc.com/static/lib/jquery/1.9.1/jquery.js"></script>
```

# 样式

1. `$(document).ready`等页面的文档（document）中的节点都加载完毕后，再执行后续的代码

2. `$(":hidden")`

   ```
   // 筛选条件
   CSS display的值是none。
   type="hidden"的表单元素。
   宽度和高度都显式设置为0。
   一个祖先元素是隐藏的，该元素是不会在页面上显示
   CSS visibility的值是hidden
   CSS opacity的指是0
   ```

3. 属性筛选

   ```
    <script type="text/javascript">
            //查找所有div中，属性name的值是用imooc开头的
            $('div[name^=imooc]'); 
       </script>
   
       <script type="text/javascript">
            //查找所有div中，属性name的值是用imooc结尾的
            $('div[name$=imooc]'); 
       </script>
   
       <script type="text/javascript">
           //查找所有div中，有属性name中的值包含一个test字符串的div元素
           $('div[name*="test"]'); 
       </script>
   
       <script type="text/javascript">
           //查找所有div中，有属性testattr中的值没有包含"true"的div
           $('div[testattr!="true"]'); 
       </script>
   ```

# Dom

* 插入
* 查找
* 删除
* 包裹
* 替换
* 复制

```
// jQuery Dom操作-----插入
append appendTo
after before
prepend prependTo
insertAfter insertBefore
```

```
// jQuery Dom操作-----删除
empty 本身存在，内容清空
remove 本身也清除
detach 可再使用，通过append
```

```
// jQuery Dom操作-----复制与替换
clone 深度 clone(true) 加上事件和数据
replaceWith replaceAll 目标和源相反
wrap 包裹
unwrap 去包裹
wrapAll 整体包裹
wrapInner 分别包裹
```

```
// jQuery Dom操作-----遍历
children 仅儿子
find 查找范围包括子节点的所有后代节点
parent 仅父亲
parents 所有父辈 $( "html" ).parent()方法返回一个包含document的集合，而$( "html" ).parents()返回一个空集合。
closest 从元素本身开始，在DOM 树上逐级向上级元素匹配，并返回最先匹配的祖先元素
next 后面同辈元素
prev 前面同辈元素
siblings 所有同辈
add
each(function) 函数内返回false中止
```

# 事件

* 鼠标
* 表单
* 键盘
* 绑定
* 对象
* 自定义事件

```
// jQuery 事件操作-----鼠标
click dbclick双击
mousedown mouseup
mousemove
mouseover mouseout
mouseenter mouseleave
hover 两个参数，一个进入，一个离开
focusin
focusout
```

```
// jQuery 事件操作-----表单
blur失去 focus焦点 focus()在元素本身产生，focusin()在元素包含的元素中产生
change
selected
submit
keydown keyup
focusin
focusout
```

```
// jQuery 事件操作-----键盘
keydown keyup
keypress
```

```
// jQuery 事件操作-----绑定
on
off
```

```
// jQuery 事件操作-----对象
事件对象是用来记录一些事件发生时的相关信息的对象。
只有事件发生时才会产生，事件对象就被销毁
event.target   代表当前触发事件的元素，可以通过当前元素对象的一系列属性来判断是不是我们想要的元素
event.type：获取事件的类型
event.pageX 和 event.pageY：获取鼠标当前相对于页面的坐标
event.preventDefault() 方法：阻止默认行为
event.stopPropagation() 方法：阻止事件冒泡
event.which：获取在鼠标单击时，单击的是鼠标的哪个键
event.currentTarget : 在事件冒泡过程中的当前DOM元素 = this
this和event.target： 
	js中事件是会冒泡的，所以this是可以变化的，但event.target不会变化，它永远是直接接受事件的目标DOM元素；
	都是DOM对象；
```

```
// jQuery 事件操作-----自定义
trigger 根据绑定到匹配元素的给定的事件类型执行所有的处理程序和行为
	自定义事件对象，是jQuery模拟原生实现的
	自定义事件可以传递参数
会在DOM树上冒泡：
	阻止冒泡就需要在事件处理程序中返回false或调用事件对象中的.stopPropagation() 方法可以使事件停止冒泡
事件对象event无法完美的实现
	触发通过 jQuery 绑定的事件处理函数，而不触发原生的事件，使用.triggerHandler() 来代替
triggerHandler
	triggerHandler不会触发浏览器的默认行为，.triggerHandler( "submit" )将不会调用表单上的.submit()
	.trigger() 会影响所有与 jQuery 对象相匹配的元素，而 .triggerHandler() 仅影响第一个匹配到的元素
	使用 .triggerHandler() 触发的事件，并不会在 DOM 树中向上冒泡。 如果它们不是由目标元素直接触发的，那么它就不会进行任何处理
	与普通的方法返回 jQuery 对象相反，.triggerHandler() 返回最后一个处理的事件的返回值。如果没有触发任何事件，会返回 undefined
```

# 动画

* 隐藏显示
* 上卷下拉
* 淡入淡出
* 动画切换
* 自定义动画
* 核心

```
// jQuery 动画操作-----隐藏显示
hide show
  show与hide方法是修改的display属性，通过是visibility属性布局需要通过css方法单独设置
  如果使用!important，比如display: none !important，如果你希望.show()方法正常工作，必须使用.css('display', 'block !important')重写样式
  如果让show与hide成为一个动画，那么默认执行动画会改变元素的高度，高度，透明度
toggle( [duration ] [, complete ] )
```

```
// jQuery 动画操作-----上卷下拉
slideDown 用滑动动画显示一个匹配元素
slideUp
slideToggle
```

```
// jQuery 动画操作-----淡出
fadeOut 淡出
fadeIn 淡入
fadeToggle 淡入淡出切换
fadeTo .fadeTo( duration, opacity ,callback) 定制透明度等
```

```
// jQuery 动画操作-----切换
实现显示和隐藏的方法
  改变样式display为none
  设置位置高度为0
  设置透明度为0
```

```
// jQuery 动画操作-----自定义动画
animate 
	.animate( properties ,[ duration ], [ easing ], [ complete ] )
	.animate( properties, options )
		options参数：
      duration - 设置动画执行的时间
      easing - 规定要使用的 easing 函数，过渡使用哪种缓动函数
      step：规定每个动画的每一步完成之后要执行的函数
      progress：每一次动画调用的时候会执行这个回调，就是一个进度的概念
      complete：动画完成回调
如果提供一个以+= 或 -=开始的值，那么目标值就是以这个属性的当前值加上或者减去给定的数字来计算的
  .animate({ 
      left: '+=50px'
  }, "slow");
  
stop
  .stop( [clearQueue ], [ jumpToEnd ] )
  .stop( [queue ], [ clearQueue ] ,[ jumpToEnd ] )
stop()：只会停止第一个动画，第二个第三个继续
stop(true)：停止第一个、第二个和第三个动画
stop(true ture)：停止动画，直接跳到第一个动画的最终状态 
```

```
// jQuery 动画操作-----核心
jQuery.each(array, callback )
jQuery.each( object, callback )
callback
  function(index, value) {
    //index是索引,也就是数组的索引
    //value就是数组中的值了
	}；
	
jQuery.inArray( value, array ,[ fromIndex ] )函数用于在数组中搜索指定的值，并返回其索引值。如果数组中不存在该值，则返回 -1。
jQuery.trim()函数用于去除字符串两端的空白字符
.get( [index ] ) 通过jQuery获取某元素合集，如果想进一步在合集中找到第n个dom元素单独处理，可以通过get方法
	get方法还可以从后往前索引，传递一个负索引值，注意的负值的索引起始值是-1
index
  .index()  如果不传递任何参数给 .index() 方法，则返回值就是jQuery对象中第一个元素相对于它同辈元素的位置
  .index( selector ) 如果在一组元素上调用 .index() ，并且参数是一个DOM元素或jQuery对象， .index() 返回值就是传入的元素相对于原先集合的位置
  .index( element ) 如果参数是一个选择器， .index() 返回值就是原先元素相对于选择器匹配元素的位置。如果找不到匹配的元素，则 .index() 返回 -1
```

# 优化

jquery 抽出来，使用时只会取一次

# 键盘

## 回车

1. `returnValue`

```
//已经被弃用
表示该事件的默认操作是否已被阻止。默认情况下，它被设置为 true，即允许进行默认操作。将该属性设置为 false 即可阻止默认操作。
//现在
preventDefault()
//查值
event.defaultPrevented返回一个布尔值，表明当前事件是否调用了 event.preventDefault()方法。
```

2. `keycode`弃用，用`key`
3. 

# 跳转

在 JavaScript 中若要撰寫網頁轉址程式非常容易，有寫過的人都知道要用 [location](http://msdn.microsoft.com/en-us/library/ms535866(VS.85).aspx?WT.mc_id=DT-MVP-4015686).[href](http://msdn.microsoft.com/en-us/library/ms533867(VS.85).aspx?WT.mc_id=DT-MVP-4015686) 屬性，而另外還有一個 [location](http://msdn.microsoft.com/en-us/library/ms535866(VS.85).aspx?WT.mc_id=DT-MVP-4015686).[replace](http://msdn.microsoft.com/en-us/library/ms536712(VS.85).aspx?WT.mc_id=DT-MVP-4015686) 可用，功能差不多，但在實務上應用是有差異的，我今天就來說說它們之間的差異。

首先給 JavaScript 初學者幾個清楚的範例，避免寫錯程式。

[location](http://msdn.microsoft.com/en-us/library/ms535866(VS.85).aspx?WT.mc_id=DT-MVP-4015686) 物件的 [href](http://msdn.microsoft.com/en-us/library/ms533867(VS.85).aspx?WT.mc_id=DT-MVP-4015686) 是個**屬性**，屬性需要直接指定其值，例如：

```
location.href = 'http://blog.miniasp.com/';
```



[location](http://msdn.microsoft.com/en-us/library/ms535866(VS.85).aspx?WT.mc_id=DT-MVP-4015686) 物件的 [replace](http://msdn.microsoft.com/en-us/library/ms536712(VS.85).aspx?WT.mc_id=DT-MVP-4015686) 是個**方法(method)**或**函式(function)**，需要加上刮號傳入參數，例如：

```
location.replace('http://blog.miniasp.com/');
```



接著，我用一個簡單的例子說明**這兩個用法**與**直接下連結**的差別：

```
<a href="a.htm">a.htm</a>
|
<a href="#" onclick="location.href='a.htm'">location.href='a.htm';</a>
|
<a href="#" onclick="location.replace('a.htm')">location.replace('a.htm')</a>
```



**1. 直接用 <a href="a.htm"> 連結的作法**

- 瀏覽器會送出 Referer 這個 HTTP Header
- 瀏覽器會紀錄連結的歷史紀錄 ( 好讓瀏覽器的 上一頁 、 下一頁 按鈕可以運作 )

**2. 透過 JavaScript 的 location.href 指派網址**

- 瀏覽器不會送出 Referer 這個 HTTP Header
- 瀏覽器會紀錄連結的歷史紀錄 ( 好讓瀏覽器的 上一頁 、 下一頁 按鈕可以運作 )

**3. 透過 JavaScript 的 location.replace 傳入網址**

- 瀏覽器不會送出 Referer 這個 HTTP Header
- 瀏覽器不會紀錄連結的歷史紀錄! ( 瀏覽器將無瀏覽歷史紀錄 )

我需要在網頁下載檔案，但有經驗的人應該知道，通常的作法有幾種：

1. 開新視窗進行下載動作
   - 優點：運氣好時，檔案會直接開在 Browser 視窗中上。
   - 缺點：有時後檔案下載了，但是視窗會殘留！
2. 在本頁直接下載
   - 優點：運氣好時，檔案會直接下載。
   - 缺點：若遇到檔案會直接在 User 的瀏覽器直接開啟的狀況，有可能會讓 User 等到檔案下載完才會開啟，例如有些 PDF 檔非常大，下載的這段時間 Browser 會卡死不能動。
3. 透過一個隱藏的 Frame 或 IFrame 進行下載 ( 直接透過 <a> 標籤的 target 指定 iframe 目標 )
   - 優點：運氣好時，檔案會直接下載，運氣不好時也不會殘留視窗。
   - 缺點：運氣不好時檔案就看不到了，不過可以透過設定 [Content-Disposition](http://www.ietf.org/rfc/rfc2183.txt) 強制下載。
   - 缺點：當使用者連續下載兩個檔案，又按下瀏覽器上的「回上一頁」時，會重新下載上一個檔案！
4. 透過一個隱藏的 Frame 或 IFrame 進行下載 ( 透過 location.href 指定下載目標 )
   - 優點：運氣好時，檔案會直接下載，運氣不好時也不會殘留視窗。
   - 缺點：運氣不好時檔案就看不到了，不過可以透過設定 [Content-Disposition](http://www.ietf.org/rfc/rfc2183.txt) 強制下載。
   - 缺點：當使用者連續下載兩個檔案，又按下瀏覽器上的「回上一頁」時，會重新下載上一個檔案！
5. 透過一個隱藏的 Frame 或 IFrame 進行下載 ( 透過 location.replace 指定下載目標 )
   - 優點：運氣好時，檔案會直接下載，運氣不好時也不會殘留視窗。
   - 優點：當使用者連續下載兩個檔案，又按下瀏覽器上的「回上一頁」時，因為在瀏覽器中該 frame 並無瀏覽紀錄，所以不會發生重複下載的動作。
   - 缺點：運氣不好時檔案就看不到了，不過可以透過設定 [Content-Disposition](http://www.ietf.org/rfc/rfc2183.txt) 強制下載。



由此可知，第 5 種指定下載的方法是最好的！雖然是一個簡單的差異，但時實務上就是有那麼一點 "**眉角**" (台語, 小技巧的意思)，一點小經驗分享。^_^

# 计算各种高度长度

## Dom

height()：height
innerHeight()：height + padding
outerHeight()：height + padding + border
outerHeight(true)：height+padding+border+margin

$ele.Offset().top :在页面上，元素ele上方的`position：fixed`的元素会被计算

1.  **无论元素的父元素或祖先元素的position属性是什么，总是计算相对于文档的位置**。
2. 元素本身的margin会被计算为偏移量，padding不会计算，所以要设置滚动特效的话用margin

`display: none	`的元素取不到各种长度，因为它不占空间



# 过滤选择器

- 一、基本过滤选择器(重点掌握下列八个)
  :first 选取第一个元素 $("div:first").css("color","red");
  :last 选取最后一个元素 $("div:last").css("color","red");
  :not 除去指定的选择器外的元素 $("div:not").css("color","red");
  :even 选取索引号是偶数的元素 $("div:even").css("color","red");
  :odd 选取索引号是奇数的元素 $('div:odd').css("color","red");
  :eq(index) 选取第index个元素 $('div:eq(5)').css("color","red");
  :gt(index) 选取索引号大于index的元素 $('div:gt(8)').css("color","red");
  :lt(index) 选取索引号小于index的元素$('div:lt(3)').css("color","red");

  二、属性过滤选择器（六个必须记住）
  (1):[attribute] 选取拥有此属性的元素 $('div:[attribute]').css('background-color','red');
  (2):[attribute=value] 选取属性值为value的元素 $('div:[attribute=text]')
  (3):[attribute!=value] 选取属性值不为value的元素 $('div:[attribute!=text]')
  (4):[attribute^=value] 选取属性值以value开始的元素 $('div:[attribute^=text]')
  (5):[attribute$=value] 选取属性值以value结尾的元素 $('div:[attribute$=text]')
  (6):[attribute*=value] 选取属性值包含value的元素 $('div:[attribute*=text]')

  三、内容过滤选择器（四个必须记住）
  :contains 选取包含文本的text的元素 $('div:contains(.mini)').css("color","red");
  :has(id选择器名称、Class选择器名称) 选取含有选择器所匹配的元素 $('div:has(.mini)').css("color","red");
  :empty 选取不包含子元素的元素 $('div:empty').css("color","red");
  :parent 选取包含子元素的元素 $('div:parent').css("color","red");

  四、子元素过滤选择器（记住八个）
  (1):nth-child(index) 选取每个父节点下第index个元素、偶数元素或奇数元素。
   $('div.one :nth-child(8)').css('background-color','#900');
  (2):first-child 选取每个父元素下的第一个子元素 $('div.one :first-child(8)').css('color','red');
  (3):last-child 选取每个父元素下的最后一个子元素 $('div.one :last-child(8)').css('color','red');
  (4):only-child 选取只有一个子元素的元素 $('div.one :only-child(8)').css('color','red');
  (5):enabled 选取所有可用的元素 $('#form1 input:enabled').val("vaotoo.com");
  (6):disabled 选取所有不可用的元素 $('#form1 input:disabled').val("vaotoo.com");
  (7):checked 选取所有被选中的元素(一般为（HTML中）RadioButton、CheckBox标记);
   $('input:checked').text("vaotoo.com");
  (8):selected 选取被选中的选项元素（select下拉列表标记中的option=select）
  $('select:selected').each(function(){
   str += $(this).text()+",";
  });

  五、可见性过滤选择器(两个)
  :hidden
  :visibal





## jquery ui

扩展动画