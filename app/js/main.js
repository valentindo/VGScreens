$(function(){

	console.log($(".item"));

	//Burger Menu
	$(".burger-menu").click(function() {
		$("nav").toggleClass("active-menu");
		$("main").toggleClass("push-content");
		$(".shadow").toggleClass("shadow-active");
		$(".imgFocus").toggleClass("push-content");
	});

	//Focus on image
	$(".item").click(function() {
		console.log("hi");
		// var focusUrl = $(this);
	});
});
