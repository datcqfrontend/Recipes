$(document).on("pagebeforeshow","#grids",function(){ // When entering pagetwo
  //alert("Home is about to be shown");
  var slide = '#grids';

  //$('h3.active a', slide).addClass('ui-btn-active');

  $('#btnPrev', slide).attr('href','#tables');
  $('#btnNext', slide).attr('href','#listViews');

});
$(document).on("pageshow","#grids",function(){ // When entering pagetwo
 //alert("Home is now shown");
});
$(document).on("pagebeforehide","#grids",function(){ // When leaving pagetwo
  //alert("Home is about to be hidden");
});
$(document).on("pagehide","#grids",function(){ // When leaving pagetwo
  //alert("Home is now hidden");
});