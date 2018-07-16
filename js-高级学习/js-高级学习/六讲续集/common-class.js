
/*定义一个顶级命名空间*/
var GH={};


/*
 * 接口类需要的2个参数
 * 1、接口的名字
 * 2、接口需要实现方法集合 method[数组]*/

//第一步 用来创建接口
//1、接口类
GH.Interface = function(name,method){//传入一个类名 和类要实现的方法
    if(arguments.length!==2){throw new Error('this instance has error')}
    this.name=name;
    this.method=[];
    for(var i= 0,len=method.length;i<len;i++){
        if(typeof method[i] !== 'string'){throw new Error('the interface method name is string');}
        this.method.push(method[i]);
    }
};
//2、判断 子类是否继承了类的方法
GH.Interface.ensureImplements=function(obj){
    if(arguments.length<1){
        throw new Error('error');
    }
    for(var i= 1,len=arguments.length;i<len;i++){
        var interfaceName=arguments[i];
        if(interfaceName.constructor!=GH.Interface){
            throw new Error('error1');
        }
        for(var j= 0;j<interfaceName.method.length;j++){
            var method=interfaceName.method[j];
            if(!obj[method] || typeof obj[method] !=='function'){
                throw new Error("method '"+method+"'not found");
            }
        }
    }
};

/*继承 的公共方法*/
GH.extend=function(sub,sup){
    //目的：只继承父类的原型对象

    //1.用一个空函数做中转
    var F=new Function();
    F.prototype=sub.prototype;
    sup.prototype=new F();
    //还原子类的构造器
    Object.defineProperty(sup.prototype,'constructor',{
        enumerable:false,
        value:sup
    });
    //还原一下父类的原型对象 一方面方便解耦，另一方面可以更方便的获得父类的原型对象
    sup.superClass=sub.prototype;//利用子类的静态属性接收父类的原型对象

    //判断父类的原型对象的构造器 （加保险）
    if(sub.prototype.constructor==Object.prototype.constructor){
        Object.defineProperty(sub.prototype,'constructor',{
            enumerable:false,
            value:sub
        })
    }
};
/*
* 单体模式
* 实现一个跨浏览器的时间处理机制*/
GH.EventUtil={
    addHandler:function(elemt,type,handler){
        if(elemt.addEventListener){ //非IE
            elemt.addEventListener(type,handler,false);
        }else if(elemt.attachEvent){ //IE
            elemt.attachEvent(type,handler)
        }
    },
    removeHandler:function(elemt,type,handler){
        if(elemt.addEventListener){ //非IE
            elemt.removeEventListener(type,handler,false);
        }else if(elemt.attachEvent){ //IE
            elemt.detachEvent(type,handler)
        }
    }
};