//javascript Document

;(function(){
	

/*右侧悬浮jquery*/
$(function() {
	//右侧布局 
	var $backToTopEle = $('<div class="backToTop" style="z-index:198;">'+
						  '<div class="information cbbtn">'+
							  '<span class="news">我的消息</span>'+
						  '</div>'+
						  '<div class="news-left nodl distance">'+
							'<div class="remind-word">'+
								'<div class="login-no">登录后可和房东聊天</div>'+
                                '<button class="news-btn dl">立即登录</button>'+
								'<button class="news-btn zc">立即注册</button>'+
							'</div>'+
								'<div class="guanbi"><img src="images/guanbi_icon.png" alt="关闭意见反馈"></div>'+
						  '</div>'+
						   '<div class="infor-left distance">'+
								'<ul class="infor-word">'+
									'<div class="contact">最近联系人</div>'+
									'<li class=""><a class="fd-Name" href="javascript:void(0);">房东呢称</a></li>'+
									'<li class=""><a class="fd-Name" href="javascript:void(0);">房东呢称</a></li>'+
								'</ul>'+
								'<div class="infor-right">'+
									'<div class="infor-center">'+
										'<div class="Chatting">'+
											'<div class="fd-left"><a class="fd-Name" href="javascript:void(0);">房东呢称</a><div class="msg-info">聊天内容聊天内容</div></div>'+
											'<div class="fk-right"><a class="fk-Name" href="javascript:void(0);">房客呢称</a><div class="msg-info">聊天内容聊天内容聊天内容</div></div>'+
										'</div>'+
										'<a class="chat-records" href="javascript:void(0);">聊天记录</a>'+
										'<div class="import">'+
											'<textarea class="import-text" placeholder="请输入聊天内容"></textarea>'+
										'</div>'+
										'<div class="info_btn">'+
											'<button type="submit" class="send_btn" id="send_btn">发送</button>'+
										'</div>'+
									'</div>'+
									'<div class="fd-house">'+
										'<div class="house-name">当前房源</div>'+
										'<div class="dl-close"><img src="images/guanbi_icon.png" width="" alt="关闭意见反馈"></div>'+
										'<a href="javascript:void(0);">'+
											'<img src="img/house/fangyuan_01.png" alt="居家游房源图">'+
											'<p>翠湖高档小区超大三居室</p>'+
											'<span class="td_Price">￥<samp>388</samp>/晚</span>'+
										'</a>'+
									'</div>'+
								'</div>'+
							'</div>'+
						  '<div class="remind cbbtn">'+
							  '<span class="warn">我的提醒</span>'+
						  '</div>'+
						  '<div class="remind-left nodl distance">'+
							'<div class="remind-word">'+
								'<div class="login-no">登录后可查看我的提醒</div>'+
                                '<button class="remind-btn dl">立即登录</button>'+
								'<button class="remind-btn zc">立即注册</button>'+
							'</div>'+
								'<div class="guanbi"><img src="images/guanbi_icon.png" alt="关闭意见反馈"></div>'+
						  '</div>'+
						  '<div class="my-remind distance">'+
						      '<div class="my-news">我的消息</div>'+
							  '<div class="dl-close"><img src="img/guanbi.png" alt="关闭意见反馈"></div>'+
							  '<div class="my-list">'+
						      '<a class="news-list">您有一个未支付订单，请立即支付！点击立即支付</a>'+
							  '<a class="news-list">您上传的房源已通过审核，点击立即查看</a>'+
							  '</div>'+
						  '</div>'+
						  '<a class="cweixin cbbtn"">'+
							'<span class="weixin-icon"></span><div></div>'+
							'<span class="two-code">二维码</span>'+
						  '</a>'+
            			  '<div class="yijian cbbtn">'+
							  '<span class="idea">意见反馈</span>'+
						  '</div>'+
						  '<div class="tianxie distance">'+
							'<div class="tian_nei">'+
								'<div class="yj">意见反馈</div>'+
                                '<span id="info" style="color:red;"></span><br/>'+
								'<textarea class="yj_fk" placeholder="请输入您对居家游网站使用中的意见或您的建议"></textarea>'+
								'<textarea class="dh" placeholder="请您尽量留下您的电话号码或QQ号码方便我们与您联系"></textarea>'+
								'<button class="yijian_btn">提交反馈</button>'+
							'</div>'+
								'<div class="guanbi"><img src="images/guanbi_icon.png" alt="关闭意见反馈"></div>'+
						  '</div>'+
						  '<a class="gotop cbbtn">'+
							'<span class="up-icon"></span>'+
							'<span class="backtop">返回顶部</span>'+
						  '</a>'+
					    '</div>');
			$backToTopEle.appendTo($("body"));  //把$backToTopEle添加到body中
			//返回顶部
			$(".gotop").click(function() {  
			$("html, body").animate({ scrollTop: 0 }, 120); 
		}), $backToTopFun = function() { 
			var st = $(document).scrollTop(), winh = $(window).height(); 
			(st > 0)? $backToTopEle.show(): $backToTopEle.hide(); 
			//IE6下的定位 
			if (!window.XMLHttpRequest) { 
				$backToTopEle.css("top", st + winh - 166); 
			} 
		}; 
			$(window).bind("scroll", $backToTopFun); 
			$(function() { $backToTopFun(); }); 
		/*$(".cbbtn").on("click",function(e){
            $(this).css("background-color","#2cb16f").siblings().css("background-color","#fff");
        });	*/
		//意见反馈
		$(".yijian").on("click",function(e){
			if($(".tianxie").is(":hidden"))
			{
				$(this).css("background-color","#2cb16f");
				$(this).css("background-image","url(css/img/yijian_icon.png)");
				$(".tianxie").css("display","block"); 
				//我的提醒
				$(".remind").css("background-color","#fff");
				$(".remind").css("background-image","url(css/img/tixing_moren_icon.png)");
				$(".remind-left").css("display","none");
				//我的消息
				$(".information").css("background-color","#fff");
				$(".information").css("background-image","url(css/img/liaotian_moren_icon.png)");
				$(".news-left").css("display","none");
			}
			else
			{
				$(".tianxie").css("display","none");
				$(this).css("background-color","#fff");
				$(this).css("background-image","url(css/img/yijian_moren_icon.png)");
			}
			
			
		});
		
	   $(".yj_fk").focus(function(){
		   $("#info").html("");
	   });
	   //我的提醒
	   $(".remind").on("click",function(e){
			if($(".remind-left").is(":hidden"))
			{
				$(this).css("background-color","#2cb16f")
				$(this).css("background-image","url(css/img/tixingi_icon.png)");
				$(".remind-left").css("display","block"); 
				/*$(".my-remind").css("display","block");*/
				//意见反馈
				$(".yijian").css("background-color","#fff");
				$(".yijian").css("background-image","url(css/img/tixing_moren_icon.png)");
				$(".tianxie").css("display","none");
				//我的消息
				$(".information").css("background-color","#fff");
				$(".information").css("background-image","url(css/img/liaotian_moren_icon.png)");
				$(".news-left").css("display","none");
			}
			else
			{
				$(this).css("background-color","#fff");
				$(this).css("background-image","url(css/img/tixing_moren_icon.png)");
				$(".remind-left").css("display","none");
			}
			
			
		});
		//我的消息
		$(".information").on("click",function(e){
			if($(".news-left").is(":hidden"))
			{
				$(this).css("background-color","#2cb16f")
				$(this).css("background-image","url(css/img/liaotian_icon.png)");
				$(".news-left").css("display","block");
				/*$(".infor-left").css("display","block");*/
				//意见反馈
				$(".yijian").css("background-color","#fff");
				$(".yijian").css("background-image","url(css/img/tixing_moren_icon.png)");
				$(".tianxie").css("display","none");
				//我的提醒
				$(".remind").css("background-color","#fff");
				$(".remind").css("background-image","url(css/img/tixing_moren_icon.png)");
				$(".remind-left").css("display","none");
			}
			else
			{
				$(this).css("background-color","#fff");
				$(this).css("background-image","url(css/img/liaotian_moren_icon.png)");
				$(".news-left").css("display","none");
			}
			
			
		});
		$(".infor-word li:first").addClass("on");
		$(".infor-word li").on("click",function(){
			$(this).addClass("on").siblings().removeClass("on");
		});
		
		//关闭页面
		$(".guanbi").click(function(){
			//意见反馈未选中状态
			$(".tianxie").css("display","none");
			$(".yijian").css("background-color","#fff");
			$(".yijian").css("background-image","url(css/img/yijian_moren_icon.png)");
			
			//我的提醒未选中状态
			$(".remind").css("background-color","#fff");
			$(".remind").css("background-image","url(css/img/tixing_moren_icon.png)");
			$(".remind-left").css("display","none");
			
			//我的消息未选中状态
			$(".information").css("background-color","#fff");
			$(".information").css("background-image","url(css/img/liaotian_moren_icon.png)");
			$(".news-left").css("display","none");
						
            $(".yijian_btn").css("disabled",false);
            $(".yijian_btn").html("提交反馈");
            $("#info").html("");

		});
		$(".dl-close").click(function(){
			
			//我的提醒未选中状态
			$(".remind").css("background-color","#fff");
			$(".remind").css("background-image","url(css/img/tixing_moren_icon.png)");
			$(".my-remind").css("display","none");
			
			//我的消息未选中状态
			$(".information").css("background-color","#fff");
			$(".information").css("background-image","url(css/img/liaotian_moren_icon.png)");
			$(".infor-left").css("display","none");
						
		});
})
})();
