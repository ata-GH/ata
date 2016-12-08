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
