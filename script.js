$(document).ready(function(){

var scrollLink = $('.scroll');

scrollLink.click(function(e) { 
	e.preventDefault();
	var off = (this.hash == "#CONCEPT") ? 100 : 70;
    $('body, html').animate({
        scrollTop: $(this.hash).offset().top - off
    }, 1000,"easeInOutExpo");
    
    $("#collapsibleNavbar").removeClass("show");
    
});
 
});