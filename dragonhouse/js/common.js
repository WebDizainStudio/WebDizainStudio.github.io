
	$(document).ready(function(){
  $(".owl-theme").owlCarousel({
     items:1,
    autoplay:true,
    autoplayTimeout:3000,
  	 loop: true,
  	 nav:true,
  	 navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
  	 responsiveClass:true,
  	 smartSpeed: 700
  	});

  $(".reviwes").owlCarousel({
     items:1,
  	 loop: true,
  	 nav:true,
  	 navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
  	 responsiveClass:true,
     smartSpeed: 700

  	});


    $('.popup-content').magnificPopup({
        type: 'inline'
    });

    $('.button').click(function(){
        $(this).toggleClass('active');
        $('.block').toggleClass('opener');
        if (!$(this).data('status')) {
            $(this).data('status', true).html('Свернуть');
        } else {
            $(this).data('status', false).html('Показать полностью');
        }

});

$('.button-two').click(function(){
        $(this).toggleClass('active');
        $('.block-two').toggleClass('opener');
        if (!$(this).data('status')) {
            $(this).data('status', true).html('Свернуть');
        } else {
            $(this).data('status', false).html('Показать полностью');
        }

});  

$("#form").submit(function() {
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize()
    }).done(function() {
      $(this).find("input").val("");
      alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
      $("#form").trigger("reset");
    });
    return false;
  });  


});

