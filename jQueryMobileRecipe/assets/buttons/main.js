$(document).on("pagebeforeshow","#buttons",function(){ // When entering pagetwo
  //alert("Home is about to be shown");
  var slide = '#buttons';
  anddev.setIndex(slide.replace('#',''));
  //$('h3.active a', slide).addClass('ui-btn-active');

  $('#btnPrev', slide).attr('href','#transitions');
  $('#btnNext', slide).attr('href','#icons');

});
$(document).on("pageshow","#buttons",function(){ // When entering pagetwo
 //alert("Home is now shown");
});
$(document).on("pagebeforehide","#buttons",function(){ // When leaving pagetwo
  //alert("Home is about to be hidden");
});
$(document).on("pagehide","#buttons",function(){ // When leaving pagetwo
  //alert("Home is now hidden");
});