/*--------------control.js-------------------*/
/*设置高度*/
    $(".second-page,.three-page,.four-page").height($("body").height());
    /*点击开始*/
    $(".begin-btn").bind('click',function(){
        $(".young-logo").addClass("young-logo-animation");
        $(".begin-btn").addClass("young-btn-animation");
        $(".first-logo").hide();
        setTimeout(function(){
            $(".first-page").hide();
            /*第二页显示效果*/
            $(".second-page").show();
            $(".second-page").find(".young-logo-second").addClass("young-revers-animation");
            $(".second-page").find(".accept-btn-second").addClass("young-reversR-animation");
            $(".second-page").find(".cdf-logo").addClass("logoShow");
        },1100);
    });
    $(".accept-btn-second").bind('click',function(){
        $(".second-page").hide();
        /*第三页显示效果*/
        $(".three-page").show();
        $(".three-page").find(".young-logo-second").addClass("young-revers-animation");
        $(".three-page").find(".accept-btn-three").addClass("young-reversR-animation");
        $(".three-page").find(".cdf-logo").addClass("logoShow");
        $(".three-page").find(".congratulation").addClass("logoShow");
//            $(".three-page").addClass("second-page-animation").show();
    });
    /*点击提交按钮*/
    $(".accept-btn-three").bind('click',function(){
        if($(".form-info input").eq(0).val() && $(".form-info input").eq(1).val() && $(".form-info input").eq(2).val() && $(".form-info input").eq(3).val() ){
            var tel=/^1[34578]\d{9}$/.test($(".form-info input").eq(3).val());
            if(!tel){
                alert("请填写正确的手机号！");
            }else{
                $.post('http://wx.hx028.net/index.php?g=Wap&m=Custom&a=ajax&id=22&tokens=fbvguw1452045506&wecha_id=young',$(".form-info").serialize(),function(res){
                    if(res.error==0){
                        alert(res.message);
                        $(".three-page").hide();
                        /*第四页显示效果*/
                        $(".four-page").show();
                        $(".four-page").find(".young-logo-four").addClass("young-revers-animation");
                        $(".four-page").find(".accept-btn-code").addClass("young-reversR-animation");
                        $(".four-page").find(".last-logo").addClass("logoShow");
                        $(".four-page").find(".congratulation").addClass("conShow");
                    }else{
                        alert(res.message);
                    }
                },'json')
            }
        }else{
            alert('请正确填写完整的信息哟！！！')
        }
    });

/*-------share.js---------*/
    var signPackage={};
    $.post('http://wx.hxpic.com/wxshare_cdfer.php',{url:window.location.href}, function(response){
        signPackage.appId=response.appId;
        signPackage.timestamp=response.timestamp;
        signPackage.nonceStr=response.nonceStr;
        signPackage.signature=response.signature;
    },'json');
    setTimeout(function(){
        wxShare();
    },500);
    function wxShare(){
        wx.config({
            appId    : signPackage.appId,
            timestamp: signPackage.timestamp,
            nonceStr : signPackage.nonceStr,
            signature: signPackage.signature,
            jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareWeibo', 'onMenuShareQQ', 'hideOptionMenu', 'showOptionMenu', 'hideMenuItems', 'showMenuItems', 'hideAllNonBaseMenuItem', 'showAllNonBaseMenuItem']
        });
        wx.ready(function () {
            var shareData = {
                title :'够young你就来！！！',
                desc  :'感知城市温度，盘点年度盛事',
                link  :window.location.href,
                imgUrl:'http://wx.hx028.net/spe/invitationCard/images/page1.png'
            };
            wx.onMenuShareAppMessage(shareData);
            wx.onMenuShareTimeline(shareData);
        });
    }
