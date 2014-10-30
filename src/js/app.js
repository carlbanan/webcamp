
$(function() {



	// SLIDE THE SWIPE
	window.mySwipe = Swipe(document.getElementById('slider'), {
	 	callback: function(index, elem) {

	 		var texts = [
	 					 "Explore alternatives and make it happen",
	 					 "Find alternatives and make a change",
	 					 "Get an alternative and change will happen."
	 					 ];


	 		$(".counter .active,.dotts .active").removeClass("active");
			$("#s"+(index+1)+", #d"+(index+1)).addClass("active");
			var ti = index;
			$("#swipe-text").fadeOut(190,function(){
				$(this).html(texts[ti]).fadeIn(190);
			});

		 }
	});

	// NEXT SLIDE 
	$(".swipe").click(function () {
		window.mySwipe.next();
	});
});
