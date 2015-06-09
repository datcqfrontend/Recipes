$(document).on("pagebeforeshow","#orientation",function(){ // When entering pagetwo
  //alert("Home is about to be shown");
  var slide = '#orientation';
  anddev.setIndex(slide.replace('#',''));
  //$('h3.active a', slide).addClass('ui-btn-active');

  $('#btnPrev', slide).attr('href','#scroll');
  $('#btnNext', slide).attr('href','#pageEvents');

});
$(document).on("pageshow","#orientation",function(){ // When entering pagetwo
 //alert("Home is now shown");
});
$(document).on("pagebeforehide","#orientation",function(){ // When leaving pagetwo
  //alert("Home is about to be hidden");
});
$(document).on("pagehide","#orientation",function(){ // When leaving pagetwo
  //alert("Home is now hidden");
});