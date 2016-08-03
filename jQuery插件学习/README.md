<h3>jQuery插件学习</h3>
<hr/>
<ul>
    <strong>jQuery插件开发的主要三种方式</strong><br/>
    <li>第一种：通过$.extend()来扩展jQuery<br/>
     这种方式就是，向jQuery命名空间或者jQuery身上添加一种静态方法而已，所以通过$.extend()添加的函数时直接通过$.myFunction()来调用。而不需要
     选择DOM元素($('#example').myfunction())。
     <pre>
     $.extend({
         sayHello:function(name){
             console.log('hello,hao are you?'+'\t'+(name?name:'LiLei'));
         }
     });
     $.sayHello('HanMeiMei');//hello,hao are you? HanMeiMei
     </pre>
    </li>
    <li>第二种：通过$.fn 想jQuery添加新的方法<br/>
    这种方式，就是向$.fn上面添加一个方法，和第一种一样但是可以通过DOM元素来调用。
    <pre>
    $.fn.sayGoodBye=function(){
    //在这里this是指jQuery选择的元素 this=$('.testBox')
       this.text('goodbye!!!'+'\t'+this.attr('class'));
    }
    $(".testBox").sayGoodBye();//.testBox的内容变为  goodbye!!!	testBox
    </pre>
    这种方法还可以支持链式调用<br/>
    jQuery有一个非常好用的特性就是支持链式调用，选择好DOM元素可以不断调用其他方法，所以要让插件不打破这种链式调用，只需return以下。
    <pre>
    $.fn.sayGoodBye=function(){
    //在这里this是指jQuery选择的元素
        this.text('goodbye!!!'+'\t'+this.attr('class'));
        return this;
    };
    $(".testBox").sayGoodBye().css({
        'color':'red',
        'font-size':'20px'
    });
    </pre>
    插件接受参数<br/>
    <pre>
    $.fn.myHaHa=function(optinons){
        var defaults={ //默认参数
            'color':'blue',
            'fontSize':'30px'
        };
        var settings= $.extend({},defaults,optinons);//加一个空对象 保护默认参数
        //当给extend方法传递一个以上的参数时，它会将所有参数对象合并到第一个里。同时，如果对象中有同名属性时，
        合并的时候后面的会覆盖前面的。
        this.text('goodbye!!!'+'\t'+this.attr('class'));
        this.css({
            'color':settings.color,
            'font-size':settings.fontSize
        });
        return this;
    };
    $(".myPlugin").myHaHa({  //设置参数 也可以使用默认参数
        'color':'black',
        'fontSize':'60px'
    });
    </pre>
    采用混合构造函数的方式的插件开发<br/>
    <pre>
    var Change=function(ele,opt){ //定义Change构造函数
        this.element=ele;
        this.defaults={
            'color':'blue',
            'fontSize':'30px',
            'textDecoration':'lineThrough'
        };
        this.option= $.extend({},this.defaults,opt);
    };
    Change.prototype={   //采用混合方式 定义changeText方法
        changeText:function(){
            this.element.text('hello everybody!!!'+'\t'+this.element.attr('class'));
            this.element.css({
                'color':this.option.color,
                'fontSize':this.option.fontSize,
                'textDecoration':this.option.textDecoration
            });
            return this.element;
        }
    };
    $.fn.myTest=function (options){  //在插件中使用Change对象
        var changeDemo=new  Change(this,options);
        return changeDemo.changeText(); //使用changeText方法
    };
    $(".changeDemo").myTest({
        'fontSize':'80px',
        'color':'green'
    });
    </pre>
    用自调用匿名函数包裹代码，
    用自定义匿名函数包裹代码可以不会与任何文件的全局变量冲突，这里的变量的作用域只存在函数体内<br/>
    <pre>
    //若是jquery
    $(function(){ 
     // put code here....
     ...
    }())
    //若是一般函数
    ;(function(){ //用自定义匿名函数养成好的习惯 在前面添加一个分号。可以避免紧接着前面忘记分号
    分隔号的情况。
    // put code here....
    ...
    })()
    </pre>
    将系统变量一参数形式传递到插件内部<br/>
    <pre>
    (function($,window){
    //put code here...
    ...
    })(jquery，window)
    </pre>
    </li>
    <li>第三者是通过jquery UI编写的插件 暂时没关注
    </li>
</ul>