
$(document).ready(function(){
	(function(){
		var nav_height = -( $('#page_nav').outerHeight() )/2;
		nav_height += "px";
		console.log(nav_height);
		console.log($('#page_nav').css('margin_top', nav_height));
		$('#page_nav').css('margin_top', nav_height);

	})();

	$('#arrow_top').click(function(){
		$('#page_nav').css("left", "0");
	});

});