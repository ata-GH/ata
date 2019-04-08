$(function() {
  var a = $(window).height();
  var a1 = $(".main").height()

})
//投票
function voting(vote){
  var n =vote.length;
  var  keyArr={f1:0,f2:0,f3:0};
  var li_width=846/n;
  var a;
  var d = 0;
  var kk='';
  for(nn=1;nn<4;nn++){
    d=0;
    kk='f'+nn;
    for (var i = 0; i < n; i++) {
      a =vote[i].percent;
      a = parseInt(a);
      if ((d < a) && (typeof(vote[i].ismax)=='undefined')) {
        d=a;
        keyArr[kk]=i;
      }
    }
    kk=keyArr[kk];
    vote[kk].ismax=0;
  }
  var maxd=0;
  for (var i = 0; i < n; i++) {
    a =vote[i].percent;
    a = parseInt(a);
    if (maxd<a) {
      maxd=a;

    }
  }
  vote[keyArr.f1].pillar='toupiao_one';
  vote[keyArr.f2].pillar='toupiao_two';
  vote[keyArr.f3].pillar='toupiao_three';

  // console.log(vote[keyArr.f1].pillar,vote[keyArr.f2].pillar,vote[keyArr.f3].pillar);

  if(n>0){
    //window.setTimeout(voting,3000);

    var text="";
    for(var i=0;i<vote.length;i++){
      //console.log(maxd,vote[i].percent);
      var tiao_height=260/maxd*parseInt(vote[i].percent);

      text +="<li style='width:"+li_width+"px;height:330px'><div class='show_list' id="+vote[i].id+"><i> "+vote[i].percent+"</i><span>"+vote[i].number
        +"</span><div class='tiao "+vote[i].pillar+"' style='height:"+tiao_height+"px'></div><span>"+vote[i].name+"</span></div ></li>";
      /*$(".tiao").click(function() {
        var aa = $(this).siblings("i").text();
        aa = parseInt(aa) * h;
        $(this).animate({
          height: tiao_height
        }, 1000)
      })*/
      //$('.tiao').trigger('click');
    }
    $(".toupiao_show").html(text);
  }

}
function vote_ajax() {
  var id = $("param.vote").attr('id');
  var vote_id = $("param.vote").attr('vote_id');
  var _this = this;
  $.ajax({
    url : $('param.vote').attr('url-ajax'),
    data : {id : vote_id},
    type : 'POST',
    dataType : 'json',
    success : function (data) {
      voting(data.vote);
      $('.vote_count').html(data.info.count);
      setTimeout("vote_ajax()", 1000);
    }
  });
}
$(function() {
  center(".main");
})

function centerWindow(a) {
  center(a);
  //自适应窗口
  $(window).bind('scroll resize', function() {
    center(a);
  });
}
//1.居中方法，传入需要居中的标签
function center(a) {
  var wWidth = $(window).width();
  var wHeight = $(window).height();
  var boxWidth = $(a).width();
  var boxHeight = $(a).height();
  var scrollTop = $(window).scrollTop();
  var scrollLeft = $(window).scrollLeft();
  var top = scrollTop + (wHeight - boxHeight) / 2;
  var left = scrollLeft + (wWidth - boxWidth) / 2;

  if (boxHeight < wHeight) {
    $(a).css({
      "top": top,
      "left": left
    });
  } else {
    $(a).css({
      "top": 0,
      "left": left
    });
  }


  function lastLi(a, b) {
    $(a).each(function() {
      var li = $(this).find("li");
      var len = $(this).find("li").length;
      var y = len / b;
      for (var i = 1; i <= y; i++) {
        li.eq(i * b - 1).css({
          'margin-right': '0',
          'border-right': '0'
        });
      }
    })
  }
}
$(function() {
  //抽奖名字
  $(".choulist").click(function() {
    $(".choulist ul").toggle();
  });
  $(".choulist ul li").on('click',function() {
    var _this = this;
    var pid = $(_this).attr('value');
    $.ajax({
      url	 : $('.lottery').attr('url-prize'),
      data : {pid : pid},
      type : 'POST',
      dataType : 'JSON',
      success : function (data) {
        if(data.num > 0){
          $('.people').show();
        }
        $('.choujiang_r ul').html('');
        $('.choujiang_title .span1 i').html("奖品数量："+(data.num));
        $('.choujiang_content .choujiang_img img').attr('src', data.pic);
        $('.choujiang_content .pname').html(data.pname);
        if(data.prize_user){
          var html='';
          for(i =0; i < data.prize_user.length; i++) {
            html += '<li><i>'+(data.prize_user.length - i)+'</i><em uid="'+data.prize_user[i].uid+'"></em><div class="head_img"><img src="'+data.prize_user[i].portrait+'" /></div><p>'+data.prize_user[i].nickname+'</p></li>';
          }
          $('.choujiang_r ul').html(html);
        }
        if(data.num > 0){
          var plist = "";
          if(data.num < 10){
            for(var j=1;j<=data.num;j++){
              if(j == 1){
                plist = plist + "<li class='people_ta'>"+j+"</li>";
              }else{
                plist = plist + "<li>"+j+"</li>";
              }
            }
          }else{
            for(var j=1;j<10;j++){
              if(j == 1){
                plist = plist + "<li class='people_ta'>"+j+"</li>";
              }else{
                plist = plist + "<li>"+j+"</li>";
              }
            }
            plist = plist + "<li>全部</li>";
          }
          $('.people_list ul').html(plist);
          $(".people_list li").click(function() {
            if ($(this).hasClass("people_ta")) {
              $(this).siblings().show();
            } else {
              $(this).addClass("people_ta").show().siblings().hide().removeClass("people_ta");
            }
            $(".people_list li").toggle();
          })
        }else{
          $('.people').hide();
        }
        var oText=$(_this).text();
        $(".choulist input").val(oText);
        $(".choulist input").attr('pid', pid);
        $(".choujiang .choulist ul").slideUp();
      }
    });
  });

  $(".people_list ,.people_list li").click(function() {
    $(".people_list li").toggle();
    $(".people_ta").show();

  })
  $(".people_list li").click(function() {
    if ($(this).hasClass("people_ta")) {
      $(this).siblings().show();
    } else {
      $(this).addClass("people_ta").show().siblings().hide().removeClass("people_ta");
    }
    $(".people_list li").toggle();
  })
  var aArray = [];
  var pArray = [];
  var aLength;
  var prize_id;
  var flag = true;
  var hasInit = false;

$("#start").on('click',function () {
  $("#close-draw").show();
  $(".choulist ul").slideUp();
  var pid = $(".choulist input").attr('pid');
  var _this = this;
  flag = false;
  $.ajax({
    url: $('.lottery').attr('url-start'),
    dataType: "JSON",
    type: "POST",
    data: {pid : pid},
    success: function (data) {
      $(".dui_con i").hide();
      if(data.err === 0){
        for(var i=0;i<data.res.length;i++){
          personArray.push({
            id: data.res[i].id,
            image: data.res[i].portrait,
            thumb_image: data.res[i].portrait,
            name: data.res[i].nickname
          });
          aArray[i] = '<li><i></i><em uid="'+data.res[i].id+'"></em><div class="head_img"><img src="'+data.res[i].portrait+'" /></div><p>'+data.res[i].truename+'</p></li>';
          pArray[i] = data.res[i].id;
        }
        if (!hasInit) {
          init();
          animate();
        }
        hasInit = true;
        /* begin */
        $(".huodong_cntaniner").hide();
        $(".canvas_container").css('display','block');
        opening();
      }
      else {
        alert(data.info);
      }
    }
  });
});
  /*$('#start').click(function() {
    $(".choulist ul").slideUp();
    var pid = $(".choulist input").attr('pid');
    var _this = this;
    flag = false;
    $.ajax({
      url : $('.lottery').attr('url-start'),
      data : {pid : pid},
      type : 'POST',
      dataType : 'json',
      success : function (data) {
        if(0 == data.err) {
          aLength = data.res.length
          $(".dui_con i").hide();
          for (i = 0; i < aLength; i++) {
            aArray[i] = '<li><i></i><em uid="'+data.res[i].id+'"></em><div class="head_img"><img src="'+data.res[i].portrait+'" /></div><p>'+data.res[i].truename+'</p></li>';
            pArray[i] = data.res[i].id;
          }
          immer = setInterval(function() {
            num = Math.floor(Math.random() * aLength);
            $('#box').html(aArray[num]);
            prize_id = num;
          }, 30)
          $(_this).hide();
          $('#stop').show();
        } else {
          alert(data.info);
        }
      }

    });
  });*/
  var j=1;
  /*$('#stop').click(function() {
    clearInterval(immer);
    flag = true;
    var pid = $(".choulist input").attr('pid');
    var _this = this;
    var c_num = $('.people_ta').text();
    var count = $('.choujiang_title .span1 i').html();
    var counts = count.split('奖品数量：');
    var p_num = aArray.length;
    if(c_num == ''){
      c_num = 1;
    }
    if(c_num == '全部'){
      c_num = counts[1];
    }
    if(c_num*1 > counts[1]*1){
      c_num = counts[1];
    }
    if(c_num*1 > p_num*1){
      c_num = p_num;
    }
    var uids = '';
    var lucks = '';
    var lucks_1 = '';
    for (var i = 0; i < c_num; i++) {
      num = Math.floor(Math.random() * aArray.length);
      uids = uids + ',' + pArray[num];
      lucks = aArray[num] + lucks;
      if(i == 0){
        lucks_1 = aArray[num];
      }
      aArray.splice(num, 1);
      pArray.splice(num, 1);
    };
    $('#box').html(lucks_1);
    $.ajax({
      url : $('.lottery').attr('url-stop'),
      data : {pid : pid, uid : uids},
      type : 'POST',
      dataType : 'json',
      success : function (data) {
        $(".dui_con i").show();
        count =  counts[1]-data.count;
        $('.choujiang_title .span1 i').html("奖品数量："+count);

        $('.choujiang_r ul').prepend(lucks);
        $(".duiduipeng_title b").text(j);
        j++;
        $(_this).hide();
        $('#start').show();
        var pcount = $('.choujiang_bot_txt i').html();
        $('.choujiang_bot_txt i').html(pcount-data.count);
        choujiangpaixu();
      }
    });
  });*/
/* 点击停止抽奖按钮 */
$('#close-draw').on('click', function () {
  flag = true;
  var pid = $(".choulist input").attr('pid');
  var _this = this;
  var c_num = $('.people_ta').text();
  var count = $('.choujiang_title .span1 i').html();
  var counts = count.split('奖品数量：'); /* 3 */
  var p_num = aArray.length;
  if(c_num == ''){
    c_num = 1;
  }
  if(c_num == '全部'){
    c_num = counts[1];
  }
  if(c_num*1 > counts[1]*1){
    c_num = counts[1];
  }
  if(c_num*1 > p_num*1){
    c_num = p_num;
  }
  var uids = '';
  var lucks = '';
  var lucks_1 = '';
  for (var i = 0; i < c_num; i++) {
    num = Math.floor(Math.random() * aArray.length);
    uids = uids + ',' + pArray[num];
    lucks = aArray[num] + lucks;
    if(i == 0){
      lucks_1 = aArray[num];
    }
    aArray.splice(num, 1);
    pArray.splice(num, 1);
  };
  $('#box').html(lucks_1);
  $.ajax({
    url : $('.lottery').attr('url-stop'),
    data : {pid : pid, uid : uids},
    type : 'POST',
    dataType : 'json',
    success : function (data) {
      $(".dui_con i").show();
      count =  counts[1]-data.count;
      $('.choujiang_title .span1 i').html("奖品数量："+count);
      $('.choujiang_r ul').prepend(lucks);
      $(".duiduipeng_title b").text(j);
      j++;
      $(_this).hide();
      $('#start').show();
      var pcount = $('.choujiang_bot_txt i').html();
      $('.choujiang_bot_txt i').html(pcount-data.count);
      choujiangpaixu();
      /* add */
      closeing();
      personArray.forEach(function (val) {
        if (val.id == data.uid) {
          awardUser = val;
          showPrizeIn(val.thumb_image, val.name);
          setTimeout(function () {
            $(".huodong_cntaniner").css('display','block');
            $(".canvas_container").hide();
          },2000);
        }
      });
      /* add end */
    }
  });
});
  $('.choujiang_r ul li').eq(0).trigger("live");
  /*$('.choujiang_r ul li em').live('click',function(){
    if (flag) {
      var _this = this;
      if (confirm('删除中奖用户后将会使其重新放入奖池，确定要删除么？')) {
        var uid = $(_this).attr('uid');
        $.ajax({
          url : $('.lottery').attr('url-del'),
          data : {uid : uid},
          type : 'POST',
          dataType : 'json',
          success : function (data) {
            if(data.error == 0){
              $(_this).parent().remove();
              choujiangpaixu();
              var pcount = $('.choujiang_bot_txt i').html();
              $('.choujiang_bot_txt i').html(pcount*1+1);
              var count = $('.choujiang_title .span1 i').html();
              var counts = count.split('奖品数量：');
              count =  counts[1]*1+1;
              $('.choujiang_title .span1 i').html("奖品数量："+count);
            }
          }
        });

      };
    } else {
      alert("请完成抽奖，再删除!");
    }
  });*/
  $('.choujiang_r ul li em').live('click',function(){
    if (flag) {
      var _this = this;
      if (1) {
        var uid = $(_this).attr('uid');
        $.ajax({
          url : $('.lottery').attr('url-del'),
          data : {uid : uid},
          type : 'POST',
          dataType : 'json',
          success : function (data) {
            if(data.error == 0){
              $(_this).parent().remove();
              choujiangpaixu();
              var pcount = $('.choujiang_bot_txt i').html();
              $('.choujiang_bot_txt i').html(pcount*1+1);
              var count = $('.choujiang_title .span1 i').html();
              var counts = count.split('奖品数量：');
              count =  counts[1]*1+1;
              $('.choujiang_title .span1 i').html("奖品数量："+count);
            }
          }
        });

      };
    } else {
      alert("请完成抽奖，再删除!");
    }
  });

})

function choujiangpaixu(){
  now_num = $('.choujiang_r ul li').length;
  for(var o = 0; o < now_num; o++){
    $('.choujiang_r ul i:eq('+o+')').text((now_num-o));
  }
}

$(function() {
  $(".close_but").live('click',function() {
    $(this).parent().remove();

  })
  $(".peidui_bot").click(function() {
    $(".peidui_list li").remove();
  })
  $(".peidui_head  span").live('click',function(){
    $(this).parent().find("img").attr("src","");
    $(this).parent().find("p").text("......");
  });

});


function changeHight(){
  var beforeHeight = $(".toupiao .row").scrollTop();
  $(".toupiao .row").scrollTop($(".toupiao .row").scrollTop()+20);
  var afterHeight = $(".toupiao .row").scrollTop();
  if(beforeHeight == afterHeight){
  }else{
    setTimeout("changeHight()",5);
  }
}

function signin_add(data){//测试用
  var html=$("<li style='display:block;'><div class='heads_bg'>" +
    "</div><div class='user-block out rotate'>" +
    "<a href='javascript:void(0);'>" +
    //"<img class='checkin-avatar checkinAvatar cki-default' src='"+ $('param.signin').attr('path') +"/scene/images/12.jpg'></a>" +
    "<span class='checkin-name checkinName'>"+data.nickname+"</span>" +
    "</div><div class='user-block in' > <a href='javascript:void(0);'>" +
    "<img class='checkin-avatar checkinAvatar' src='"+data.portrait+"'></a>" +
    "<span class='checkin-name checkinName'>"+data.nickname+"</span><i>签到</i> </div></li>");
  $(".qiandao_show").prepend(html);

  html.find(".user-block").show();
  html.find(".heads_bg").hide();
  html.find("i").fadeOut(1000);
  html.find(".user-block.in").css({
    //  "animation-delay": i * 0.5 + "s",
    "z-index": 999
  });
  setTimeout("changeHight()",5);//滚动条滚动到底部，异步请求时调用这个方法
}

function signin_ajax() {
  var id = $("param.signin").attr('pid');
  var last_id = $("param.signin").attr('last_id');
  var _this = this;
  $.ajax({
    url : $('param.signin').attr('url-ajax'),
    data : {id : id, last_id : last_id},
    type : 'POST',
    dataType : 'json',
    success : function (data) {
      if(data) {
        $("param.signin").attr('last_id', data.id);
        signin_add(data);
      }
      setTimeout("signin_ajax()", 2000);
    }
  });
}


