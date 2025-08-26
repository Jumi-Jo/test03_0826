$(document).ready(function(){
  //depth2
  $(".depth2").hide();
  $("header .gnb > li").hover(function(){
    $(".depth2").show().stop();
  });
});