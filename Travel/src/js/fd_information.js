// JavaScript Document
;(function(){
	/***房东信息验证***/
	$(function(){

			//初始状态
			$(".fd-perinfo").css("background","url(../css/img/buzou_01.png)");
			$(".line_span span:first").css("color","#1bc272");
			
			//保存下一步
			$(".btn_next").on("click",function(){
				$(".fd-perinfo").css("background","url(../css/img/buzou01.png)");
				$(".fd-gathering").css("background","url(../css/img/buzou_02.png)");
				$(".line_span span:first").css("color","#808080");
				$(".line_span span:last").css("color","#1bc272");
				
				$(".cont-1").css("display", "none");
				$(".cont-2").css("display", "block");
				
			});
			
			//上一步
			$(".btn_Return").on("click",function(){
				$(".fd-perinfo").css("background","url(../css/img/buzou_01.png)");
				$(".fd-gathering").css("background","url(../css/img/buzou02.png)");
				$(".line_span span:last").css("color","#808080");
				$(".line_span span:first").css("color","#1bc272");
				
				$(".cont-1").css("display", "block");
				$(".cont-2").css("display", "none");
			});
			
			
			//添加头像
			var previewImg = $('.previewImg');
			var previewBtn = $('.previewBtn');
			previewBtn.on('change',function(){
				var strsrc=getObjectURL(this.files[0]);
		    	previewImg.attr("src",strsrc);
			});
			
			
			//添加身份证照片
			var zmImg = $('.zm-img');
			var fmImg = $('.fm-img');
			var picBtn1 = $('.pic-btn1');
			var picBtn2 = $('.pic-btn2');
			picBtn1.on('change',function(){
				var strsrc=getObjectURL(this.files[0]);
				var img = $('<img />').attr("src",strsrc);
		    	img.appendTo(zmImg)
			});
			picBtn2.on('change',function(){
				var strsrc=getObjectURL(this.files[0]);
		    	var img = $('<img />').attr("src",strsrc);
		    	img.appendTo(fmImg)
		    	
			});
			function getObjectURL(file) {
			    var url = null ; 
			    if (window.createObjectURL!=undefined) { // basic
			        url = window.createObjectURL(file) ;
			    } else if (window.URL!=undefined) { // mozilla(firefox)
			        url = window.URL.createObjectURL(file) ;
			    } else if (window.webkitURL!=undefined) { // webkit or chrome
			        url = window.webkitURL.createObjectURL(file) ;
			    }
			    return url ;
			};
	
	
			//支付宝，银行卡内容
			$("select[name='queryType']").change(function(){
			
				$div = $("#div"+$(this).val());//选择的div
				
				$div.parent().children("div").hide(); //让其他所有div隐藏
				
				$div.show(); //选中显示
				
				var div1=$(".select_xz option:selected").val();
				if(div1==2)
				{
					$(".select_tit").css("margin-right","355px");
					$(".cont-2 .div_btn").css("margin-top", "90px");
				}
				else if(div1==1){
					$(".select_tit").css("margin-right","126px");
					$(".cont-2 .div_btn").css("margin-top", "230px");
				}
			});
			//验证

	});
})();