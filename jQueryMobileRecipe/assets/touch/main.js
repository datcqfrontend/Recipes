$(document).on("pagebeforeshow","#touch",function(){ // When entering pagetwo
  //alert("Home is about to be shown");
  var slide = '#touch';
  anddev.setIndex(slide.replace('#',''));
  //$('h3.active a', slide).addClass('ui-btn-active');

  $('#btnPrev', slide).attr('href','#events');
  $('#btnNext', slide).attr('href','#scroll');

});
$(document).on("pageshow","#touch",function(){ // When entering pagetwo
 //alert("Home is now shown");
});
$(document).on("pagebeforehide","#touch",function(){ // When leaving pagetwo
  //alert("Home is about to be hidden");
});
$(document).on("pagehide","#touch",function(){ // When leaving pagetwo
  //alert("Home is now hidden");
});