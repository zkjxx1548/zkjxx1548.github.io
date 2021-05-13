！语法

inifiite-list

ref用法： 

1. 初始化基本值
2. 替换整个引用（仅仅替换内部值不需要）

ref和reactive的区别

# 初识

1. 用于构建用户界面的渐进式框架，只关心视图层；所有的 DOM 操作都由 Vue 来处理，编写的代码只需要关注逻辑层面即可。
2. 当与[现代化的工具链](https://cn.vuejs.org/v2/guide/single-file-components.html)以及各种[支持类库](https://github.com/vuejs/awesome-vue#libraries--plugins)结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。
   * [现代化的工具链](https://cn.vuejs.org/v2/guide/single-file-components.html)
   * [支持类库](https://github.com/vuejs/awesome-vue#libraries--plugins)

3. 体积小， 压缩33k
4. 高效：虚拟dom操作，在dom渲染之前，根据js计算出dom的操作。
5. 双向数据绑定
6. 引用：
   * cli
   * script：
     1. cdn：UMD版本（vue.js）
     2. 下载vue.js
7. vue使用看起来跟渲染一个字符串模板非常类似，但是 Vue 在背后做了大量工作。数据和 DOM 已经被建立了关联，所有东西都是响应式的

## 实例

1. data对象内所有的property都在响应式系统里（只有当实例被创建时就已经存在于 `data` 中的 property 才是**响应式**）

2. `Object.freeze()`，这会阻止修改现有的 property，也意味着响应系统无法再*追踪*变化。

3. Vue 实例还暴露了一些有用的实例 property 与方法。它们都有前缀 `$`，以便与用户定义的 property 区分开来，如：`$watch`

4. 生命周期：

   所有的生命周期钩子自动绑定 `this` 上下文到实例中，因此你可以访问数据，对 property 和方法进行运算。这意味着**不能使用箭头函数来定义一个生命周期方法** 

   * **beforeCreate**：实例初始化之后（数据观测 (data observer) 和 event/watcher 事件配置之前被调用）

   * **created**：实例创建之后

   * **beforeMount**：在判断了是否有el和template之后

   * **mounted**：实例被挂载后调用，这时 `el` 被新创建的 `vm.$el` 替换了。如果根实例挂载到了一个文档内的元素上，当 `mounted` 被调用时 `vm.$el` 也在文档内。

     注意 `mounted` **不会**保证所有的子组件也都一起被挂载。如果你希望等到整个视图都渲染完毕，可以在 `mounted` 内部使用 [vm.$nextTick](https://cn.vuejs.org/v2/api/#vm-nextTick)

   * **beforeUpdated**:数据更新时调用，发生在虚拟 DOM 打补丁之前

   * **updated**:由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态。如果要相应状态改变，通常最好使用[计算属性](https://cn.vuejs.org/v2/api/#computed)或 [watcher](https://cn.vuejs.org/v2/api/#watch) 取而代之。

     注意 `updated` **不会**保证所有的子组件也都一起被重绘。如果你希望等到整个视图都重绘完毕，可以在 `updated` 里使用 [vm.$nextTick](https://cn.vuejs.org/v2/api/#vm-nextTick)

   * **beforeDestroy**: 实例销毁之前调用。在这一步，实例仍然完全可用。

   * **destroyed**:实例销毁后调用。该钩子被调用后，对应 Vue 实例的所有指令都被解绑，所有的事件监听器被移除，所有的子实例也都被销毁。

   * **errorCaptured**:当捕获一个来自子孙组件的错误时被调用。此钩子会收到三个参数：错误对象、发生错误的组件实例以及一个包含错误来源信息的字符串。此钩子可以返回 `false` 以阻止该错误继续向上传播。

     (err: Error, vm: Component, info: string) => ?boolean

## 模版语法

* 插值：{{}}解释为文本，可处理js，不作用于html attribute上。

* 指令：前缀`v-`,指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM

  可接受参数：在指令名称之后以冒号表示；存在动态参数

  ```js
  <a v-bind:[attributeName]="url"> ... </a>
  ```

  修饰符 (modifier) 是以半角句号 `.` 指明的特殊后缀,用于指出一个指令应该以特殊方式绑定

* 缩写：`v-bind` 和 `v-on` 这两个最常用的指令，提供了特定简写。

## 计算属性和侦听器

模板内的表达式非常便利，但是设计它们的初衷是用于简单运算的。对于任何复杂逻辑，你都应当使用**计算属性**。

不同的是**计算属性是基于它们的响应式依赖进行缓存的**。只在相关响应式依赖发生改变时它们才会重新求值。这就意味着只要 **相关响应式依赖** 还没有发生改变，多次访问**计算属性**会立即返回之前的计算结果，而不必再次执行函数

默认只有getter，也可以有setter

* 侦听器：watch。相比计算属性，当需要在数据变化时执行异步或开销较大的操作时，使用自定义侦听器。

## Class和Style的绑定

数组语法，

# composition API

1. 自动解套：当 ref 作为渲染上下文的属性返回（即在`setup()` 返回的对象中）并在模板中使用时，它会自动解套，无需在模板内额外书写 `.value`：

## setup

setup 作为组件内使用Composition API的入口点，创建实例，初始化props，调用setup，在**beforeCreate**之前。

setup返回：

	1. 对象（属性自动解构）
	2. 函数

setup参数：props没有放在context里面：将 `props` 独立出来作为第一个参数，可以让 TypeScript 对 `props` 单独做类型推导，不会和上下文中的其他属性相混淆。这也使得 `setup` 、 `render` 和其他使用了 TSX 的函数式组件的签名保持一致。

	1. props（不可解构，不可变）
	2. context上下文对象，有些property，其中`attrs`和`slots`可以解构（都是实例上对应项的代理，皆为最新值）

为了获得传递给 `setup()` 参数的类型推断，需要使用 [`defineComponent`](https://composition-api.vuejs.org/zh/api.html#defineComponent)。

## 响应式API

### reactive

接收一个**普通对象**然后返回该**普通对象的响应式代理**, 返回的代理对象**不等于**原始对象.

### ref

接受一个**参数值**并返回一个**响应式且可改变的 ref 对象**。ref 对象拥有一个指向内部值的单一属性 `.value`

> 如果传入 ref 的是一个对象，将调用 `reactive` 方法进行深层响应转换。

当 ref 作为 reactive 对象的 property 被访问或修改时，自动解套，其行为类似普通属性。

从 `Array` 或者 `Map` 等原生集合类中访问 ref 时，不会自动解套。

在调用 `ref` 时传递泛型参数来覆盖默认推导：

### computed

传入一个 getter 函数，返回一个默认不可手动修改的 ref 对象。

或者传入一个拥有 `get` 和 `set` 函数的对象，创建一个可手动修改的计算状态。

```ts
function computed<T>(getter: () => T): Readonly<Ref<Readonly<T>>>
```

### readonly

传入一个对象（响应式或普通）或 ref，返回一个原始对象的**只读**代理。一个只读的代理是“深层的”，对象内部任何嵌套的属性也都是只读的。

### watchEffect

立即执行传入的一个函数，并响应式追踪其依赖，并在其依赖变更时重新运行该函数。

当 `watchEffect` 在组件的 `setup()` 函数或生命周期钩子被调用时， 侦听器会被链接到该组件的生命周期，并在组件卸载时自动停止。

在一些情况下，也可以显式调用返回值以停止侦听：

刷新时机：Vue 的响应式系统会缓存副作用函数，并异步地刷新它们，这样可以避免同一个 tick 中多个状态改变导致的不必要的重复调用。在核心的具体实现中, 组件的更新函数也是一个被侦听的副作用。当一个用户定义的副作用函数进入队列时, 会在所有的组件更新后执行：

请注意，初始化运行是在组件 `mounted` 之前执行的。因此，如果你希望在编写副作用函数时访问 DOM（或模板 ref），请在 `onMounted` 钩子中进行：

如果副作用需要同步或在组件更新之前重新运行，我们可以传递一个拥有 `flush` 属性的对象作为选项（默认为 `'post`, 可以为`'sync', 'pre'...`)

`onTrack` 和 `onTrigger` 选项可用于调试一个侦听器的行为。（仅在开发模式下生效）

`onTrack`: 当一个 reactive 对象属性或一个 ref 作为依赖被追踪时。

`onTrigger`: 依赖项变更导致副作用被触发时。

### Watch

需要侦听特定的数据源，并在回调函数中执行副作用。默认情况是懒执行的，也就是说仅在侦听的源变更时才执行回调。

相比`watchEffect`， `watch`优点：

1. **懒执行**副作用；
2. 更明确哪些状态的改变会触发侦听器重新运行副作用；
3. 访问侦听状态变化前后的值。

侦听器的数据源可以是一个拥有返回值的 getter 函数，也可以是 ref。

和`watchEffect`共享的行为：[停止侦听](https://composition-api.vuejs.org/zh/api.html#手动停止侦听), [清除副作用](https://composition-api.vuejs.org/zh/api.html#清除副作用) (相应地 `onInvalidate` 会作为回调的第三个参数传入)，[副作用刷新时机](https://composition-api.vuejs.org/zh/api.html#副作用刷新时机) 和 [侦听器调试](https://composition-api.vuejs.org/zh/api.html#侦听器调试) 等方面行为一致

## 生命周期钩子函数

只能在setup()期间同步使用，因为它们依赖于内部的全局状态来定位当前组件实例（正在调用 `setup()` 的组件实例）, 不在当前组件下调用这些函数会抛出一个错误。

### 3与2.x的生命周期区别

- `beforeCreate` -> 使用 `setup()`
- `created` -> 使用 `setup()`
- `beforeMount` -> `onBeforeMount`
- `mounted` -> `onMounted`
- `beforeUpdate` -> `onBeforeUpdate`
- `updated` -> `onUpdated`
- `beforeDestroy` -> `onBeforeUnmount`
- `destroyed` -> `onUnmounted`
- `errorCaptured` -> `onErrorCaptured`

区别：

1. beforeCreate和created都使用setup

2. 新增：

   * onRenderTracked
   * onRenderTriggered

   两者都接受一个`DebuggerEvent`, 检查哪个依赖性导致组件重新渲染

## 依赖注入

provide / inject `inject` 接受一个可选的的默认值作为第二个参数。如果未提供默认值，并且在 provide 上下文中未找到该属性，则 `inject` 返回 `undefined`。

如果注入一个响应式对象，则它的状态变化也可以被侦听。

如果使用字符串作为键或没有定义类型的符号，则需要显式声明注入值的类型。

```ts
const foo = inject<string>('foo') // string | undefined
```

## 模版Refs

`root` 暴露在渲染上下文中，并通过 `ref="root"` 绑定到 `div` 作为其 `ref`。 在 Virtual DOM patch 算法中，如果一个 VNode 的 `ref` 对应一个渲染上下文中的 ref，则该 VNode 对应的元素或组件实例将被分配给该 ref。 这是在 Virtual DOM 的 mount / patch 过程中执行的，因此模板 ref 仅在渲染初始化后才能访问。

## 响应式系统工具集

### unref

`val = isRef(val) ? val.value : val` 的语法糖。

```js
function useFoo(x: number | Ref<number>) {
  const unwrapped = unref(x) // unwrapped 一定是 number 类型
}
```

### toRef

`toRef` 可以用来为一个 reactive 对象的属性创建一个 ref。这个 ref 可以被传递并且能够保持响应性。

### toRefs

把一个响应式对象转换成普通对象，该普通对象的每个 property 都是一个 ref ，和响应式对象 property 一一对应。

### isRef

检查一个值是否为一个 ref 对象。

### isProxy

检查一个对象是否是由 `reactive` 或者 `readonly` 方法创建的代理。

### isReactive

检查一个对象是否是由 `reactive` 创建的响应式代理。

如果这个代理是由 `readonly` 创建的，但是又被 `reactive` 创建的另一个代理包裹了一层，那么同样也会返回 `true`

### isReadonly

检查一个对象是否是由 `readonly` 创建的只读代理

## 高级响应式系统API

### customRef

???

### markRaw

显式标记一个对象为“永远不会转为响应式代理”，函数返回这个对象本身。

```js
如果被 markRaw 标记了，即使在响应式对象中作属性，也依然不是响应式的
```

`markRaw` 和下面的 shallowXXX 一族的 API 允许你可选择性的覆盖 reactive readonly 默认 "深层的" 特性，或者使用无代理的普通对象。设计这种「浅层读取」有很多原因，比如：

1. 一些值的实际上的用法非常简单，并没有必要转为响应式，比如某个复杂的第三方类库的实例，或者 Vue 组件对象
2. 当渲染一个元素数量庞大，但是数据是不可变的，跳过 Proxy 的转换可以带来性能提升。

### shallowReactive

只为某个对象的私有（第一层）属性创建浅层的响应式代理，不会对“属性的属性”做深层次、递归地响应式代理，而只是保留原样。

### shallowReadonly

只为某个对象的私有（第一层）属性创建浅层的**只读**响应式代理，同样也不会做深层次、递归地代理，深层次的属性并不是只读的。

### shallowRef

```js
const foo = shallowRef({})
// 更改对操作会触发响应
foo.value = {}
// 但上面新赋的这个对象并不会变为响应式对象
isReactive(foo.value) // false
```

### toRaw

返回由 `reactive` 或 `readonly` 方法转换成响应式代理的普通对象。这是一个还原方法，可用于临时读取，访问不会被代理/跟踪，写入时也不会触发更改。不建议一直持有原始对象的引用。请谨慎使用。



# PPT

1. `setup` before `beforeCteate`

2. `setup`return可以为对象和函数

3. `setup`第一参数`props`，解构失去响应式

4. `props`对象不可变

5. `setup`第二参数`context`

6. ### `reactive`

7. ### `ref`

   作为reactive的属性时，调用将会自动解套

8. ### `computed`

9. ### `readonly`

10. ### `watchEffect`

11. ### `watch`