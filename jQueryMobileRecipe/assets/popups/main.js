$(document).on("pagebeforeshow","#popups",function(){ // When entering pagetwo
  //alert("Home is about to be shown");
  var slide = '#popups';

  //$('h3.active a', slide).addClass('ui-btn-active');

  $('#btnPrev', slide).attr('href','#icons');
  $('#btnNext', slide).attr('href','#toolbars');

});
$(document).on("pageshow","#popups",function(){ // When entering pagetwo
 //alert("Home is now shown");
});
$(document).on("pagebeforehide","#popups",function(){ // When leaving pagetwo
  //alert("Home is about to be hidden");
});
$(document).on("pagehide","#popups",function(){ // When leaving pagetwo
  //alert("Home is now hidden");
});