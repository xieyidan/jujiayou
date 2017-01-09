//javascript Document
function chinaz(){
	this.init();
}
chinaz.prototype = {
	constructor: chinaz,
	init: function(){		
		this._initBackTop();
	},	
	_initBackTop: function(){
		var $backTop = this.$backTop = $('<div class="cbbfixed" style="z-index:9999;">'+
            			'<div class="yijian cbbtn"></div>'+
						'<div class="tianxie">'+
							'<div class="tian_nei">'+
								'<div class="yj">意见反馈</div>'+
                                '<span id="info" style="color:red;"></span><br/>'+
								'<textarea class="yj_fk" placeholder="请输入您对居家游网站使用中的意见或您的建议"></textarea>'+
								'<textarea class="dh" placeholder="请您尽量留下您的电话号码或QQ号码方便我们与您联系"></textarea>'+
								'<button class="yijian_btn" style="height:48px;">提交反馈</button>'+
							'</div>'+
								'<div class="guanbi"><span></span></div>'+
						'</div>'+
						'<a class="cweixin cbbtn"">'+
							'<span class="weixin-icon"></span><div></div>'+
						'</a>'+
						'<a class="gotop cbbtn">'+
							'<span class="up-icon"></span>'+
						'</a>'+
					'</div>');
		$('body').append($backTop);
		$(".gotop").click(function(){
		/*$backTop.click(function(){*/
			$("html, body").animate({
				scrollTop: 0
			}, 120);
		});

		var timmer = null;
		$(window).bind("scroll",function() {
            var d = $(document).scrollTop(),
            e = $(window).height();
            0 < d ? $backTop.css("bottom", "60px") : $backTop.css("bottom", "-143px");
			clearTimeout(timmer);
			timmer = setTimeout(function() {
                clearTimeout(timmer)
            },100);
	   });
	   
	   $(function(){
		$(".yijian").click(function(){
			$(".tianxie").css("display","block");
			$(".yj_fk").css("width","288px")
			$(".tianxie").css("position","fixed");
			$(".tianxie").css("top","195px");	
			$(".tianxie").css("right","10px");
		});
		$(".guanbi").click(function(){
			$(".tianxie").css("display","none");
            $(".yijian_btn").css("disabled",false);
            $(".yijian_btn").html("提交反馈");
            $("#info").html("");
		});
           $(".yj_fk").focus(function(){
               $("#info").html("");
           });
		   //ajax方式提交反馈内容到后台
		   $(".yijian_btn").click(function(){
			   var host = "http://"+window.location.host;
			   $.post(
				   host+"/User/freeback" ,
				   {jy_fk:$(".yj_fk").val(),lxfs:$(".dh").val()},
				   function(msg){
                       var status =msg['status'];
                       var info =msg['info'];
                       var url= msg['url'];
                       //  /User/login.html
                       switch (status){
                           case -1:
                               $("#info").html(info);
                               break;
                           case 0:
                               $("#info").html(info);
                               window.location.href=host+url;
                               break;
                           case 1:
                               $("#info").html(info);
                               break;
                           case 2:
                               $(".yijian_btn").html(info);
                               $(".yj_fk").val("");
                               $(".dh").val("");
                               flag=true;
                               break;
                       }
				   }
			   );
		   });
	});
	}
	
}
var chinaz = new chinaz();