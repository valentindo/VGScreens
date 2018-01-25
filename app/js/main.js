$(function(){
	console.log('Ready');

	//Burger Menu
	$(".burger-menu").click(function(){
		$("nav").toggleClass("active-menu");
		$("main").toggleClass("push-content");
		$(".shadow").toggleClass("shadow-active");
		// $("main").css("margin-left", "300px");
	});
});
