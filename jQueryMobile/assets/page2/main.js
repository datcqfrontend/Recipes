$(document).on("pagebeforeshow","#page2",function(){ // When entering pagetwo
  //alert("Page2 is about to be shown");
});
$(document).on("pageshow","#page2",function(){ // When entering pagetwo
  //alert("Page2 is now shown");
});
$(document).on("pagebeforehide","#page2",function(){ // When leaving pagetwo
  //alert("Page2 is about to be hidden");
});
$(document).on("pagehide","#page2",function(){ // When leaving pagetwo
  //alert("Page2 is now hidden");
});