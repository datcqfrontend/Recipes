$(document).on("pagebeforeshow","#page1",function(){ // When entering pagetwo
  //alert("Page1 is about to be shown");
});
$(document).on("pageshow","#page1",function(){ // When entering pagetwo
  //alert("Page1 is now shown");
});
$(document).on("pagebeforehide","#page1",function(){ // When leaving pagetwo
  //alert("Page1 is about to be hidden");
});
$(document).on("pagehide","#page1",function(){ // When leaving pagetwo
  //alert("Page1 is now hidden");
});