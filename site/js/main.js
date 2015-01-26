// JavaScript Document

$(document).ready(function(){
	$('#nav').slicknav();
	// fitvids jquery for do video responsive 
	$("html").niceScroll({
		cursorcolor:"#01a394",
		cursorwidth: "8px"
	});
        
});

$('#submit').on('click', function(e){
			e.preventDefault();
			window.location.assign('detail.html')
		});
		
		
$('.signpbtn').on('click', function(e){
			e.preventDefault();
			window.location.assign('login.html')
		});
		

$('#signinButton').on('click', function(e){
			e.preventDefault();
			window.location.assign('index.html')
		});
		
		
		
$('#register').on('click', function(e){
			e.preventDefault();
			window.location.assign('signup.html')
		});