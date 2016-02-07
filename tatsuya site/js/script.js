$(document).ready(function() {
  
  	// Sticky Nav
	$('.js--section-content1').waypoint(function(direction) {
		if(direction == "down") {
			$('nav').addClass('sticky');
		} else {
			$('nav').removeClass('sticky');
		}
	}, {
  		offset: '50px;'
	});	

	

	// Navigation scroll
	$(function() {
		$('a[href*=#]:not([href=#])').click(function() {
		    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		    	var target = $(this.hash);
		    	target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		    	if (target.length) {
		        	$('html,body').animate({
		        	scrollTop: target.offset().top
		        }, 1000);
		        return false;
		      }
	    	}
	  	});
	});



	// Back to top
	$('body').append('<div id="toTop"><i class="ion-ios-arrow-up"></i><br>Top</div>');
	$(window).scroll(function () {
		if ($(this).scrollTop() != 0) {
		  $('#toTop').fadeIn();
		} else {
		  $('#toTop').fadeOut();
		}
	}); 

	$('#toTop').click(function(){
		$("html, body").animate({ scrollTop: 0 }, 600);
		return false;
	});



	// Tap display
	$('div.set').click(function() {
		$('div.container').addClass('show');
		$('div').removeClass('pagevis');

		if ($(this).is('#set1')) {
			$('div#page1').addClass('pagevis').siblings('div').removeClass('pageVis');
			$('div.click').removeClass('reclick');
			$('div.click').addClass('reclick');
		}
		else if ($(this).is('#set2')) {
		    $('div#page2').addClass('pagevis');
		    $('div.click').removeClass('reclick');
			$('div.click').addClass('reclick');
		}
		else if ($(this).is('#set3')) {
		    $('div#page3').addClass('pagevis');
		    $('div.click').removeClass('reclick');
			$('div.click').addClass('reclick');
		}
	});
	
	$('div.container span#close').click(function() {
		$('div.container').removeClass('show');		
		$('div.click').hide().fadeIn(800).delay(3500).fadeOut(800);
	});


	
});
