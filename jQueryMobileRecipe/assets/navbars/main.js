$(document).on("pagebeforeshow","#navbars",function(){ // When entering pagetwo
  //alert("Home is about to be shown");
  var slide = '#navbars';

  //$('h3.active a', slide).addClass('ui-btn-active');

  $('#btnPrev', slide).attr('href','#toolbars');
  $('#btnNext', slide).attr('href','#panels');

});
$(document).on("pageshow","#navbars",function(){ // When entering pagetwo
 //alert("Home is now shown");
});
$(document).on("pagebeforehide","#navbars",function(){ // When leaving pagetwo
  //alert("Home is about to be hidden");
});
$(document).on("pagehide","#navbars",function(){ // When leaving pagetwo
  //alert("Home is now hidden");
});