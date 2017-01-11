;(function () {
	$(document).ready(function(){ 
/******轮播图**********/
	var housePic = $('.house-pic');//外层
	var LargePic = $('.Large-pic');//大图
	var thumbPic = $('.thumb_pic');//缩略图
	var btn1 = $('.btn1');//左边按钮
	var btn2 = $('.btn2');//右边按钮
	var index = 0 ;
	var allWidth = thumbPic.width();//ul总宽度
	var LiWidth = thumbPic.width()/10; //li宽度
	//获取所有图片
    var len = LargePic.children("li").length;
  	console.log(len)
	//初始状态
    show();
    //自动轮播
    //var timer = setInterval(animating,3000);
    //点击小图时
	thumbPic.on("click","li",function(){
		//clearInterval(timer);  //清除定时器
		index = $(this).index();
		show();
	});
	//左右控制
	btn1.on("click",function(){
		index--;
		show();
		console.log(index);
		if (index > 3) {
			thumbPic.animate({left:"+=132px"});
			
		}else if(index == 0){
			index = 1;
			thumbPic.children("li").eq(index-1).animate({opacity:1}).siblings().animate({opacity:0.5});
		}
		
	})
	btn2.on("click",function(){
		
		index++;
		show();
		console.log(index)
		if (index >= 5 && index < len-1) {
			thumbPic.animate({left:"-=132px"});
			
		}else if(index == len-1) {
			index =len-2;
			thumbPic.children("li").eq(index).animate({opacity:1}).siblings().animate({opacity:0.5});
		}
		
	});
	
	//图片轮播
//	function animating(){
//		index++;
//		show();
//	}
     		
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
					rightBox.css({"position":"relative","top":"1610px","right":"0px"});
				}else{
					col.show();
					rightBox.css({"position":"fixed","top":"60px","right":"332px"});
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
		var house = $(".house:gt(0)");
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
