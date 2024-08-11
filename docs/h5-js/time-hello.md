# 时间问候组件

使用时间问候文本，当用户访问您的网站时，您可以在您的页面中显示不同的问候语。

## 开始构建

以下是一个基础的例子：

```html
<h2 id="greeting"></h2>
```

```js
var now = new Date();
    	var hour = now.getHours();
    	var greeting = document.getElementById('greeting');

    	if (hour >= 7 && hour < 12) {
    	    greeting.textContent = "上午好！";
    	} else if (hour >= 12 && hour < 13) {
    	    greeting.textContent = "中午好！";
    	} else if (hour >= 13 && hour < 19) {
        greeting.textContent = "下午好！";
    	} else if (hour >= 19 && hour < 24) {
    	    greeting.textContent = "晚上好！";
    	} else {
    	    greeting.textContent = "凌晨了，早点睡吧！";
    	}
```

这个例子使用了 JavaScript 的 Date 对象，它提供了获取当前时间的方法。然后，它根据当前时间段显示不同的问候语。

## 直接引用

请确保您所在的地区能够访问我们的网站，然后您可以在您的网站中加入这两行代码。
```html
<h2 id="greeting"></h2>
```

```html
<script src="https://sysyz-itcom.github.io/doc/components/js/time-greeting.js"></script>
```