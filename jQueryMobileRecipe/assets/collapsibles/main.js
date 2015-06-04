$(document).on("pagebeforeshow","#collapsibles",function(){ // When entering pagetwo
  //alert("Home is about to be shown");
  var slide = '#collapsibles';

  //$('h3.active a', slide).addClass('ui-btn-active');

  $('#btnPrev', slide).attr('href','#panels');
  $('#btnNext', slide).attr('href','#tables');

});
$(document).on("pageshow","#collapsibles",function(){ // When entering pagetwo
 //alert("Home is now shown");
});
$(document).on("pagebeforehide","#collapsibles",function(){ // When leaving pagetwo
  //alert("Home is about to be hidden");
});
$(document).on("pagehide","#collapsibles",function(){ // When leaving pagetwo
  //alert("Home is now hidden");
});