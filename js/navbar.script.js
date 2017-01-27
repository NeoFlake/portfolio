$().ready(function(){

	$("#navbutton").click(function(){
		$(".headtransition").toggleClass("togglebar");
	});

	$("#firstNavButton").click(function(){
			$("header a").removeClass("activatelink");
			$("header a li").removeClass("bazarlink");
			$("#firstNavButton").toggleClass("activatelink");
			$("#firstNavButton li").toggleClass("bazarlink");
	});

	$("#secondNavButton").click(function(){
			$("header a").removeClass("activatelink");
			$("header a li").removeClass("bazarlink");
			$("#secondNavButton").toggleClass("activatelink");
			$("#secondNavButton li").toggleClass("bazarlink");
	});

	$("#thirdNavButton").click(function(){
			$("header a").removeClass("activatelink");
			$("header a li").removeClass("bazarlink");
			$("#thirdNavButton").toggleClass("activatelink");
			$("#thirdNavButton li").toggleClass("bazarlink");
	});

});