$(document).on("pagebeforeshow","#panels",function(){ // When entering pagetwo
  //alert("Home is about to be shown");
  var slide = '#panels';

  //$('h3.active a', slide).addClass('ui-btn-active');

  $('#btnPrev', slide).attr('href','#navbars');
  $('#btnNext', slide).attr('href','#collapsibles');

});
$(document).on("pageshow","#panels",function(){ // When entering pagetwo
 //alert("Home is now shown");
});
$(document).on("pagebeforehide","#panels",function(){ // When leaving pagetwo
  //alert("Home is about to be hidden");
});
$(document).on("pagehide","#panels",function(){ // When leaving pagetwo
  //alert("Home is now hidden");
});