$(document).ready(function(){
  $('.icon-menu').click(function(){
    $('.menu').addClass("open");
  });
  $('.icon-close').click(function(){
    $('.menu').removeClass('open');
  });
})