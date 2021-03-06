function initPage(group,page){
	var i=0, length=0;

	fw.currentGroupName = group;
	fw.currentPageName = page;
	fw.currentTotalPage = length;
	fw.currentPageIndex = 0;
	fw.canNext = false;		
	fw.canBack = false;		

	if(fw.pages[group]){
		//console.log(fw.pages[group]);
		fw.currentTotalPage = length = fw.pages[group].length;
		if(length==0){
			return page;
		}

		for(i;i<length;i++){
	 		if(fw.pages[group][i].page==page){ 			
	 			fw.currentPageIndex = i;
	 			initChangePage(group,i);
	 			return group+"/"+page;
	 		}
	 	}
	}

	return "404";	
}

function initChangePage(group,pageIndex){
	if(pageIndex+1<fw.currentTotalPage) {
		fw.canNext = true;
	}else{
		fw.canNext = false;		
	}

	if(pageIndex-1>=0) {
		fw.canBack = true;		
	}else{
		fw.canBack = false;		
	}
}

function nextPage(){
	if(!fw.canNext) return;

	window.location.href = "index.html#/"+fw.currentGroupName+"/"+(fw.pages[fw.currentGroupName][fw.currentPageIndex+1].page);

	//$('.section').addClass('slideLeft');
}
function prevPage(){
	if(!fw.canBack) return;

	window.location.href = "index.html#/"+fw.currentGroupName+"/"+(fw.pages[fw.currentGroupName][fw.currentPageIndex-1].page);

	//$('.section').addClass('slideRight');
}

function goToPage(group,page){
	window.location.href = "index.html#/"+group+"/"+page;
}

function hideMenu(){
	if($('.navbar-toggle').css('display')!='none'){
		$('#menu-collapse').collapse('hide');
	}
	
}

function activeNavBar(){
	//Active navbar header
	$('.navbar li').removeClass('active');

	$('.navbar li').removeClass('html html5');
	$('.navbar li').removeClass('css css3 cssRWD less sass');
	$('.navbar li').removeClass('javascript jquery');	
	$('.navbar li').removeClass('angular angularAPI');
	$('.navbar li').removeClass('requirejs gruntjs analytics seo');

	$('.navbar li#'+fw.currentGroupName).addClass('active');
	
	if(fw.currentGroupName=='html' || fw.currentGroupName=='html5'){
		$('.navbar li#group-html').addClass(fw.currentGroupName+' active');
	}else if(fw.currentGroupName=='css' || fw.currentGroupName=='css3' || fw.currentGroupName=='cssRWD' || fw.currentGroupName=='less' || fw.currentGroupName=='sass'){
		$('.navbar li#group-css').addClass(fw.currentGroupName+' active');
	}else if(fw.currentGroupName=='javascript' || fw.currentGroupName=='jquery'){
		$('.navbar li#group-js').addClass(fw.currentGroupName+' active');
	}else if(fw.currentGroupName=='angular' || fw.currentGroupName=='angularAPI'){
		$('.navbar li#group-angular').addClass(fw.currentGroupName+' active');
	}else if(fw.currentGroupName=='requirejs' || fw.currentGroupName=='gruntjs' || fw.currentGroupName=='analytics' || fw.currentGroupName=='seo'){
		$('.navbar li#group-more').addClass(fw.currentGroupName+' active');
	}

}