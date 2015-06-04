$(document).on("pagebeforeshow","#tables",function(){ // When entering pagetwo
  //alert("Home is about to be shown");
  var slide = '#tables';

  //$('h3.active a', slide).addClass('ui-btn-active');

  $('#btnPrev', slide).attr('href','#collapsibles');
  $('#btnNext', slide).attr('href','#grids');

});
$(document).on("pageshow","#tables",function(){ // When entering pagetwo
 //alert("Home is now shown");
});
$(document).on("pagebeforehide","#tables",function(){ // When leaving pagetwo
  //alert("Home is about to be hidden");
});
$(document).on("pagehide","#tables",function(){ // When leaving pagetwo
  //alert("Home is now hidden");
});