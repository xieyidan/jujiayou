;(function () {
	$(document).ready(function(){ 
/******轮播图**********/
//	//大图
//		var mySwiper1 = new Swiper('.box', {
//			touchAngle : 45,
//			grabCursor : true,
//		})
//		var mySwiper2 = new Swiper('.show_box', {
//			slidesPerView : "auto",//'auto'
//			prevButton:'.swiper-button-prev',
//			nextButton:'.swiper-button-next',
//			touchAngle : 45,
//			resistance : false,
//			longSwipesRatio : 0.1,
////			loop : true,
////			loopedSlides :8,
//		})
//		
//		mySwiper1.params.control = mySwiper2;
//	//小图
//		//点击缩略图切换
//		var thumbPic = $('.thumb_pic').find("li");
//		thumbPic.each(function(idx,item){
//			$(item).on('click',function(){
//				mySwiper1.slideTo(idx, 1000, false);//切换到第一个slide，速度为1秒
//			})
//		});
//		
//		//点击前进后退
//		var index = 0;
//		$('.swiper-button-prev').on('click',function(){
//			console.log(1)
//		});
//		$('.swiper-button-next').on('click',function(){
//			console.log(2)
//		});

	var housePic = $('.house-pic');//外层
	var LargePic = $('.Large-pic');//大图
	var thumbPic = $('.thumb_pic');//缩略图
	var btn1 = $('.btn1');//左边按钮
	var btn2 = $('.btn2');//右边按钮
	var index = 0 ;
	//获取所有图片
    var len = LargePic.children("li").length;
	//初始状态
    show();
    //自动轮播
    var timer = setInterval(animating,3000);
    //点击小图时
	thumbPic.on("click","li",function(){
		clearInterval(timer);  //清除定时器
		index = $(this).index();
		show();
	});
	//左右控制
	btn1.on("click",function(){
		clearInterval(timer);  //清除定时器
		index--;
		show();
	})
	btn2.on("click",function(){
		clearInterval(timer);  //清除定时器
		index++;
		show();
	});
	
	//图片轮播
	function animating(){
		index++;
		show();
	}
     		
	//图片切换
	function show(){
		if(index == len){
			index = 0
		}else if(index < 0){
			index = len - 1;
		}
 		LargePic.children("li").eq(index).animate({opacity:1}).siblings().animate({opacity:0});
 		thumbPic.children("li").eq(index).animate({opacity:1}).siblings().animate({opacity:0.5});
	}
     		



/******吸顶菜单*****/
		//内容信息导航吸顶
		var col= $(".col");//父元素
		var rightBox = $('.rightBox');//房源预定
		var column = $('#contentTab'); //吸顶导航
		$(window).scroll(function(){ 
			var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			if(scrollTop>130){ 
				
				if(scrollTop>1920){
					rightBox.css({"position":"relative","top":"1787px","right":"0px","z-index":99});
				}else{
					col.show();
					rightBox.css({"position":"fixed","top":"60px","right":"332px","z-index":99});
				}
			}
			else{ 
				col.hide();
				rightBox.css("position","static");
				rightBox.show();
			} 
		}); 			
		//内容信息导航锚点
		column.navScroll({
		      mobileDropdown: true,
		      mobileBreakpoint: 768,
		      scrollSpy: true,
		    
		});
		
		
		
		//点击查看更多设施服务
		var facilityList = $(".facility-list").find("li:gt(7)");//前8项设施
		var facilityBtn = $('.facilityBtn');
		facilityList.hide();
		facilityBtn.on("click",function(){
			if (facilityList.is(":hidden")) {
				facilityList.show();
				facilityBtn.html("点击收起");
			}else{
				facilityList.hide();
				facilityBtn.html("点击查看更多");
			}
		})
		//点击查看更多房源介绍
		var house = $(".house:gt(2)");
		var houseBtn = $('.houseBtn');
		house.hide();
		houseBtn.on("click",function(){
			if (house.is(":hidden")) {
				house.show();
				houseBtn.html("点击收起");
			}else{
				house.hide();
				houseBtn.html("点击查看更多房源介绍");
			}
		})
		
	
		// 百度地图API功能
		var houseAddress = $('.house-address');//获取房源地址标签
	    var map = new BMap.Map('allmap');
	    var poi = new BMap.Point(116.307852,40.057031);
	    map.centerAndZoom(poi, 16);
	    map.enableScrollWheelZoom();
	    var marker = new BMap.Marker(poi);  // 创建标注
		map.addOverlay(marker);              // 将标注添加到地图中
	    // 创建地理编码实例      
		var myGeo = new BMap.Geocoder();      
		// 根据坐标得到地址描述    
		myGeo.getLocation(poi, function(result){      
            if (result){ 
                houseAddress.html("房源地址 : "+result.address);
                var optsk = {type: BMAP_NAVIGATION_CONTROL_LARGE,offset: new BMap.Size(0, 50) }   //缩放控件
				map.addControl(new BMap.NavigationControl(optsk));
				var opts = {
				  width : 200,     // 信息窗口宽度
				}
				var infoWindow = new BMap.InfoWindow("房源地址："+result.address, opts);  // 创建信息窗口对象 
				marker.addEventListener("click", function(){          
					map.openInfoWindow(infoWindow,poi); //开启信息窗口
				});

            }      
		});
	    















	})    
})();
