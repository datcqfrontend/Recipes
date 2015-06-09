$(document).on("pagebeforeshow","#listContent",function(){ // When entering pagetwo
  //alert("Home is about to be shown");
  var slide = '#listContent';
  anddev.setIndex(slide.replace('#',''));
  //$('h3.active a', slide).addClass('ui-btn-active');

  $('#btnPrev', slide).attr('href','#listViews');
  $('#btnNext', slide).attr('href','#filterItems');

});
$(document).on("pageshow","#listContent",function(){ // When entering pagetwo
 //alert("Home is now shown");
});
$(document).on("pagebeforehide","#listContent",function(){ // When leaving pagetwo
  //alert("Home is about to be hidden");
});
$(document).on("pagehide","#listContent",function(){ // When leaving pagetwo
  //alert("Home is now hidden");
});