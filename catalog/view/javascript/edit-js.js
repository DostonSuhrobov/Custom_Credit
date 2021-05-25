





jQuery(function($){

$(window).on('load resize', function(){
 // var CalculateHeight = $('body.affiliate-register').find('.header').innerHeight();
 // console.log(CalculateHeight);
});




$('.toggle-menu').click(function(e){

  e.preventDefault();

  $('.nav-sup').stop(true, true).slideToggle();

});



$('.nav-sup ul li > ul').parents('li').prepend('<span class="arw"></span>');

$('.nav-sup ul > li .arw').click(function(){

  $(this).parents('li').find('ul').stop(true, true).slideToggle(300);

  $(this).parents('li').siblings().find('ul').stop(true, true).slideUp(300);

  $(this).toggleClass('actv');

  $(this).parents('li').siblings().find('.arw').removeClass('actv');

});





$('.banner-slider').slick({

  dots:true,

  infinite: true,

  speed:1000,

  fade: true,

  cssEase: 'linear',

  autoplay:true,

  pauseOnHover:false,

  arrows:true

});



$('.testimonial-slider').slick({

  dots:true,

  infinite: true,

  speed:1000,

  fade: true,

  cssEase: 'linear',

  autoplay:true,

  pauseOnHover:false,

  arrows:true

});



var allPanels = $('.accordion > dd').hide();

    

  $('.accordion > dt ').on('click',function() {

    $(this).toggleClass('active').next().slideToggle(300).end().siblings("dt").removeClass("active").next("dd").slideUp(300);;

    return false;

  });



  $('.accordion dt').eq(0).trigger('click');



$('.card-version-row .gallery-thumb label').click(function(){

  $(this).parents('.col-sm-6').find('figure').addClass('active-card');

  $(this).parents('.col-sm-6').siblings().find('figure').removeClass('active-card');

});

$('.card-version-row .gallery-thumb figure').click(function(){

  $(this).addClass('active-card');

  $(this).parents('.col-sm-6').siblings().find('figure').removeClass('active-card');

});

$('.selectlogo-box ul > li input').click(function(){

    $(this).parents('.selectlogo-box').find('.signature-brows').hide();

});



$('.selectlogo-box ul > li:last-child input').click(function(){

    $(this).parents('.selectlogo-box').find('.signature-brows').show();

});





});

	

	

	

	

	

	

	

	

	

