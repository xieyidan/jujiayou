// JavaScript Document

$(function(){
	//控件（单选框、多选框）
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
	
	//地图
	// 百度地图API功能
//	var map = new BMap.Map('allmap');
//	console.log(map)
//	map.centerAndZoom(new BMap.Point(116.404, 39.915), 14);
//	var local = new BMap.LocalSearch(map, {
//	  renderOptions:{map: map}
//	});
//	local.searchInBounds("银行", map.getBounds());
//	
//	map.addEventListener("dragend",function(){
//	    map.clearOverlays();
//	    local.searchInBounds("银行", map.getBounds());
//	});
	// 百度地图API功能
	var map = new BMap.Map("allmap");    // 创建Map实例
	map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
	map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
	map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
	map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
});