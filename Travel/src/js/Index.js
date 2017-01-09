// JavaScript Document

$(function(){
		
	//与美·同行
	var slideMenu=function(){
		var sp,st,t,m,sa,l,w,gw,ot;
		return{
			destruct:function(){
				if(m){
					clearInterval(m.htimer);
					clearInterval(m.timer);
				}
			},
			build:function(sm,sw,mt,s,sl,h){
				sp=s;
				st=sw;
				t=mt;
				m=document.getElementById(sm);
				sa=m.getElementsByTagName('li');
				l=sa.length;
				w=m.offsetWidth;
				gw=w/l;
				ot=Math.floor((w-st)/(l-1));
				var i=0;
				for(i;i<l;i++){
					s=sa[i];
					s.style.width=gw+'px';
					this.timer(s)
				}
				if(sl!=null){
					m.timer=setInterval(function(){
						slideMenu.slide(sa[sl-1])
					},t)}
			},
			timer:function(s){
				s.onmouseover=function(){
					clearInterval(m.htimer);
					clearInterval(m.timer);
					m.timer = setInterval(function(){
						slideMenu.slide(s)
					},t);
					$(this).find('.mask-b').hide();
				}
				s.onmouseout=function(){
					clearInterval(m.timer);
					clearInterval(m.htimer);
					m.htimer=setInterval(function(){
						slideMenu.slide(s,true)
					},t);
					$(this).find('.mask-b').show();
				}
			},
			slide:function(s,c){
				var cw=parseInt(s.style.width);
				if((cw<st && !c) || (cw>gw && c)){
					var owt=0; var i=0;
					for(i;i<l;i++){
						if(sa[i]!=s){
							var o,ow; var oi=0; o=sa[i]; ow=parseInt(o.style.width);
							if(ow<gw && c){
								oi=Math.floor((gw-ow)/sp);
								oi=(oi>0)?oi:1;
								o.style.width=(ow+oi)+'px';
							}else if(ow>ot && !c){
								oi=Math.floor((ow-ot)/sp);
								oi=(oi>0)?oi:1;
								o.style.width=(ow-oi)+'px';
							}
							if(c){
								owt=owt+(ow+oi)
							}else{
								owt=owt+(ow-oi)
							}
						}
					}
					s.style.width=(w-owt)+'px';
				}else{
					if(m.htimer)
						clearInterval(m.htimer)
					if(m.timer)
						clearInterval(m.timer);
				}
			}
		};
	}();
	slideMenu.build('sm',400,10,10,1);
	
	
	
	//文字溢出
	$(".txt-house").each(function(){
		var maxwidth=12;
		
		if($(this).text().length>maxwidth){
			$(this).text($(this).text().substring(0,maxwidth));
			$(this).html($(this).html()+'…');
		}
		var txt_title=$(".txt-house").val();
		$(this).hover(function(){
		},function(){
			
		});
		
	});
	

	//下载手机客户端
	$(".close").click(function(){
			$(".da").css("transition","0.3s");
			$(".da").css("width","0px")
			$(".xiao").css("position","fixed");
			$(".xiao").css("left","0px");
			$(".xiao").css("z-index","198")
			$(".da_neirong").css("margin-left","-2000px");
			$(".da").css("opacity","0");
			$(".da_neirong").css("z-index","0");
			$(".all-msg").css("position","fixed");
			$(".all-msg").css("z-index","198");
			$(".hun_guanggao").css("bottom","-150px");
			if($(".da").val()==0){
				$(".xiao").css("display","block");
			}else{
				$(".xiao").css("display","none");
			}
		});
		$(".xiao").click(function(){
			$(".hun_guanggao").css("transition","0.3s");
			$(".hun_guanggao").css("bottom","0px");
			$(".da").css("width","100%");
			$(".xiao").css("display","none");	
			$(".da_neirong").css("margin-left","0px")
			$(".da").css("opacity","1");
			$(".all-msg").css("position","fixed");
			$(".all-msg").css("z-index","198")
		});	
		
		//input属性 
	   var doc=document,
		inputs=doc.getElementsByTagName('input'),
		supportPlaceholder='placeholder'in doc.createElement('input'),
		
		placeholder=function(input){
		 var text=input.getAttribute('placeholder'),
		 defaultValue=input.defaultValue;
		 if(defaultValue==''){
			input.value=text
		 }
		 input.onfocus=function(){
			if(input.value===text)
			{
				this.value=''
			}
		  };
		 input.onblur=function(){
			if(input.value===''){
				this.value=text
			}
		  }
	  };
	  
	  if(!supportPlaceholder){
		 for(var i=0,len=inputs.length;i<len;i++){
			  var input=inputs[i],
			  text=input.getAttribute('placeholder');
			  if(input.type==='text'&&text){
				 placeholder(input)
			  }
		  }
	  }
	  
	  //第三方登录
	  $(".chat-dl").on("click",function(){
		 $(this).css("background","url(css/img/weixin_icon_dianji.png)");
	  });
	  //第三方登录
	  $(".weibo-dl").on("click",function(){
		 $(this).css("background","url(css/img/sina_icon_dianji.png)");
	  });
	  //第三方登录
	  $(".qq-dl").on("click",function(){
		 $(this).css("background","url(css/img/QQ_icon_dianji.png)");
	  });
	  
	//鼠标移如图片动态放大效果
	var imgRoom = $('.img-room');
	var homeImg = $('.homg-img');
	for(var i=0; i<homeImg.length; i++){
		homeImg[i].onmouseover = function(){

			$(this).animate({
				
				"width":"410px",
				"height":"236px",
				"top":"-5",
				"left":"-5"
			},400);	
		}
		homeImg[i].onmouseout = function(){

			$(this).animate({
				
				"width":"400px",
				"height":"226px",
				"top":"0",
				"left":"0"
			},400);
		}
	}

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});