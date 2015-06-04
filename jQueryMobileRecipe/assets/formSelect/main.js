$(document).on("pagebeforeshow","#formSelect",function(){ // When entering pagetwo
  //alert("Home is about to be shown");
  var slide = '#formSelect';

  //$('h3.active a', slide).addClass('ui-btn-active');

  $('#btnPrev', slide).attr('href','#formInputs');
  $('#btnNext', slide).attr('href','#formSliders');

});
$(document).on("pageshow","#formSelect",function(){ // When entering pagetwo
 //alert("Home is now shown");
});
$(document).on("pagebeforehide","#formSelect",function(){ // When leaving pagetwo
  //alert("Home is about to be hidden");
});
$(document).on("pagehide","#formSelect",function(){ // When leaving pagetwo
  //alert("Home is now hidden");
});