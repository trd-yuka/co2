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
	    		
	    		res = JSON.parse(result);
	    		
		        if(res[jQuery.inArray( "invalidEmail", res)] == "invalidEmail"){
		        	
		        	if(!$("#invalid").length){
		    			$('<div id="invalid" class="alert alert-danger"><strong>注意</strong> メールアドレスを入力して下さい。</div>').insertBefore( $("#sender") );
		    		}
		        	$("#success").remove();
		        		
		        }else{
	    			if($("#invalid").length){
	    				$("#invalid").remove();
	    			}
	    		}
		        	
		        if(res[jQuery.inArray( "invalidMsg", res)] == "invalidMsg"){
		        	if(!$("#invalid-msg").length){
		        		$('<div id="invalid-msg" class="alert alert-danger"><strong>注意</strong> メッセージを入力して下さい。。</div>').insertBefore( $("#message") );
					}
		        	$("#success").remove();
		    	}else{
		    		if($("#invalid-msg").length){
						$("#invalid-msg").remove();
					}
		    	}
		    	if(res[0] == "sent"){
		    		$("#message").val("");
		        	$("#sender").val("");
		        	$("#invalid").remove();
		        	$("#invalid-msg").remove();
		        	$(".form-container") .prepend('<div id="success" class="alert alert-success">送信されました。</div>' );
		    		
		    	}
	    	}
	    });
	});

});