$().ready(function(){

	$("#navbutton").click(function(){
		$("header").toggleClass("togglebar");
		$(".buttonav").toggleClass("switchicon");
	});

	$("#firstNavButton").click(function(){
			$("header a").removeClass("activatelink");
			$("header a li").removeClass("colorlink");
			$("#firstNavButton").toggleClass("activatelink");
			$("#firstNavButton li").toggleClass("colorlink");
	});

	$("#secondNavButton").click(function(){
			$("header a").removeClass("activatelink");
			$("header a li").removeClass("colorlink");
			$("#secondNavButton").toggleClass("activatelink");
			$("#secondNavButton li").toggleClass("colorlink");
	});

	$("#thirdNavButton").click(function(){
			$("header a").removeClass("activatelink");
			$("header a li").removeClass("colorlink");
			$("#thirdNavButton").toggleClass("activatelink");
			$("#thirdNavButton li").toggleClass("colorlink");
	});

});