// JavaScript Document

/***房客预定房源***/

$(function(){
	/***提交订单***/
	//入住人数
	var peoplenum = $("people-no").val();
	if(peoplenum>6){
		alert('最多入住6位');
	}
	//新增入住人
	$(".add-btn").on("click",function(){
		//添加入住人信息
		$(".tab-infor tbody").append('<tr>'+									
    					'<td><input class="name" type="text" value="张某某" /></td>'+
    					'<td>'+
    						'<select class="card-type">'+
	    						'<option value="">请选择</option>'+
	    						'<option value="">身份证</option>'+
	    						'<option value="">港澳通行证</option>'+
	    						'<option value="">台湾通行证</option>'+
	    						'<option value="">军官通行证</option>'+
	    						'<option value="">护照</option>'+
	    					'</select>'+
    					'</td>'+
    					'<td><input class="card" type="text" value="522726455821415222" /></td>'+
    					'<td><input class="phone" type="tel" value="12549879877" /></td>'+
    					'<td>'+
    						'<select class="sex">'+
	    						'<option>请选择</option>'+
	    						'<option>男</option>'+
	    						'<option>女</option>'+
	    					'</select>'+
    					'</td>'+
    					'<td><input type="date" value="2017-1-5" /></td>'+
    					'<td class="delete"><a class="delete-btn" href="javascript:;">删除</a></td>'+
    				'</tr>'								
		);
		//删除
		$(".delete-btn").on("click",function(){
			$(this).parent().parent().remove(); //删除tr信息
		});
	});
	
	//修改
	$(".change-num").on("click",function(){
		$(".reserve-code").toggle(); //短信，图片验证码的显示
		$(this).css("display","none"); //class名为change-num隐藏
		$(".change-off").css("display","inline-block");  //‘取消修改’文本显示
	});
	//取消修改
	$(".change-off").on("click",function(){
		$(".reserve-code").toggle(); //短信，图片验证码的隐藏
		$(this).css("display","none"); //class名为change-off元素隐藏
		$(".change-num").css("display","inline-block"); //‘修改’文本显示
	});
	
});