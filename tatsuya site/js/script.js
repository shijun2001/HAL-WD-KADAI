$(document).ready(function() {
  
  	// Drop nav
  	$('#drop-ul').hide(); //打开页面隐藏下拉列表 

	$('#drop').hover( //鼠标滑过导航栏目时 
		function(){ 
			$('#drop-ul').show(); //显示下拉列表 
			$(this).css({'color':'black','background-color':'yellow'}); //设置导航栏目样式，醒目 
		}, 
		function(){ 
			$('#drop-ul').hide(); //鼠标移开后隐藏下拉列表 
		} 
	); 

	$('#drop-ul').hover( //鼠标滑过下拉列表自身也要显示，防止无法点击下拉列表 
		function(){ 
			$('#drop-ul').show(); 
			}, 
		function(){ 
			$('#drop-ul').hide(); 
			$('#drop').css({'color':'white','background-color':'black'}); //鼠标移开下拉列表后，导航栏目的样式也清除 
		} 
	); 

	/*$('#drop-ul li').hover( //鼠标滑过下拉列表是改变当前栏目样式 
		function(){ 
			$(this).css({'color':'black','background-color':'yellow'}); 
		}, 
		function(){ 
			$(this).css({'color':'white','background-color':'black'}); 
		} 
	); */




	// Discography
	$('.section-discography .discnav a').on('click', function(){
		// Current class assigniment
		$('.section-discography .discnav li.current').removeClass('current');
		$(this).parent().addClass('current');

		// Set heading text
		$('.section-discography h3#heading').text($(this).text());

		// Get & filter link text
		var category = $(this).text().toLowerCase().replace(' ','-');

		// Remove hidden class if 'all-projects' is selected
		if(category == 'all-discography'){
			$('.section-discography .container ul#gallery li:hidden').fadeIn('slow').removeClass('hidden');
		} else {
			$('.section-discography .container ul#gallery li').each(function(){
				if(!$(this).hasClass(category)){
					$(this).hide().addClass('hidden');
				} else {
					$(this).fadeIn('slow').removeClass('hidden');
				}
			});
		}
		// Stop link behaviour
		return false;
	});

	// Mouseenter Overlay Effect
	$('.section-discography .container ul#gallery li').on('mouseenter',function(){
		// Get data attribute values
		var title = $(this).children().data('title');
		var desc = $(this).children().data('desc');

		// Validation
		if(desc == null){
			desc = 'Click To Enlarge';
		}

		if(title == null){
			title = '';
		}

		// Create an overlay div
		$(this).append('<div class="overlay"></div>');

		// Get the overlay div
		var overlay = $(this).children('.overlay');

		// Add html to overlay
		overlay.html('<h3>'+title+'</h3><p>'+desc+'</p>');

		// Fade in overlay
		overlay.fadeIn(800);
	});

	// Mouseleave Overlay Effect
	$('.section-discography .container ul#gallery li').on('mouseleave',function(){
		// Create an overlay div
		$(this).append('<div class="overlay"></div>');

		// Get the overlay div
		var overlay = $(this).children('.overlay');

		// Fade out overlay
		overlay.fadeOut(500);
	});



	
});