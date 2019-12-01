$(function () {
	$('.top .navbar-toggle').click(function () {
		var fa = $(this).find('.fa');
		var fabars = fa.hasClass('fa-bars');
		if (fabars) {
			fa.removeClass('fa-bars').addClass('fa-close');
			$('.top').css({
				'background-color': '#1976D2'
			});
			$('.top .navbar-collapse').css({
				'background-color': 'rgba(0,0,0,0.7)',
				'z-index': '9999'
			});
		} else {
			fa.removeClass('fa-close').addClass('fa-bars');
			$('.top').css({
				'background': 'none'
			});
		}
	});


	$('.top .panel-heading>a').click(function () {
		var icon = $(this).find('.glyphicon');
		var aria_expanded = $(this).attr('aria-expanded');
		if (aria_expanded == 'false') {
			icon.removeClass('glyphicon-chevron-right').addClass('glyphicon-chevron-down');
		} else {
			icon.removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-right');
		}
	})
	$("#gototop").click(function () {
		//$('body,html').animate({scrollTop:0},1000);
		if ($('html').scrollTop()) {
			$('html').animate({
				scrollTop: 0
			}, 1000);
			return false;
		}
		$('body').animate({
			scrollTop: 0
		}, 1000);
		return false;
	});
	$(".business-bar  .business-bar-item").click(function (e) {
		var id = $(this).attr('data-id')
		var type = $(this).attr('data-type')
		console.log(type)
		$(this).siblings().removeClass('active'); // 删除其他兄弟元素的样式
		$(this).addClass('active');
		$(this).append($('#'+type).find(".media-icon-arrow"));
		
		$('#'+type).find(".business-bar-img").attr("src",'imgs/chart_'+id+'.png')
	});
	
})