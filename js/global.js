// JavaScript Document
$(document).ready(function() {
	var isTouch=false;


	$('.navbar-toggle').bind("click touchend", function(){
		        if(isTouch)
		        	return;
		        	$('body').removeClass("body-static");
		        	$(".navbar-collapse ").hide();
		        if($(".app_list").is(':hidden')){
		        	$(this).toggleClass("click");
		        	$("body").toggleClass("body-static");
					$(".app_list").slideToggle();
		        	$('.bg_div').css("height","100%");
		        }else{
		        	$(".app_list").hide();
		        	$('.bg_div').css("height","0");
		        	$('body').removeClass("body-static");
		        	$(this).toggleClass("click");
		        }
		        isTouch=true;
		        window.setTimeout(function(){isTouch=false;},500);
	});

    $('.app_search').bind("click touchend", function(){
        if(isTouch)
        	return;
        	$('body').removeClass("body-static");
        	$(".navbar-toggle").removeClass("click");
        	$(".app_list  ").hide();
        if($(".navbar-collapse").is(':hidden')){
        	$("body").toggleClass("body-static");
			$(".navbar-collapse").slideToggle();
        	$('.bg_div').css("height","100%");
        }else{
        	$(".navbar-collapse").hide();
        	$('.bg_div').css("height","0");
        	$('body').removeClass("body-static");
        }
        isTouch=true;
        window.setTimeout(function(){isTouch=false;},500);
    });

	$(".pannel .close").on('click touchend',function(){
		$('.pannel').hide();
		$('.overing').hide();
		$(document.body).css({ "overflow-y": "auto" });
	})

	$('.product_content .color_btn,.pdt_btn .color_btn').on('click touchend',function(e){
		e.preventDefault();
		$('.overing').show();
		$('.pannel').show();
		$(document.body).css({ "overflow-y": "hidden" });
	})

	//$('.product_main ul.top_list li').on('click touchend',function(){
		//$(".product_main ul.top_list li").find(".menu_dropdown").addClass("hide");
		//$(".product_main ul.top_list li").siblings().find(".menu_dropdown").addClass("hide");
		//$(this).find(".menu_dropdown").removeClass("hide");
	//})
	var $submenu = $('#menu_dropdown');
	var $clickmenu = $('#product_main ul.top_list li')
	var $mainmenu = $('#top_list');
	if($(window).width()<=768){
			$submenu.hide();
			$mainmenu.on('click', 'li', function() {
			$(this).find('#menu_dropdown').slideToggle().siblings('#menu_dropdown').slideUp();
			//$submenu.first().delay(400).slideDown(700);
			//$clickmenu.on('click','li', function() {
				//$submenu.siblings().find('li').removeClass('chosen');
				//$(this).addClass('chosen');
			//});
			//$mainmenu.on('click', 'li', function() {
				//$(this).find('#menu_dropdown').slideToggle().siblings('#menu_dropdown').slideUp();
			//});
			//$mainmenu.children('li:last-child').on('click', function() {
				//$mainmenu.fadeOut().delay(500).fadeIn();
			//});
			});
	};
});