$(document).on("pagebeforeshow","#icons",function(){ // When entering pagetwo
  //alert("Home is about to be shown");
  var slide = '#icons';
  anddev.setIndex(slide.replace('#',''));
  //$('h3.active a', slide).addClass('ui-btn-active');

  $('#btnPrev', slide).attr('href','#buttons');
  $('#btnNext', slide).attr('href','#popups');

});
$(document).on("pageshow","#icons",function(){ // When entering pagetwo
 //alert("Home is now shown");
});
$(document).on("pagebeforehide","#icons",function(){ // When leaving pagetwo
  //alert("Home is about to be hidden");
});
$(document).on("pagehide","#icons",function(){ // When leaving pagetwo
  //alert("Home is now hidden");
});