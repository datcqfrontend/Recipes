$(document).on("pagebeforeshow","#formSliders",function(){ // When entering pagetwo
  //alert("Home is about to be shown");
  var slide = '#formSliders';
  anddev.setIndex(slide.replace('#',''));
  //$('h3.active a', slide).addClass('ui-btn-active');

  $('#btnPrev', slide).attr('href','#formSelect');
  $('#btnNext', slide).attr('href','#themes');

});
$(document).on("pageshow","#formSliders",function(){ // When entering pagetwo
 //alert("Home is now shown");
});
$(document).on("pagebeforehide","#formSliders",function(){ // When leaving pagetwo
  //alert("Home is about to be hidden");
});
$(document).on("pagehide","#formSliders",function(){ // When leaving pagetwo
  //alert("Home is now hidden");
});