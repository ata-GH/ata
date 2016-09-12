<h3>javascript的this学习</h3>
<div>(this是JavaScript语言的一个关键字)调用this时，this指得是调用函数的那个对象，<br/>
它表示函数运行时，自动生成的一个内部对象，只能在函数内部使用。</div>
<ul>
<li><strong>情况一：纯粹的函数调用</strong><br/>
<div>这是函数的最通常用法，属于全局性调用，因此this就是代表全局对象Global</div>
<img src="images/4.png"/><br/>
</li>
<li><strong>情况二：作为对象方法的调用</strong><br/>
<div>函数可以作为某个对象的方法调用，这是的this就指这个上级对象</div>
<img src="images/5.png"/><br/>
</li>
<li><strong>情况三：作为构造函数的调用</strong><br/>
<div>构造函数，就是通过这个函数new一个新的对象(object),这是 this值得就是这个新对象</div>
<img src="images/6.png"/><br/>
</li>
<li><strong>情况四：apply的调用</strong><br/>
<div>apply()是函数的一个方法，他的作用是改变函数的调用对象，他的第一个参数就表示改变后的调用这个函数的对象，因此this指的是这第一个参数。</div>
<img src="images/7.png"/><br/>
</li>
</ul>
<h3>javascript的闭包学习</h3>
<div>闭包就是能够读取其他函数内部变量的函数。</div>
<hr/>
<div>
1,函数内部可以直接读取全局变量<br/>
2,在函数外部无法自然读取函数内部的局部变量<br/>
举个简单的闭包栗子：<br/>
<img src="https://raw.githubusercontent.com/Huaxi100FE/Blog/ata/jQuery插件学习1/images/1.png"/><br/>
再看个简单的栗子：<br/>
<img src="https://raw.githubusercontent.com/Huaxi100FE/Blog/ata/jQuery插件学习1/images/2.png"/><br/>
全局变量相当于在window下面<br/>
<img src="https://raw.githubusercontent.com/Huaxi100FE/Blog/ata/jQuery插件学习1/images/3.png"/><br/>
</div>
<h3>javascript的面向对象编程(一)：封装</h3>
<div>把'属性'和'方法'，封装成一个对象，甚至从原型对象生成一个实例对象的一些方法</div>
<ul>
<li><strong>一，构造函数模式</strong><br/>
    <div>javascript提供了一个构造函数(constructor)模式。<br/>
    就是一个普通函数，但内部使用了this变量，对构造函数使用new运算符，就能生成实例，并且this变量会绑定在实例对象上</div>
    <img src="https://raw.githubusercontent.com/Huaxi100FE/Blog/ata/jQuery插件学习1/images/8.png"/>
</li>
<li><strong>Prototype模式 </strong><br/>
    <br/>
    <div>1,构造函数的方法很好用，但是如果有相同的属性或者方法就会存在内存的浪费</div>
    <img src="https://raw.githubusercontent.com/Huaxi100FE/Blog/ata/jQuery插件学习1/images/9.png"/>
    <br/>
    <div>2,javascript规定每一个构造函数都有一个prototype属性，指向另一个对象，这个对象的所有属性和方法，都会被构造函数的实例继承。</div>
    <img src="https://raw.githubusercontent.com/Huaxi100FE/Blog/ata/jQuery插件学习1/images/10.png"/>
    <div>3,prototype的验证方法(javascript定义了一些辅助方法，帮助大家使用它)</div>
    <div>3.1,isPrototype()用来判断对象和某个实例之间的关系。</div>
    <img src="https://raw.githubusercontent.com/Huaxi100FE/Blog/ata/jQuery插件学习1/images/11.png"/>
    <div>3.2,hasOwnProperty()用来判断一个属性到底是本地属性，还是继承自prototype对象的属性。</div>
    <img src="https://raw.githubusercontent.com/Huaxi100FE/Blog/ata/jQuery插件学习1/images/12.png"/>
    <div>3.3,in用来判断某个实例是否含有此属性，不管是本地还是其他还是继承自prototype对象的属性。</div>
    <img src="https://raw.githubusercontent.com/Huaxi100FE/Blog/ata/jQuery插件学习1/images/13.png"/>
</li>
</ul>
<h3>javascript的面向对象编程(二)：构造函数的继承</h3>
<div>对象与对象之间的继承</div>
假如现在有一'动物'的构造函数
<pre>
function Animal(){ <br/>
  this.species="动物";<br/>
}<br/></pre>
现在还有一个'猫'对象的构造函数。
<pre>
function Cat(name,color){<br/>
    this.name=name;<br/>
    this.color=color;<br/>
}<br/>
</pre>
如果要让'猫'继承'动物'的属性或者方法呢（请看下面）
<ol>
<li><strong>、构造函数绑定</strong><br/>
<div>用call或者apply方法，将父对象的构造函数绑定在子对象上，即在子对象构造函数中加一行</div>
<pre>
function Cat(name,color){<br/>
    Animal.apply(this,arguments);<br/>
    this.name=name;<br/>
    this.color=color;<br/>
}<br/>
var cat1=new Cat("大黄","黄色");<br/>
var cat2=new Cat("小黄","白色");<br/>
console.log(cat1.species);//动物<br/></pre>
<img src="https://raw.githubusercontent.com/Huaxi100FE/Blog/ata/jQuery插件学习1/images/14.png"/>
</li>
<li><strong>、prototype模式</strong><br/>
<div>如果'猫'的prototype对象，指向一个Animal的实例，那么所有猫的实例就继承了Animal的属性了</div>
<pre>
function Cat(name,color){<br/>
    this.name=name;<br/>
    this.color=color;<br/>
}<br/>
Cat.prototype=new Animal();<br/>
//完全删除了prototype对象原先的值，然后将Cat的prototype对象指向一个Animal的实例<br/>
Cat.prototype.constructor=Cat;<br/>
//任何一个prototype对象都有一个constructor属性，指向它的构造函数。如果没有"Cat.prototype = new Animal();"这一行，Cat.prototype.constructor是指向Cat的；<br/>
//*****(以后都应注意)加了这一行以后，Cat.prototype.constructor指向Animal。<br/>
var cat1=new Cat("大黄","黄色");<br/>
console.log(cat1.species);//动物<br/></pre>
<img src="https://raw.githubusercontent.com/Huaxi100FE/Blog/ata/jQuery插件学习1/images/15.png"/>
</li>
<li>
<strong>、直接继承prototype模式</strong><br/>
<div>这一种是对上一种的改进，由于Animal对象中，不变的属性都可以直接写入Animal。prototype。所以，我们也可以是让Cat();方法跳过Animal()；直接继承Animal.prototype</div>
<pre>
function Animal(){}<br/>
Animal.prototype.species="动物";<br/>
//然后将Cat的prototype对象指向Animal的prototype对象。<br/>
function Cat(name,color){<br/>
    this.name=name;<br/>
    this.color=color;<br/>
}<br/>
Cat.prototype=Animal.prototype;<br/>
Cat.prototype.constructor=Cat;
var cat1=new Cat("大黄","黄色");
console.log(cat.species);//动物
</pre>
<div>以前一种方法比，这样做的效率很高，不要执行和建立Animal实例了，比较省内存，缺点是Cat和Animal现在指向了同一个对象，那么对Cat.prototype修改，也同时会影响到Animal.prototype。</div>
<pre>
//看这一句
Cat.prototype.constructor=Cat;
console.log(Animal.prototype.constructor);//Cat
</pre>
<img src="https://raw.githubusercontent.com/Huaxi100FE/Blog/ata/jQuery插件学习1/images/16.png"/>
</li>
<li>
<strong>、利用空对象作为中介</strong><br/>
<div>由于"直接继承prototype"存在上述缺点，所以就有了利用空对象作为中介。
</div>
<pre>
function Animal(){};<br/>
Animal.prototype.species="动物";<br/>
function Cat(name.color){<br/>
    this.name=name;<br/>
    this.color=color;<br/>
}<br/>
var F=function(){};<br/>
F=Animal.prototype;<br/>
Cat.prototype=new F();<br/>
Cat.prototype.constructor=Cat;<br/>
var cat1=new Cat("大毛","黄色");<br/>
console.log(Cat.constructor===Cat);//true<br/>
console.log(Animal.constructor===Cat);//false<br/>
console.log(cat1.species);//动物<br/>
</pre>
我们将上面的方法封装成一个方法
<pre>
function extend(Child,Parent){
    var F=function(){};<br/>
    F=Parent.prototype;<br/>
    Child.prototype=new F();<br/>
    Child.prototype.constructor=Child;<br/>
}
</pre>
<img src="https://raw.githubusercontent.com/Huaxi100FE/Blog/ata/jQuery插件学习1/images/17.png"/>
</li>
<li>
<strong>、拷贝继承</strong><br/>
<div>
我们也可以采用'纯粹的拷贝'方法实现继承。简单的说，就是把父对象的所有属性和方法都拷贝进子对象。<br/>
我们还是把Animal的所有不变的属性，都放到prototype上面
</div>
<pre>
function Animal(){}<br/>
Animal.prototype.species="动物";<br/>
function Cat(name.color){<br/>
    this.name=name;<br/>
    this.color=color;<br/>
}<br/>
function extend(Child,Parent){<br/>
    var p=p.prototype;<br/>
    var c=Child.prototype;<br/>
    for(var i in p){<br/>
        c[i]=p[i];<br/>
    }<br/>
}<br/>
extend(Cat,Animal);<br/>
var cat1=new Cat("大毛","黄色");<br/>
console.log(cat1.species);</pre>
</li>
<img src="https://raw.githubusercontent.com/Huaxi100FE/Blog/ata/jQuery插件学习1/images/18.png"/>
</ol>
<h3>javascript的面向对象编程(三)：非构造函数的继承</h3>
<ol>
<li><strong>什么是'非构造函数'的继承</strong><br/>
比如，现在有一个对象，叫做'中国人';
<pre>
var Chinese={<br/>
    nation:'中国'<br/>
}
</pre>
现在还有一个对象，叫做'医生';
<pre>
var Doctor={<br/>
    career:'医生'<br/>
}
</pre>
<div>怎么才能让医生继承中国人被，这两个都是普通函数，无法使用构造函数继承，下面就介绍一些思路</div>
</li>
<li>
<strong>object()方法</strong><br/>
<pre>
var Chinese={<br/>
    nation:'中国'<br/>
}
function object(obj){
    function F(){}
    F.prototype=obj;
    return new F();
}
var Doctor=object(chinese);
Doctor.career="医生";
console.log(Doctor.nation);//中国
</pre>
<img src="https://raw.githubusercontent.com/Huaxi100FE/Blog/ata/jQuery插件学习1/images/19.png"/>
</li>
<li>
<strong>浅拷贝方法</strong><br/>
<div>
除了使用'prototype链'以外，还有另一种思路，把父对象的属性，全部拷贝给子对象，也能实现继承
</div>
<pre>
function extend(p){<br/>
    var c={};<br/>
    for(var i in p){<br/>
        c[i]=p[i];<br/>
    }<br/>
    return c;<br/>
}<br/>
var Doctor=extend(chinese);<br/>
Doctor.career="医生";<br/>
console.log(Doctor.nation);//中国<br/>
</pre>
<div>
但是这样拷贝存在一个问题,如果父对象的属性等于数组或另一个对象，那么实际上，子对象获得的只是一个内存地址，而不是真正拷贝，因此存在父对象被篡改的可能。
</div>
<pre>
chinese.birthPlace=["北京","上海","成都","广州"];<br/>
Doctor.birthPlace.push("南充");<br/>
console.log(Doctor.birthPlace);//["北京","上海","成都","广州","南充"];<br/>
console.log(chinese.birthPlace);//["北京","上海","成都","广州","南充"];<br/>
</pre>
<img src="https://raw.githubusercontent.com/Huaxi100FE/Blog/ata/jQuery插件学习1/images/20.png"/>
</li>
<li>
<strong>深度拷贝方法</strong><br/>
<div>
所谓"深拷贝"，就是能够实现真正意义上的数组和对象的拷贝，它的实现并不难，只要递归调用"浅拷贝"就OK
</div>
<pre>
function deepCopy(Child,Parent){<br/>
    var c=Child || {};<br/>
    for(var i in Parent){<br/>
        if(typeof p[i]=='object'){<br/>
            c[i]=(p[i].constructor === Array?[]:{})<br/>
            deepCopy(c[i],p[i]);<br/>
        }else{<br/>
            c[i]=p[i];<br/>
        }<br/>
    }<br/>
    return c;<br/>
}<br/>
var Doctor=deepCopy(chines);<br/>
Doctor.birthPlaces.push('南充');<br/>
console.log(Doctor.birthPlace);//["北京","上海","成都","广州","南充"]<br/>
console.log(chinese.birthPlace);//["北京","上海","成都","广州"]
</pre>
<img src="https://raw.githubusercontent.com/Huaxi100FE/Blog/ata/jQuery插件学习1/images/21.png"/>
</li>
</ol>























