(function($,document){
    $.fn.drag=function(options){
        var x,drag=this,isMove=false,defaults={};
        var options= $.extend(defaults,options);
        //添加滑块内容
        var html='<div class="drag-bg"></div>'+
            '<div class="drag-text" onselectstart="return false;" unselectable="on">拖动滑块验证</div>'+
            '<div class="drag" onselectstart="return false;">》</div>';
        this.append(html);
        var handler=this.find('.drag'),
            dragBg=this.find('.drag-bg'),
            dragText=this.find('.drag-text'),
            maxWidth=dragText.width()-handler.width();
        //鼠标按下时的X轴位置
        handler.on({
            'mousedown':function(e){
                isMove=true;
                x= e.pageX;
            }
        });
        $(document).on({
            //滑动时效果
            'mousemove':function(e){
                var _x= e.pageX-x;
                if(isMove){
                    if(_x<0){
                        handler.css('left',0);
                    }else if(_x<maxWidth){
                        handler.css('left',_x);
                        dragBg.width(_x);
                    }else{
                        handler.css('left',maxWidth);
                        dragBg.width(maxWidth);
                        dragOK();
                    }
                }
            },
            //鼠标离开时
            'mouseup':function(e){
                isMove=false;
                var _x= e.pageX-x;
                if(_x<maxWidth){
                    handler.css('left',0);
                    dragBg.width(0);
                }
            }
        });
        //清空事件
        function dragOK(){
            handler.text('完成');
            dragText.text('验证通过');
            $(document).unbind('mousemove');
            $(document).unbind('mouseup');
        }
    };
    $(".drag-box").drag();
})(jQuery,document);