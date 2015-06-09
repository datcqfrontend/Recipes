$(document).on("pagebeforeshow","#scroll",function(){ // When entering pagetwo
  //alert("Home is about to be shown");
  var slide = '#scroll';
  anddev.setIndex(slide.replace('#',''));
  //$('h3.active a', slide).addClass('ui-btn-active');

  $('#btnPrev', slide).attr('href','#touch');
  $('#btnNext', slide).attr('href','#orientation');
});
$(document).on("pageshow","#scroll",function(){ // When entering pagetwo
 //alert("Home is now shown");
});
$(document).on("pagebeforehide","#scroll",function(){ // When leaving pagetwo
  //alert("Home is about to be hidden");
});
$(document).on("pagehide","#scroll",function(){ // When leaving pagetwo
  //alert("Home is now hidden");
});

