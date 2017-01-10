// JavaScript Document

/********房源发布步骤********/
;(function () {
	jQuery(document).ready(function(){
	
	//步骤一
	
	//所在城市失去焦点事件
	$(".largeSelect").blur(function(e) {
       var selcity = $(".largeSelect option:selected").val(); 
	   if(selcity=="请选择所在城市" || selcity=="请选择所在区域" || selcity=="请选择所在商区")
		{
			$(".sel-city").text("请选择所在城市，所在区域！");
		} 
    }).focus(function(e) {
        $(".sel-city").text("");
    });
	//具体地址
	$(".house-address").blur(function(e) {
       var address = $(".house-address").val();
	   if(address=='')
		{
			$(".specific-address").text("请输入具体地址！");
		}
    }).focus(function(e) {
        $(".specific-address").text("");
    });
	//精确地址
	$(".house-building").blur(function(e) {
       var building = $(".house-building").val();  
	   if(building=='' || building==null)
		{
			$(".address-word").text("请填写房源精确地址！");
		}
    }).focus(function(e) {
        $(".address-word").text("");
    });
	//房屋面积
	$(".house-area").blur(function(e) {
		var houseErea = $(".house-area").val();  
		if(houseErea=='')
		{
			$(".area").text("请输入房屋面积！");
		}
	}).focus(function(e) {
        $(".area").text("");
    });
	//房屋户型
	$("#room").blur(function(e) {  
		var houseRoom = $("#room option:selected").val();
		if(houseRoom==0)
		{
			$(".door-model").text("请设置房屋户型！");
		}
	}).focus(function(e) {
        $(".door-model").text("");
    });
	//可住人数
	$("#people-num").blur(function(e) {
		var liveNum = $("#people-num option:selected").val(); 
		if(liveNum==0)
		{
			$(".live-num").text("请选择可住人数！");
		}
	}).focus(function(e) {
        $(".live-num").text("");
    });
	
	//床数
	//双人床 添加床数按钮
	$("#D-btn").on("click",function(){
		var twoTitle = $("#DTitle").text();
		var Dpiece =  $("#Dpiece option:selected").val();
		var Dwide = $("#Dwide").val();
		var Dlength = $("#Dlength").val();
		if(Dwide=="" || Dlength=="")
		{
			$("#add-prompt").text("（请填写床宽和床长!）");
		}
		else if(Dwide>4 || Dlength>4)
		{
			$("#add-prompt").text("（床宽和床长最多为4米）");
		}
		else
		{
			$("#add-prompt").text("");
			$(".set-add").css("display","none");
			$("#bed-num .bed-details").append(
									'<li class="bed-li">'+
										'<span class="bed-title">双人床</span>'+
										'<div class="bed-size">'+
											'<span class="wide">2</span>'+
											'<span>米</span>'+
											'<span>*</span>'+
											'<span class="length">2</span>'+
											'<span>米</span>'+
										'</div>'+
										'<span class="bed-title piece">1张</span>'+
										'<span class="bed-delete">删除</span>'+
									'</li>'
								
							  );
		}
		$(".bed-delete").on("click",function(){
			$(this).parent(".bed-li").remove();
		});
		//判断长度不能大于4
	var bedNum = $(".bed-li");
	if(bedNum.length>5)
	{
		$("#D-btn").unbind("click");
	}
	else{
		$("#D-btn").bind("click");
	}
	});
	//单人床 添加床数按钮
	$("#S-btn").on("click",function(){
		var oneTitle = $("#Stitle").text();
		var Spiece =  $("#Spiece option:selected").val();
		var Swide = $("#Swide").val();
		var Slength = $("#Slength").val();
		if(Swide=="" || Slength=="")
		{
			$("#single-prompt").text("（请填写床宽和床长!）");
		}
		else if(Swide>4 || Slength>4)
		{
			$("#single-prompt").text("（床宽和床长最多为4米）");
		}
		else
		{
			$("#single-prompt").text("");
			$(".set-add").css("display","none");
			$("#bed-num .bed-details").append(
									'<li class="bed-li">'+
										'<span class="bed-title">单人床</span>'+
										'<div class="bed-size">'+
											'<span class="wide">1.5</span>'+
											'<span>米</span>'+
											'<span>*</span>'+
											'<span class="length">2</span>'+
											'<span>米</span>'+
										'</div>'+
										'<span class="bed-title piece">1张</span>'+
										'<span class="bed-delete">删除</span>'+
									'</li>'
								
							  );
		}
		$(".bed-delete").on("click",function(){
			$(this).parent(".bed-li").remove();
		});
	});
	//其他床 添加床数按钮
	$("#O-btn").on("click",function(){
		var otherTitle =  $(".other-bed option:selected").val();
		var Opiece =  $("#Opiece option:selected").val();
		var Owide = $("#Owide").val();
		var Olength = $("#Olength").val();
		if(Owide=="" || Olength=="")
		{
			$("#other-prompt").text("（请填写床宽和床长!）");
		}
		else if(Owide>4 || Olength>4)
		{
			$("#other-prompt").text("（床宽和床长最多为4米）");
		}
		else
		{
			$("#other-prompt").text("");
			$(".set-add").css("display","none");
			$("#bed-num .bed-details").append(
									'<li class="bed-li">'+
										'<span class="bed-title">儿童床</span>'+
										'<div class="bed-size">'+
											'<span class="wide">2</span>'+
											'<span>米</span>'+
											'<span>*</span>'+
											'<span class="length">2</span>'+
											'<span>米</span>'+
										'</div>'+
										'<span class="bed-title piece">1张</span>'+
										'<span class="bed-delete">删除</span>'+
									'</li>'
								
							  );
		}
		$(".bed-delete").on("click",function(){
			$(this).parent(".bed-li").remove();
		});
	});
	
	
	
	//房源别名
	$(".alias").blur(function(e) {
		var houseName = $(".alias").val();  
		if(houseName=='')
		{
			$(".houseName").text("请设置房源别名！");
		}
	}).focus(function(e) {
        $(".houseName").text("");
    });
	
	
	//按钮点击事件
	$("#step-1").on("click",function(e){
		//所在城市
		var selcity = $(".largeSelect option:selected").val(); 
		if(selcity=="请选择所在城市" || selcity=="请选择所在区域" || selcity=="请选择所在商区")
		{
			$(".sel-city").text("请选择所在城市，所在区域！");
		}
		
		//具体地址
		var address = $(".house-address").val();
		if(address=='')
		{
			$(".specific-address").text("请输入具体地址！");
		}
		//精确地址
		var building = $(".house-building").val();  
		if(building=='' || building==null)
		{
			$(".address-word").text("请填写房源精确地址！");
		}
		//房屋面积
		var houseErea = $(".house-area").val();  
		if(houseErea=='')
		{
			$(".area").text("请输入房屋面积！");
		}
		//房屋户型  
		var houseRoom = $("#room option:selected").val();
		
		//可住人数
		var liveNum = $("#people-num option:selected").val(); 
		
		//床数
		var bedNum = $(".bed-li");
		if(bedNum.length>0)
		{
			$(".addword").text("");
		}
		else{
			$(".addword").text("请添加床数");
		}
		//房源别名
		var houseName = $(".alias").val();  
		if(houseName=='')
		{
			$(".houseName").text("请设置房源别名！");
		}
				
	});
	

	
	
	
	
	
	
	
	
	
	//步骤二
	//特色标题
	$("#house-name").blur(function(e) {
		var houseName = $("#house-name").val();  
		if(houseName=="")
		{
			$("#step-word").text("请您输入您的标题名称");
		}
	}).focus(function(e) {
        $("#step-word").text("");
    });
	//房源内部介绍
	$("#introduce").blur(function(e) {
		var introduce = $("#introduce").val();  
		if(introduce=="")
		{
			$("#introduce-word").text("请您输入房屋介绍");
			
		}
		else if(introduce.length<20 && introduce.length>0)
		{
			$("#introduce-word").text("房屋介绍在20字以上，请重新输入！");
		}
	}).focus(function(e) {
       $("#introduce-word").text("");
    });
	//点击保存按钮
	$("#next").on("click",function(e) {
		//特色标题
		var houseName = $("#house-name").val();  
		if(houseName=="")
		{
			$("#step-word").text("请您输入您的标题名称");
		}
		//房源内部介绍
		var introduce = $("#introduce").val();  
		if(introduce=="")
		{
			$("#introduce-word").text("请您输入房屋介绍");
			
		}
		if(introduce.length<20 && introduce.length>0)
		{
			$("#introduce-word").text("房屋介绍在20字以上，请重新输入！");
		}

    });
	
	//步骤三
	
	
	
	//步骤四
	//日价失去焦点事件
	$("#dayPrice").blur(function(e) {
		var day_price = $("#dayPrice").val();
		var re = new RegExp();
		re=/^[1-9]\d*$/; //正整数
		/*if(re.test(day_price))
		{
			$("#weekPrice").val(day_price); //周末特殊价
		}
		else{
			$(".price").text("请填写出租价格，且只能为整数！");
		}*/
		if(day_price=='' || day_price<0)
		{
			$(".price").text("请填写出租价格，且只能为整数！");
			
		}
		$("#weekPrice").val(day_price); //周末特殊价
    }).focus(function(e) {
        $(".price").text("");
		
    });
	//周末价格失去焦点事件
	$("#weekPrice").blur(function(e) {
		var week_price = $("#weekPrice").val();
		if(week_price=='' || day_price<0)
		{
			$(".week_price").text("您输入的价格时能是整数！");
		} 
    }).focus(function(e) {
        $(".week_price").text("");
    });
    
	//打折设置
	var DiscountDetailsLi = $('.Discount-details li');
	
	$("#day-add").on("click",function(){
		
		var userTitle = $("#user-title").text(); //标题
		var stayDay = $("#stay-day").val();  //天数
		var dayDiscount = $("#day-discount").val();  //折扣
		if(stayDay=="" || dayDiscount=="")
		{
			$(".discount-txt").text("折扣和天数都为1-99的整数，请重新输入！");
		}
		else if(stayDay<0 || stayDay>100)
		{
			$(".discount-txt").text("天数为1-99的整数，请重新输入！");
		}
		else if(dayDiscount<0 || dayDiscount>100)
		{
			$(".discount-txt").text("折扣为1-99的整数，请重新输入！");
		}
		else
		{
			$(".Discount-add").css("display","none");
		    var Discount = $('.Discount-li')
		    console.log(Discount.length);
		    if (Discount.length<6) {
		    	$("#Discount .Discount-details").append(
					'<li class="Discount-li">'+
	                    '<span class="Discount-title">用户住满</span>'+
	                    '<span class="Discount-day">'+stayDay+'</span>'+
	                    '<span>天打</span>'+
	                    '<span class="Discount-day">'+dayDiscount+'</span>'+
	                    '<span>折 / 天</span>'+
	                    '<span class="Discount-delete">删除</span>'+
                    '</li>'
				
			    );
		    }else{
		    	alert("最多添加6条打折设置")
		    	return;
		    }
							  
		}
		
		$(".Discount-delete").on("click",function(){
			$(this).parent(".Discount-li").remove();
		});
	});
	
	
	//入住天数
	$("#stay-day").blur(function(e) {
       var stayDay = $("#stay-day").val();  
		if(stayDay=='')
		{
			$(".discount-txt").text("天数为1-99的整数，请重新输入！");
		}
		else if(stayDay<0 || stayDay>100)
		{
			$(".discount-txt").text("天数为1-99的整数，请重新输入！");
		}
    }).focus(function(e) {
        $(".discount-txt").text("");
    });
	//打折
	$("#day-discount").blur(function(e) {
       var discountDay = $("#day-discount").val();  
		if(discountDay=='')
		{
			$(".discount-txt").text("折扣为1-99的整数，请重新输入！");
		}
		else if(discountDay<0 || discountDay>100)
		{
			$(".discount-txt").text("折扣为1-99的整数，请重新输入！");
		}
    }).focus(function(e) {
        $(".discount-txt").text("");
    });
	//押金
	$("#deposit-txt").blur(function(e) {
		var deposit = $("#deposit-txt").val();  
		if(deposit=='' || deposit<0)
		{
			$(".deposit-prompt").text("您输入的价格只能为整数！");
		}
	}).focus(function(e) {
        $(".deposit-prompt").text("");
    });
	//清洁费
	$("#cleaning").blur(function(e) {  
		var cleaning = $("#cleaning").val();
		if(cleaning=='' || cleaning<0)
		{
			$(".upto-prompt").text("您输入的价格只能为整数！");
		}
	}).focus(function(e) {
        $(".upto-prompt").text("");
    });
	//最少入住天数
	$("#least-day").blur(function(e) {
		var leastDay = $("#least-day").val();
		if(leastDay=="" || leastDay<0)
		{
			$(".least-prompt").text("请输入大于0的整数！");
		}
	}).focus(function(e) {
        $(".least-prompt").text("");
    });
	//最多入住天数
	$("#most-day").blur(function(e) {
		var mostDay = $("#most-day").val(); 
		if(mostDay=="" || mostDay<0)
		{
			$(".most-prompt").text("请输入大于0的整数！");
		}
	}).focus(function(e) {
        $(".most-prompt").text("");
    });
	//电话号码
	$("#Phone").blur(function(e) {
		var phone = $("#Phone").val();
		if(phone=='' || phone.length<11)
		{
			$(".tel-prompt").text("请输入您的11位电话号码!");
		}
	}).focus(function(e) {
        $(".tel-prompt").text("");
    });
	
	
	//保存按钮
	$(".step4_btn").on("click",function(e){
		
		//价格设置，日价
		var day_price = $("#dayPrice").val();
		var week_price = $("#weekPrice").val();
		if(day_price=='' || week_price=='')
		{
			$(".price").text("请填写出租价格，且只能为整数！");
			$(".week_price").text("您输入的价格时能是整数！");
		}
		//入住天数和打折
		var stayDay = $("#stay-day").val();  
		var discountDay = $("#day-discount").val();  
		if(stayDay=='' || discountDay=='')
		{
			$(".discount-txt").text("折扣和天数都为1-99的整数，请重新输入！");
		}
		else if(stayDay < 0 && stayDay > 100)
		{
			$(".discount-txt").text("天数为1-99的整数，请重新输入！");
		}
		else if(discountDay < 0 && discountDay > 100)
		{
			$(".discount-txt").text("折扣为1-99的整数，请重新输入！");
		}
		
		//押金
		var deposit = $("#deposit-txt").val();  
		if(deposit=='' || deposit<0)
		{
			$(".deposit-prompt").text("您输入的价格只能为整数！");
		}
		//清洁费  
		var cleaning = $("#cleaning").val();
		if(cleaning=='' || cleaning<0)
		{
			$(".upto-prompt").text("您输入的价格只能为整数！");
		}
		//最少入住天数
		var leastDay = $("#least-day").val();
		if(leastDay=="" || leastDay<0)
		{
			$(".least-prompt").text("请输入大于0的整数！");
		}
		//最多入住天数
		var mostDay = $("#most-day").val(); 
		if(mostDay=="" || mostDay<0)
		{
			$(".most-prompt").text("请输入大于0的整数！");
		}
		//电话号码
		var phone = $("#Phone").val();
		if(phone=='')
		{
			$(".tel-prompt").text("请输入您的11位电话号码!");
		}
	});

	//单选框，复选框的样式
	$.icheck = {
	init: function() {
		var _this = this;
		_this._checkbox = "checkbox";
		_this._radio = "radio";
		_this._disabled = "disabled";
		_this._enable = "enable";
		_this._checked = "checked";
		_this._hover = "hover";
		_this._arrtype = [_this._checkbox, _this._radio];
		_this._mobile = /ipad|iphone|ipod|android|blackberry|windows phone|opera mini|silk/i.test(navigator.userAgent);
		$.each(_this._arrtype, function(k, v) {
			_this.click(v);
			if(!_this._mobile){
				_this.mouseover(v);
				_this.mouseout(v);
			}
		});
	},
	click: function(elem) {
		var _this = this;
		elem = "." + elem;
		$(document).on("click", elem, function() {
			var $this = $(this),
				_ins = $this.find("ins");
			if (!(_ins.hasClass(_this._disabled) || _ins.hasClass(_this._enable))) {
				if ( !! _ins.hasClass(_this._checked)) {
					_ins.removeClass(_this._checked).addClass(_this._hover);
				} else {

					if (/radio/ig.test(elem)) {
						var _name = $this.attr("name");
						$(elem + "[name=" + _name + "]").find("ins").removeClass(_this._checked);
					}
					$(elem).find("ins").removeClass(_this._hover);
					_ins.addClass(_this._checked);
					
				}
			}
			//停车费
			var _parkins = $this.find("#parking-space");
			if(_parkins.hasClass(_this._checked))
			{
				
				$(".park-hide").css("display","inline-block");
			}
			else{
				$(".park-hide").css("display","none");	
			}
			//接单手机号
			var _noins = $this.find("#no");
				_yesins = $this.find("#yes");
			if(_noins.hasClass(_this._checked))
			{
				$("#standby").css("display","inline-block");
			}
			else{
				$("#standby").css("display","none");
			}
			if(_yesins.hasClass(_this._checked))
			{
				
				$("#standby").css("display","none");
			}

		});
	},
	mouseover: function(elem) {
		var _this = this;
		elem = "." + elem;
		$(document).on("mouseover", elem, function() {
			var $this = $(this);
			var _ins = $this.find("ins");
			if (!(_ins.hasClass(_this._disabled) || _ins.hasClass(_this._enable) || _ins.hasClass(_this._checked))) {
				_ins.addClass(_this._hover);
				$this.css("cursor","pointer");
			} else{
				$this.css("cursor","default");
			}
		});
	},
	mouseout: function(elem) {
		var _this = this;
		elem = "." + elem;
		$(document).on("mouseout", elem, function() {
			$(elem).find("ins").removeClass(_this._hover);
		});
	}
	};
	
	$.icheck.init();
	
	
	
	
	/*百度地图API*/	
//	var houseMap = $('.house-map');//地图标注按钮
//	var popupMap = $('.popup-map');//地图展示区域
//	var ipt1 = $('.ipt1');//获取输入款值
//	var site = [];
//	var houseAddress = $('.house-address');
//	var houseBuilding = $('.house-building');
//	var houseNo = $('#house-no');
//	var mapVal;
//	//把详细位置添加到地图输入框
//	houseMap.on("click",function(){
//		if (popupMap.is(":hidden")) {
//			popupMap.show();
//			houseMap.css({"background":"#1BC272","color":"#fff"});
//			ipt1.val(houseAddress.val()+houseNo.val()+houseBuilding.val());
//			site.push(ipt1.val());
//			console.log(site)
//		}else{
//			popupMap.hide();
//			houseMap.css({"background":"#F2F2F2","color":"#000"});
//		};
//		
//	});
//	//删除地图按钮
//	$('.map-del').on("click",function(){
//		popupMap.hide();
//		houseMap.css({"background":"#F2F2F2","color":"#000"});
//	})
//	
//	var map = new BMap.Map('allmap');
//  var poi = new BMap.Point(116.307852,40.057031);
//  map.centerAndZoom(poi, 16);
//  map.enableScrollWheelZoom();
//  
//  var opts = {type: BMAP_NAVIGATION_CONTROL_LARGE}   //缩放控件
//	map.addControl(new BMap.NavigationControl(opts));
//	// 创建地址解析器实例
//	var myGeo = new BMap.Geocoder();
//	// 解析位置
//	$('.analysis').on("click",function(){
//		mapVal=ipt1.val();
//		myGeo.getPoint(mapVal, function(point){
//			if (point) {
//				map.centerAndZoom(point, 16);
//				map.addOverlay(new BMap.Marker(point));
//			}else{
//				alert("未解析到地址，请检查地址是否有误!");
//			}
//		});
//	})
//	//确认位置
//	$('.confirm').on("click",function(){
//		console.log(site)
//	})
		
		
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

});
})();
