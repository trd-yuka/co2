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
	
	$("#sendemail").click(function(){
		
		var data = {"messgae" : $("#message").val()};
		
	    $.ajax({
	    	url: "ajax.php",
	    	type: "post",
	    	data: data,
	    	success: function(result){
	        if(result !=0){
	        	alert("messgae sent!");
	        }else{
	        	alert("messgae not sent!");
	        }
	    }});
	});

});