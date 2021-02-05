# 定义

1. 模版语言

2. `<标签名>{{对象名}}<标签名>`，会替换为对象名的值，可以使用`.`来嵌套对象

3. ```
   {{#with person}}
   {{firstname}} {{lastname}}
   {{/with}}
   注入到对象的属性中，使你可以访问其属性。firstname指person.firstname
   ```

4. 迭代

   ```
   <ul class="people_list">
     {{#each people}}
       <li>{{this}}</li>
     {{/each}}
   </ul>
   ```

5. 控制

   ```
   {{firstname}} {{loud lastname}}
   Handlebars.registerHelper('loud', function (aString) {
       return aString.toUpperCase()
   })
   lastname会大写
   ```

6. 助手代码

   ```
   HandleBars.registerHelper
   Handlebars.escapeExpression
Handlebars.SafeString
   Handlebars.registerPartial
   
   
   lookup
   {{> @partial-block }}
   people as |person|
   {{#*inline}} *** {{/inline}}
   {{#noop}}{{/noop}}  接收上下文，返回字符串
   {{#list}}{{/list}}
   {{#if}}{{else}}{{/if}}
   ```

7. 块助手代码

   ```
   d
   ```

8. RAW代码块

   ```
   {{{{raw-loud}}}}
     {{bar}}
   {{{{/raw-loud}}}}
   处理不经由 mustache 模板处理的代码块,不解释其内容。
   ```

9. 内置助手代码

   ```
   #if 如果其参数返回 false、undefined、null、""、 0 或者 []，Handlebars 将不会渲染该块(六种情况)。
   #unless   if 助手代码相反
   #each  你可以选择提供一个 else，该代码块将只会在列表为空时显示。
   			可以选择通过 {{@index}} 引用当前循环的索引。
   			可以使用 {{@key}} 引用当前的键名：
   
   ```

   1. `#with`

      ```handlebars
      {{#with city as | city |}}
        {{#with city.location as | loc |}}
          {{city.name}}: {{loc.north}} {{loc.east}}
        {{/with}}
      {{/with}}
      
      得复杂的模板可以提供比 n ../ 深度引用更清晰的代码。
      ```

   2. `lookup`

   3. `log`

      ```
      {{log "debug logging" level="debug"}}
      可以使用 level 参数设置日志级别。支持的值为 debug、info、warn 和 error（info 是默认值）。
      ```

10. 钩子

    1. `helperMissing`

       ```
       // 触发
       Mustache 表达式不是一个已经注册的助手代码，并且
       不是当前上下文的计算属性。
       ```

    2. blockHelperMissing

       ```
       // 触发
       代码块表达式尝试调用未注册的助手代码，
       但是这个助手代码的名称与当前计算上下文中的某个属性相同。
       ```

       

