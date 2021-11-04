$(document).ready(function(){

    $('nav li').hover(function(){
		    $('ul', this).slideToggle("fast");
		});

});