$(document).on("pagebeforeshow","#transitions",function(){ // When entering pagetwo
  //alert("Home is about to be shown");
  var slide = '#transitions';

  //$('h3.active a', slide).addClass('ui-btn-active');

  $('#btnPrev', slide).attr('href','#pages');
  $('#btnNext', slide).attr('href','#buttons');

});
$(document).on("pageshow","#transitions",function(){ // When entering pagetwo
 //alert("Home is now shown");
});
$(document).on("pagebeforehide","#transitions",function(){ // When leaving pagetwo
  //alert("Home is about to be hidden");
});
$(document).on("pagehide","#transitions",function(){ // When leaving pagetwo
  //alert("Home is now hidden");
});