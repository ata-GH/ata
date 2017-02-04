
/*1、将place封装为window对象下的一个属性*/
if(window.place){
    //alert('place对象被占用');
    console.log(place);
}else{
    window.place={};
}
/*2、在place对象上定义捕获鼠标坐标的方法*/
window.place.captureMouse=function(element){
    var mouse={x:0,y:0};
    element.addEventListener('mousemove',function(e){
        var x,y;
        /*获取当前的屏幕的位子，并作兼容性处理*/
        if(e.pageX|| e.pageY){
            x= e.pageX;
            y= e.pageY;
        }else{
            x= e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft;
            y= e.clientY+document.body.scrollLeft+document.documentElement.scrollLeft;
        }
        /*将当前的坐标值减去元素的偏移位置，即位鼠标位于当前canvas(当前元素)的位置*/
        x-=element.offsetLeft;
        y-=element.offsetTop;
        mouse.x=x;
        mouse.y=y;
    },false);
    /*返回mouse对象*/
    return mouse;
};
/*3、在place对象上定义触摸坐标的方法*/
window.place.captureTouch=function(element){
    var touch={x:0,y:0,event:null,touchSpeed:false};
    element.addEventListener('touchstart',function(event){
        touch.touchSpeed=true;
        touch.event=event;
    },false);
    element.addEventListener('touchmove',function(event){
        var x, y,touch_event;
        /*获取当前touch的坐标*/
        touch_event=event.touches[0];//第一次touch
        if(touch_event.pageX||touch_event.pageY){
            x=touch_event.pageX;
            y=touch_event.pageY;
        }else{
            x=touch_event.clientX+document.body.scrollLeft+document.documentElement.scrollLeft;
            y=touch_event.clientY+document.body.scrollTop+document.documentElement.scrollTop;
        }
        /*再减去元素的偏移量*/
        x-=element.offsetLeft;
        y-=element.offsetTop;
        touch.x=x;
        touch.y=y;
        touch.event=event;
    },false);
    element.addEventListener('touchend',function(event){
        touch.touchSpeed=false;
        touch.event=event;
    },false);
    /*返回touch对象*/
    return touch;
};
/*动画循环*/
if(!window.requestAnimationFrame){
    window.requestAnimationFrame=(
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    function(callback){
        return window.setTimeout(callback,17/*~1000/60*/);
    });
}
/*动画循环取消*/
if(!window.cancelRequestAnimationFrame){
    window.cancelRequestAnimationFrame=(
        window.webkitCancelAnimationFrame || window.webkitCancelRequestAnimationFrame ||
        window.mozCancelAnimationFrame || window.mozCancelRequestAnimationFrame ||
        window.msCancelAnimationFrame || window.msCancelRequestAnimationFrame ||
        window.oCancelAnimationFrame || window.oCancelRequestAnimationFrame ||
        window.clearTimeout
    )
}


