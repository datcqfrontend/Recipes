$(document).on("pagebeforeshow","#themes",function(){ // When entering pagetwo
  //alert("Home is about to be shown");
  var slide = '#themes';

  //$('h3.active a', slide).addClass('ui-btn-active');

  $('#btnPrev', slide).attr('href','#formSliders');
  $('#btnNext', slide).attr('href','#events');

});
$(document).on("pageshow","#themes",function(){ // When entering pagetwo
 //alert("Home is now shown");
});
$(document).on("pagebeforehide","#themes",function(){ // When leaving pagetwo
  //alert("Home is about to be hidden");
});
$(document).on("pagehide","#themes",function(){ // When leaving pagetwo
  //alert("Home is now hidden");
});