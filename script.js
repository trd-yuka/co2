$(document).ready(function(){
	//for toogle dropdown
	$(".dropdown-toggle").click(function(){
		$(".dropdown-menu").toggle();
	});
	
	//for scroll animation
	var scrollLink = $('.scroll');
	scrollLink.click(function(e) { 
		e.preventDefault();
		var off = (this.hash ==　"#CONCEPT") ? 100 : 70 
		
	    $('body, html').animate({
	        scrollTop: $(this.hash).offset().top - off
	    }, 1000,"easeInOutExpo");
		
		$("#collapsibledropdown").hide();
	});

});