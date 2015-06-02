$(document).on("pagebeforeshow","#pages",function(){ // When entering pagetwo
  //alert("Home is about to be shown");
   var slide = '#pages';
  $('#btnPrev', slide).attr('href','#getStarted');
  $('#btnNext', slide).attr('href','#transitions');

});
$(document).on("pageshow","#pages",function(){ // When entering pagetwo
 //alert("Home is now shown");
 

});
$(document).on("pagebeforehide","#pages",function(){ // When leaving pagetwo
  //alert("Home is about to be hidden");
});
$(document).on("pagehide","#pages",function(){ // When leaving pagetwo
  //alert("Home is now hidden");
});