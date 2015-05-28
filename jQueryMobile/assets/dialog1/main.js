$(document).on("pagebeforeshow","#dialog1",function(){ // When entering pagetwo
  //alert("Page3 is about to be shown");
});
$(document).on("pageshow","#dialog1",function(){ // When entering pagetwo
  //alert("Page3 is now shown");
});
$(document).on("pagebeforehide","#dialog1",function(){ // When leaving pagetwo
  //alert("Page3 is about to be hidden");
});
$(document).on("pagehide","#dialog1",function(){ // When leaving pagetwo
  //alert("Page3 is now hidden");
});