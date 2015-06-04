$(document).on("pagebeforeshow","#toolbars",function(){ // When entering pagetwo
  //alert("Home is about to be shown");
  var slide = '#toolbars';

  //$('h3.active a', slide).addClass('ui-btn-active');

  $('#btnPrev', slide).attr('href','#popups');
  $('#btnNext', slide).attr('href','#navbars');

});
$(document).on("pageshow","#toolbars",function(){ // When entering pagetwo
 //alert("Home is now shown");
});
$(document).on("pagebeforehide","#toolbars",function(){ // When leaving pagetwo
  //alert("Home is about to be hidden");
});
$(document).on("pagehide","#toolbars",function(){ // When leaving pagetwo
  //alert("Home is now hidden");
});