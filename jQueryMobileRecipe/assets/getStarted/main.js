$(document).on("pagebeforeshow","#getStarted",function(){ // When entering pagetwo
  //alert("Home is about to be shown");
  	var slide = '#getStarted';
  	anddev.setIndex(slide.replace('#',''));
  	
  	$('#btnPrev', slide).attr('href','#home');
  	$('#btnNext', slide).attr('href','#pages');

});
$(document).on("pageshow","#getStarted",function(){ // When entering pagetwo
 //alert("Home is now shown");
 	

});
$(document).on("pagebeforehide","#getStarted",function(){ // When leaving pagetwo
  //alert("Home is about to be hidden");
});
$(document).on("pagehide","#getStarted",function(){ // When leaving pagetwo
  //alert("Home is now hidden");
});