$(document).on("pagebeforeshow","#pageDialog",function(){ // When entering pagetwo
  //alert("Home is about to be shown");
  /* var slide = '#pageDialog';
  $('#btnPrev', slide).attr('href','#getStarted');
  $('#btnNext', slide).attr('href','#transitions');*/

});
$(document).on("pageshow","#pageDialog",function(){ // When entering pagetwo
 //alert("Home is now shown");
 

});
$(document).on("pagebeforehide","#pageDialog",function(){ // When leaving pagetwo
  //alert("Home is about to be hidden");
});
$(document).on("pagehide","#pageDialog",function(){ // When leaving pagetwo
  //alert("Home is now hidden");
});