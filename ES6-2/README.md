<h3>ES6的新特性</h3>
<hr/>
<ol>
<li><strong>ES6的string的特性学习</strong><br/>
    <h4>1，字符串的扩展(模板字符串)</h4>
    传统的字符串实现拼接时，要交变量插入字符串中：<br/>
    <img src="images/1.png" /><br/>
    <h4>2,模板字符串可以定义多行字符串</h4>
    <img src="images/2.png"/><br/>
    但是值得注意的是：模板字符串的所有换行和空格都会保留在输出中<br/>
    <img src="images/3.png"/><br/>
    <h4>3,${}中可以放任意的javascript表达式(可以是表达式，函数的调用，对象的属性)</h4>
    <img src="images/4.png"/>
    <h4>4,字符串的扩展(标签模板)<br/>
    模板指的是上面讲的字符串模板，用反引号定义的字符串；而标签，则指的是一个函数，一个专门处理模板字符串的函数。
    </h4>
    <div>tagfn函数的调用不太一样，分别是arr,v1,v2。这种对应顺序</div>
    <img src="images/5.png"/>
    <h4>5,字符串的扩展(repeat函数)</h4>
    <div>repeat()函数：将目标重复n此，返回一个新的字符串，不影响目标字符串</div>
    <img src="images/6.png"/>
    <h4>6,字符串的扩展(includes()函数)</h4>
    <div>includes()函数:判断字符串是否含有目标字符串，有则返回true，否则返回false，第二个参数可选，表示搜索位置</div>
    <img src="images/7.png"/>
    <h4>6,字符串的扩展(startsWith()函数)</h4>
    <div>startsWith()函数:判断子字符串是否出现在目标字符串的开头位置，是则返回true，否则返回false，第二个参数可选，表示从N位开始</div>
    <img src="images/8.png"/>
    <h4>7,字符串的扩展(endsWith()函数)</h4>
    <div>endsWith()函数:判子字符串是否出现在目标字符串的尾部位置，是则返回true，否则返回false，第二个参数可选，表示针对前N个字符</div>
    <img src="images/9.png"/>
    <h4>8,字符串的扩展(codePointAt()函数)</h4>
    <div>codePointAt()函数:返回字节的十进制数</div>
    <img src="images/10.png"/>
    <h4>9,字符串的扩展(String.fromCodePoint()函数)</h4>
    <div>String.fromCodePoint()函数:函数的参数是一个字符对应的码点，返回的结果就是对应的字符，哪怕这个字符是一个4字节的字符，也能正确实现。</div>
    <img src="images/11.png"/>
    <h4>10,字符串的扩展(String.raw()函数)</h4>
    <div>String.raw()函数:raw是未加工的的意思，所以这个函数时返回字符串最原始的样貌，即使字符串中含有转义符，它都视而不见，直接输出</div>
    <img src="images/12.png"/>
    </li>
</ol>