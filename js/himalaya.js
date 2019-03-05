$( document ).ready(function() {
    $('.search').on('click', function(){
    	$('#searchform').addClass('show-form');
    	$('nav .navbar-nav').css("display", "none");
    	$('.cross').css("display", "block");
    	$('.search').css("display", "none");
      
	})
	$('.cross').on('click',function(){
		$('#searchform').removeClass('show-form');
		$('nav .navbar-nav').css("display", "flex");
    	$('.cross').css("display", "none");
    	$('.search').css("display", "block");

	})
});


if (window.matchMedia('(max-width: 414px)').matches) {
  $('.our-tour .row').slick({
    infinite: true,
    arrows: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
  $('.multiple-items').slick({
    infinite: true,
    arrows: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 3,
  });
}


//----TESTIMONIAL-JS-STRAT------------------------- //


 $('.multiple-items').slick({
   infinite: true,
   slidesToShow: 2,
   slidesToScroll: 3,
   autoplay:true,
 });


 //----TESTIMONIAL-JS-END------------------------- //


