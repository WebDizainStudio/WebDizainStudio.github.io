$(document).ready(function(){
  $(".owl-theme").owlCarousel({
     items:1,
    autoplay:true,
    autoplayTimeout:4000,
  	 loop: true,
  	 nav:true,
  	 navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
  	 responsiveClass:true,
  	 smartSpeed: 700
  	});

});

