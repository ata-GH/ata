<h1>canvas 的用户交互</h1>
<hr/>
<h2>事件和事件执行</h2>
<h3>先明白listener与handler两个关键字<br/>
listener(监听器)决定一件事发生时是否作出反应<br/>
handler(执行者)一个函数，当时间发生是被调用。
</h3>
<ul style="font-size:'16px';">
<li>原生的监听事件:addEventListener(type,handler[,useCapture])<br/>
type:事件类型<br/>
handler:事件执行函数<br/>
useCapture:可选，为布尔值false/true,表示在冒泡/捕获阶段执行
</li>
<li>原生移除事件：removeEventListener(type,handler[,useCapture])<br/>
type:事件类型<br/>
handler:事件执行函数<br/>
useCapture:可选，为布尔值false/true,表示在冒泡/捕获阶段执行
<p style="color:red;">
添加监听事件的handler是一个整个功能函数，而移除监听事件时，handler只能是写函数名,不能写整个功能函数，
也就是说在执行添加监听事件时，我们可以将需要执行的事件写在监听函数之外并进行命名，这样在后续的代码中，如果需要移除事件可以直接将函数名传入handler处即可。
</p>
</li>
</ul>
<hr/>
<h3>鼠标事件</h3>
<p style="font-size:'16px';">
mousedown<br/>
mouseup<br/>
mousewheel<br/>
mouseover<br/>
mouseout<br/>
click<br/>
dbclick<br/>
每一鼠标事件都都包含两个属性来决定当前鼠标的位置：pageX和pageY，<span style="color:red;">通过pageX和pageY
(获取触点相对于文档区域左上角的距离，会随着页面的滚动而改变，但是ie6/7/8不支持)</span>，
还有canvas的偏移位置，就能计算出鼠标具体在canvas元素的那个位置。
<span style="color:red;">所以考虑到兼容性可以使用clientX，clientY(获取触电相对于浏览器的可视区域左上角的距离，不会随着浏览器的滚动儿改变)</span><br/>
封装一个place.js来获取pageX与pageY
</p>
<h3>键盘事件</h3>
<p style="font-size:'16px';">
keydown<br/>
keyup<br/>
</p>
<hr/>
<h3>触摸事件</h3>
<p style="font-size:16px;">
touchstart<br/>
touchend<br/>
touchmove<br/>
触摸事件中，手指充当鼠标的作用，同样我们最关心当前触摸点的位置，和封装的captureMouse方法一样，我们
再次封装一个captureTouch方法。
</p>
<hr/>
