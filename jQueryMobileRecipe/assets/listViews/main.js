$(document).on("pagebeforeshow","#listViews",function(){ // When entering pagetwo
  //alert("Home is about to be shown");
  var slide = '#listViews';
  anddev.setIndex(slide.replace('#',''));
  //$('h3.active a', slide).addClass('ui-btn-active');

  $('#btnPrev', slide).attr('href','#grids');
  $('#btnNext', slide).attr('href','#listContent');

});
$(document).on("pageshow","#listViews",function(){ // When entering pagetwo
 //alert("Home is now shown");
});
$(document).on("pagebeforehide","#listViews",function(){ // When leaving pagetwo
  //alert("Home is about to be hidden");
});
$(document).on("pagehide","#listViews",function(){ // When leaving pagetwo
  //alert("Home is now hidden");
});