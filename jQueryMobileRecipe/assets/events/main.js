$(document).on("pagebeforeshow","#events",function(){ // When entering pagetwo
  //alert("Home is about to be shown");
  var slide = '#events';

  //$('h3.active a', slide).addClass('ui-btn-active');

  $('#btnPrev', slide).attr('href','#themes');
  $('#btnNext', slide).attr('href','#touch');

});
$(document).on("pageshow","#events",function(){ // When entering pagetwo
 //alert("Home is now shown");
});
$(document).on("pagebeforehide","#events",function(){ // When leaving pagetwo
  //alert("Home is about to be hidden");
});
$(document).on("pagehide","#events",function(){ // When leaving pagetwo
  //alert("Home is now hidden");
});