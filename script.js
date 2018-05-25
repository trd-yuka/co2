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
		
		var data = {"messgae" : $("#message").val(),
				"sender" : $("#sender").val()};
		
	    $.ajax({
	    	url: "ajax.php",
	    	type: "post",
	    	data: data,
	    	success: function(result){
		        if(result == 1){
		        		$("#message").val("");
			        	$("#sender").val("");
			        	$("#invalid").remove();
			        	alert("messgae sent!");
		        }
		        	
		    	if(result == 2){
		    		$("<p style='color : red' id='invalid'>invalid email!!</p>").insertBefore( $("#sender") );
		    	}
		    	
//		    	if(result == 3){
//		    		$("<p style='color : red' id='invalid'>required!!</p>").insertBefore( $("#sender") );
//		    	}
//		    	if(result == 4){
//		    		$("<p style='color : red' id='invalid'>required!!</p>").insertBefore( $("#message") );
//		    	}
		    	
		    	
		    	if(result == 0){
			    	alert("messgae not sent!");
		    	}
	    	}
	    });
	});

});