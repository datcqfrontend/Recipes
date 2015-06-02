$(document).on("pagebeforeshow","#page3",function(){ // When entering pagetwo
  //alert("Page3 is about to be shown");
});
$(document).on("pageshow","#page3",function(){ // When entering pagetwo
  //alert("Page3 is now shown");
});
$(document).on("pagebeforehide","#page3",function(){ // When leaving pagetwo
  //alert("Page3 is about to be hidden");
});
$(document).on("pagehide","#page3",function(){ // When leaving pagetwo
  //alert("Page3 is now hidden");
});