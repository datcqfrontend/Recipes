$(document).on("pagebeforeshow","#home",function(){ // When entering pagetwo
  //alert("Home is about to be shown");
});
$(document).on("pageshow","#home",function(){ // When entering pagetwo
 //alert("Home is now shown");
});
$(document).on("pagebeforehide","#home",function(){ // When leaving pagetwo
  //alert("Home is about to be hidden");
});
$(document).on("pagehide","#home",function(){ // When leaving pagetwo
  //alert("Home is now hidden");
});