// ---------Responsive-navbar-active-animation-----------
function test(){
  var tabsNewAnim = $('#navbarSupportedContent');
  var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
  var activeItemNewAnim = tabsNewAnim.find('.active');
  var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
  var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
  var itemPosNewAnimTop = activeItemNewAnim.position();
  var itemPosNewAnimLeft = activeItemNewAnim.position();
  $(".hori-selector").css({
    "top":itemPosNewAnimTop.top + "px", 
    "left":itemPosNewAnimLeft.left + "px",
    "height": activeWidthNewAnimHeight + "px",
    "width": activeWidthNewAnimWidth + "px"
  });
  $("#navbarSupportedContent").on("click","li",function(e){
    $('#navbarSupportedContent ul li').removeClass("active");
    $(this).addClass('active');
    var activeWidthNewAnimHeight = $(this).innerHeight();
    var activeWidthNewAnimWidth = $(this).innerWidth();
    var itemPosNewAnimTop = $(this).position();
    var itemPosNewAnimLeft = $(this).position();
    $(".hori-selector").css({
      "top":itemPosNewAnimTop.top + "px", 
      "left":itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
  });
}
$(document).ready(function(){
  setTimeout(function(){ test(); });
//Typed js
  if ($('.text-slider').length == 1) {
    var typed_strings = "Web App Developer, Mobile App Developer"
       var typed = new Typed('.text-slider', {
      strings: typed_strings.split(','),
      typeSpeed: 80,
      cursorChar: '._.',
      loop: true,
      backDelay: 1100,
      backSpeed: 30
    });
  }
  //screen size function
  var alterClass = function() {
    var ww = document.body.clientWidth;
    if (ww > 768) {
      $('.icon-3d').removeClass('fa-3x');
      $('.icon-3d').addClass('fa-2x');
    } 

  };
  $(window).resize(function(){
    alterClass();
  });
  //Fire it when the page first loads:
  alterClass();
});
$(window).on('resize', function(){
  setTimeout(function(){ test(); }, 500);
});
$(".navbar-toggler").click(function(){
  setTimeout(function(){ test(); });
});



var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop:true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      // spaceBetween: 20,
    },
  },
});




//Theme change


$( "#theme" ).click(function() {
  var color = $('body').css( "background-color" );
  console.log(color);
  if (color =='rgb(255, 255, 255)' || color == 'white'){
    console.log('white')
    $("body").delay(1000).css({"background-color":"#3f3d56","color":"rgba(255, 255, 255)"});
    $(".hori-selector").delay(1000).css("background-color","#3f3d56");
    $(".hori-selector .right").delay(1000).css("background-color","#3f3d56");
    $(".hori-selector .left").delay(1000).css("background-color","#3f3d56");
    $(".icon-3d").delay(1000).css("color","#7868e6");
    $(".intro-subtitle").delay(1000).css("color","#e6e6fa");
    $(".about ul li").delay(1000).css("color","#e6e6fa");
    $(".serviceBox").delay(1000).css("background-color","#3f3d56");
    $(".serviceBox .description").delay(1000).css("color","#e6e6fa");
    $(".projects .card").delay(1000).css({"background": "rgba( 63, 61, 86, 0.45 )",
      "box-shadow": "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
      "backdrop-filter": "blur( 7.0px )",
      "-webkit-backdrop-filter": "blur( 7.0px )",
      "border-radius": "10px",
      "border": "1px solid rgba( 255, 255, 255, 0.18 )"});
  }
  else{
    $("body").delay(1000).css({"background-color":"","color":""});
    $(".hori-selector").delay(1000).css("background-color","#fff");
    $(".hori-selector .right").delay(1000).css("background-color","#fff");
    $(".hori-selector .left").delay(1000).css("background-color","#fff");
    $(".icon-3d").delay(1000).css("color","#3f3d56");
    $(".intro-subtitle").delay(1000).css("color","#3f3d56");
    $(".about ul li").delay(1000).css("color","#3f3d56");
    $(".serviceBox").delay(1000).css("background-color","#fff");
    $(".serviceBox .description").delay(1000).css("color","#444");
    $(".projects .card").delay(1000).css({"background": "rgba( 255, 255, 255, 0.40 )",
      "box-shadow": "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
      "backdrop-filter": "blur( 8.0px )",
      "-webkit-backdrop-filter": "blur( 8.0px )",
      "border-radius": "10px",
      "border": "1px solid rgba( 255, 255, 255, 0.18 )"});
    
  }
});