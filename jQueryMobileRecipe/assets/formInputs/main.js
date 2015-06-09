$(document).on("pagebeforeshow","#formInputs",function(){ // When entering pagetwo
  //alert("Home is about to be shown");
  var slide = '#formInputs';
  anddev.setIndex(slide.replace('#',''));
  //$('h3.active a', slide).addClass('ui-btn-active');

  $('#btnPrev', slide).attr('href','#formBasic');
  $('#btnNext', slide).attr('href','#formSelect');

});
$(document).on("pageshow","#formInputs",function(){ // When entering pagetwo
 //alert("Home is now shown");
});
$(document).on("pagebeforehide","#formInputs",function(){ // When leaving pagetwo
  //alert("Home is about to be hidden");
});
$(document).on("pagehide","#formInputs",function(){ // When leaving pagetwo
  //alert("Home is now hidden");
});