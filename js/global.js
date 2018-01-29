// JavaScript Document
$(document).ready(function() {


	$(".pannel .close").on('click touchend',function(){
		$('.pannel').hide();
		$('.overing').hide();
	})

	$('.product_content .color_btn,.pdt_btn .color_btn').on('click touchend',function(e){
		e.preventDefault();
		$('.overing').show();
		$('.pannel').show();
		$(document.body).css({ "overflow-y": "hidden" });
	})

});