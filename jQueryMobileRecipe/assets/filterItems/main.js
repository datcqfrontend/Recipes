$(document).on("pagebeforeshow","#filterItems",function(){ // When entering pagetwo
  //alert("Home is about to be shown");
  var slide = '#filterItems';

  //$('h3.active a', slide).addClass('ui-btn-active');

  $('#btnPrev', slide).attr('href','#listContent');
  $('#btnNext', slide).attr('href','#formBasic');

});
$(document).on("pageshow","#filterItems",function(){ // When entering pagetwo
 //alert("Home is now shown");
});
$(document).on("pagebeforehide","#filterItems",function(){ // When leaving pagetwo
  //alert("Home is about to be hidden");
});
$(document).on("pagehide","#filterItems",function(){ // When leaving pagetwo
  //alert("Home is now hidden");
});