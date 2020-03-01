$('.burger').click(function(){
  $('.burger-item').toggleClass('burger-item_open');
  $('.nav__list').toggleClass('nav__list-open');
});

$(window).scroll(function(){
  if ($(this).scrollTop()>=200) {
    $('.logo').addClass('logo-scroll');
  }
  else {
    $('.logo').removeClass('logo-scroll');
  }
});

$(window).scroll(function(){
  if ($(this).scrollTop()>=200) {
    $('.burger').addClass('burger-scroll');
  }
  else {
    $('.burger').removeClass('burger-scroll');
  }
});