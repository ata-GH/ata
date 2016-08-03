/**
 * Created by Administrator on 2016/8/3.
 */
$(function(){
    /*例子一*/
    $.extend({
        sayHello:function(name){
            console.log('hello,hao are you?'+'\t'+(name?name:'LiLei'));
        }
    });
    $.sayHello('HanMeiMei');

    /*例子二*/
    $.fn.sayGoodBye=function(){
        //在这里this是指jQuery选择的元素
        this.text('goodbye!!!'+'\t'+this.attr('class'));
        return this;
    };

    /*例子三*/
    $(".testBox").sayGoodBye().css({
        'color':'red',
        'font-size':'20px'
    });

    /*例子四*/
    $.fn.myHaHa=function(optinons){
        var defaults={
            'color':'blue',
            'fontSize':'30px'
        };
        var settings= $.extend({},defaults,optinons);
        console.log(defaults);
        this.text('goodbye!!!'+'\t'+this.attr('class'));
        this.css({
            'color':settings.color,
            'font-size':settings.fontSize
        });
        return this;
    };
    $(".myPlugin").myHaHa({
        'color':'black',
        'fontSize':'60px'
    });

    /*例子五*/
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
}());


