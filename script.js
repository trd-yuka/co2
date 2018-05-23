$(document).ready(function(){
	//for toogle dropdown
	$(".dropdown-toggle").click(function(){
		$(".dropdown-menu").toggle();
	});
	
	//for scroll animation
	var scrollLink = $('.scroll');
	scrollLink.click(function(e) { 
		e.preventDefault();
		
	    $('body, html').animate({
	        scrollTop: $(this.hash).offset().top	
	    }, 1000,"easeInOutExpo");
		
		$("#collapsibledropdown").hide();
	});

});