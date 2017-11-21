$(function(){
	tab();
	
});



function tab(){
	//一回全部非表示
	$("#tab-contents div").hide();
	
	//１番だけ表示
	$("#tab1").show();

	//クリック
	$("#tabs a").click(function(){
		//一回全部非表示
		$("#tab-contents div").hide();

		//選択したものを表示
		$($(this).attr("href")).show();

		//currentクラスを削除
		$(".current").removeClass();

		//currentクラスを追加
		$(this).addClass("current");

		return false;
	});
}



$(document).ready(function() {
// Back to top
	$('body').append('<div id="toTop"><i class="fa fa-chevron-up" aria-hidden="true"></i><br>Top</div>');
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
});
