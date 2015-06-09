$(document).on("pagebeforeshow","#pageEvents",function(){ // When entering pagetwo
  //alert("Home is about to be shown");
  var slide = '#pageEvents';
  anddev.setIndex(slide.replace('#',''));
  //$('h3.active a', slide).addClass('ui-btn-active');

  $('#btnPrev', slide).attr('href','#orientation');
  $('#btnNext', slide).attr('href','#').hide();

});
$(document).on("pageshow","#pageEvents",function(){ // When entering pagetwo
 //alert("Home is now shown");
});
$(document).on("pagebeforehide","#pageEvents",function(){ // When leaving pagetwo
  //alert("Home is about to be hidden");
});
$(document).on("pagehide","#pageEvents",function(){ // When leaving pagetwo
  //alert("Home is now hidden");
});