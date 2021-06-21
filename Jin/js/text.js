$(()=>{


   $('.site-info').addClass('info-slide')
   $('.site-info2').addClass('info-slide')
  $(' label').click(function () { 
  $(' label').toggleClass('close-menu')
  $('.menu-box').toggleClass('menu-show');
  $('.slide-wrapper').toggleClass('sliding')
  });
 function play() {
   document.querySelector(".site-info").className = "site-info";
   window.requestAnimationFrame(function (time) {
     window.requestAnimationFrame(function (time) {
       document.querySelector(".site-info").className = "site-info info-slide";
     });
   });
 }
 function play2() {
   document.querySelector(".nav-menu2").className = "nav-menu2";
   window.requestAnimationFrame(function (time) {
     window.requestAnimationFrame(function (time) {
       document.querySelector(".nav-menu2").className = "nav-menu2";
     });
   });
 }
 function play3() {
   document.querySelector(".site-info2").className = "site-info2";
   window.requestAnimationFrame(function (time) {
     window.requestAnimationFrame(function (time) {
       document.querySelector(".site-info2").className = "site-info2 info-slide";
     });
   });
 }
 $(window).resize(function () { 
   play();
   play2();
   play3();
 });
 if (window.performance.navigation.type === 0 /* TYPE_NAVIGATE */ ) {
  if ($(window).width()<480 || $(window).innerHeight()<480) {
     $('.header1').show();
     $('.nav-menu').show();
     $('.header2').hide();
  }else{
    $('.header1').hide();
  $('.nav-menu').hide();
   $('.header2').show();
  }
   // 初期表示
 } else if (window.performance.navigation.type === 1 /* TYPE_RELOAD */ ) {
   if ($(window).width()<480 || $(window).innerHeight()<480) { 
     $('.header1').show();
     $('.nav-menu').show();
     $('.header2').hide();
     $('.download-title').css({
       borderRadius: '0'
     })
   }else{
   $('.header1').hide();
   $('.nav-menu').hide();
     $('.header2').show();
 
 
 
   }
   // リロード
 } else if (window.performance.navigation.type === 2 /* TYPE_BACK_FORWARD */ ) {
  if ($(window).width()<480 || $(window).innerHeight()<480) { 
    $('.header1').show();
    $('.nav-menu').show();
    $('.header2').hide();
    $('.download-title').css({
      borderRadius: '0'
    })
  }else{
  $('.header1').hide();
  $('.nav-menu').hide();
    $('.header2').show();



  }
   // 履歴から遷移
 } else {
   // その他
 }


  $('.scroll-top').hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $('.scroll-top').fadeIn(600);
     
    } else {
      $('.scroll-top'). fadeOut(600);
    };
  });
  $('.scroll-top').click(function () {
    $('html').animate({
      scrollTop: 0
    })
    return false;
  });

})