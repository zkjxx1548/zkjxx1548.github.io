## flex(Flexible Box)学习

### 定义

1. 对象：任意容器，行内元素（`inline-flex`），Webkit内核浏览器（`-webkit-flex`）
2. 注意：子元素`float`、`clear`、`vertical-align`失效
3. 父类设置`display: flex`，设置或检索弹性盒模型对象的**子元素**如何分配空间。

4. `容器-项目`对应`flex父元素-子元素`
5. 水平-主轴、垂直-交叉轴，项目默认沿**主轴**排列。

### 属性（6+6）

#### 容器（6个）

1. `flex-direction`
   * `row`
   * **`row-reverse`**
   * `column`
   * **`column-reverse`**：主轴为垂直方向，起点在下沿。

2. `flex-warp`
   * `nowrap`（默认）：默认在一行，超屏后设置宽度无用
   * `wrap`
   * `wrap-reverse`
3. `flex-flow`：前两个的缩写
   * 默认是`row nowrap`（顺序没有影响）
4. `justify-content`（主轴）
   * `flex-start`
   * `flex-end`
   * `center`
   * `space-between`
   * **`space-around`**
   * **`space-evenly`**
5. `align-items`（交叉轴）设置不同高
   * `flex-start`：交叉轴起点
   * `flex-end`：交叉轴终点
   * `center`
   * **`baseline`**：项目的第一行文字的基线对齐。
   * **`stretch`**：如果项目未设置高度或设为auto，将占满整个容器的高度。
6. `align-content`（项目只有一根轴线，不起作用）
   * `flex-start`
   * `flex-end`
   * `center`
   * `space-between`
   * `space-around`
   * `stretch`

#### 项目（6个）

1. `order`：定义项目的排列顺序，数值越小，排列越靠前，默认为0。
2. `flex-grow`：分摊剩余空间
3. `flex-shrink`：分摊被压缩的空间
4. `flex-basis`：定义了在分配多余空间之前，项目占据的主轴空间（main size）。默认`auto`（项目本来大小）。
5. `flex`：`grow`、`shrink`和`basis`的简写，默认`0 1 auto`,第一个必写。
6. `align-self`：可覆盖`align-items`的属性，默认值为`auto`，表示继承父元素的`align-items`属性，如果没有父元素，则等同于`stretch`。

## grid

### 画格子

1. grid-template-rows + grid-template-columns
   * fr
   * px
   * repeat
   * minmax

### 放

1. grid-row-start+grid-row-end//grid-column-start+grid-column-end
2. span(扩展)
3. 区域定位：父grid-template-area+子grid-area

### 排列

1. justify-content
2. align-content
3. 配合响应式