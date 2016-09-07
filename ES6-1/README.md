<h1>ES6的新特性</h1>
<hr/>
<strong>ES6新增的关键字</strong>
<ul>
<li><strong>新增的let关键字（申明变量,与var相似）</strong><br><hr/>
    1、用let变量仅在自己的块级作用域起作用，出了这个块级作用域就不起作用<br/>
    <img src="images/1.png"/> &nbsp;将var换成let后：&nbsp;
    <img src="images/2.png"/><hr/>
    2、用let变量不会出现变量提升的现象<br/>
    <img src="images/3.png"/> var的变量提升 相当于<img src="images/3.1.png"/>
    <br/>换成 let后 a的值是not defined<br/>
    <img src="images/4.png" /><hr/>
    3、注意事项：同一个块级内不能重复定义否则会报错<br/>
    函数内不能用let申明函数的参数也会报错<br/>
    <img src="images/5.png"/><br/>
    总结：用let声明变量只在块级作用域起作用，适合在for循环使用，也不会出现变量提升现象。同一个代码块内，不可重复声明的相同变量，不可重复声明函数内的参数。<br/>
</li>
<li><strong>ES6新增关键字const（申明变量,与let相似，但专门是用来申明常量的,就是申明不可改变的常量）</strong><br/>
    <hr/>
    特点：1、不可修改<br/>
    <img src="images/6.png"/><br/>
    2:只在块级作用域内有作用与let一样;<br/>
    <img src="images/7.png"/><br/>
    3:不存在变量提升与let一样;<br/>
    <img src="images/8.png"/><br/>
    4:不可重复声名同一个变量与let一样;<br/>
    <img src="images/9.png"/><br/>
    5:声名后必须赋值;<br/>
    <img src="images/10.png"/><br/> 
    6：如果常量是一个对象呢？（传址赋值）<br/>
    <img src="images/11.png"/>     
</li>
<li><strong>解构赋值(从数组和对象中提取值，对变量进行赋值,这种赋值成为解构赋值)</strong><br/>
    <hr/>
    1,先了解解构赋值与传统赋值<br/>
    <img src="images/12.png" /><br/>
    2,解构赋值可以嵌套<br/>
    <img src="images/13.png" /><br/>
    3,不完全赋值<br/>
     <img src="images/14.png" /><br/>
    4,赋值不成功，变量的值为undefined<br/>
     <img src="images/14.png" /><br/>
    5,允许设定默认值<br/>
     <img src="images/15.png" /> <br/>
    6,对象的解构赋值(如果变量找不到相同的属性则值为undefined) <br/>
     <img src="images/17.png" />也可以用变量名与属性名不一样的结构赋值<img src="images/18.png"/><br/>
    7,字符串的结构赋值<br/>
    <img src="images/16.png"/><hr/>
    1,解构赋值的用处(交换临时变量):
    <img src="images/19.png" /><br/>
    2,提取函数返回的多个值：<img src="images/20.png"/><br/>
    3,定义函数参数：<img src="images/21.png"/><br/>
    4,设置函数参数的默认值：<img src="images/22.png"/>
</li>
</ul>
