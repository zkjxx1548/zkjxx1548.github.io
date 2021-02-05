海盗模型

买点：追踪用户行为数据



合作方式：

积分商城

员工福利





的价格

b2b2c

低频，复购

贵



关注的数据：

线上成交数据。





vx小程序开发工具

门店端需要注册账号

consumer用户



小程序是在dist里面

下一个数据库，转发，连dev

hook















buddy见面会：

按时按质完成任务，

敏捷实践参与

个人期望：

短期：一个月*   zeiss项目

react 小程序 antd umi  toro

* React:   项目高级用法*（做做action，量化学习结果），原理， cr建议   《roll to react》

敏捷： 主动参与

中期：半年*

* 技术储备：vx小程序*（框架等）、vx公众平台、自己的兴趣点*、

长期：2年



（）

1. 短期和中期有action，每个期望至少一个action。
2. 脑图
3. 自己摸摸，感觉有问题的地方列一列，



code review ：

matoma





cdn，缩小原图













## 开卡

ze-682

1. 分析ac
2. 找ba，qa，后端，buddy开卡

### 第一张卡682问题

1. Select组件的复写

   ```
   全局覆盖
   ```

5. 渠道Select公用组件，是在组件处请求一次数据，还是在用的时候请求渠道方数据（请求写在Select里面还是外面）

   ```
   在Select组件内部请求数据
   ```

6. 数组直接用[]取不到

   ```
   异步问题,导致直接取值是空的
   ```

7. 后端接口channel-partner/bill报系统错误

   ```
   后端写的get，前端调用的post
   ```

9. Select传值问题

```
用&在子元素继承，再在子元素中用props赋值
export default (props: SelectProps & { onChangeSelect: any}) => {
	const { onChangeSelect } = props;
}
```

6. 门店名称 过长 hover

   ```
   确定下max-width
   ```

   

7. 切换渠道时，日期没有重置

8. 测试用例

### 第二张卡492问题



