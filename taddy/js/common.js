$(document).ready(function() {

$(".wrapper_tab .tab").click(function() { 
$(".wrapper_tab .tab").removeClass("active").eq($(this).index()).addClass("active"); 
$(".tab_item").hide().eq($(this).index()).fadeIn() 
}).eq(0).addClass("active"); 


	$(".menu_600 ul a").click(function() {
		$(".menu_600").fadeOut(600);
		$(".sandwich").toggleClass("active");
		$(".top_text").css("opacity", "1");
	}).append("<span>");

	$(".toggle_mnu").click(function() {
		if ($(".menu_600").is(":visible")) {
			$(".menu_600").css("opacity", "1");
			$(".menu_600").fadeOut(300);
			
		} else {
			$(".top_text").css("opacity", ".1");
			$(".menu_600").fadeIn(300);
			
		};
	});
  

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>

	$(".fancybox").fancybox();

		//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function(e) {
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
	});
	
});

$(window).load(function() {
	
	$(".r-slide-right").animated("fadeInRight");

}); 


