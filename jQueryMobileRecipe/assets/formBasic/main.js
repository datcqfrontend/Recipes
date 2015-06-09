$(document).on("pagebeforeshow","#formBasic",function(){ // When entering pagetwo
  //alert("Home is about to be shown");
  var slide = '#formBasic';
  anddev.setIndex(slide.replace('#',''));
  //$('h3.active a', slide).addClass('ui-btn-active');

  $('#btnPrev', slide).attr('href','#filterItems');
  $('#btnNext', slide).attr('href','#formInputs');

});
$(document).on("pageshow","#formBasic",function(){ // When entering pagetwo
 //alert("Home is now shown");
});
$(document).on("pagebeforehide","#formBasic",function(){ // When leaving pagetwo
  //alert("Home is about to be hidden");
});
$(document).on("pagehide","#formBasic",function(){ // When leaving pagetwo
  //alert("Home is now hidden");
});