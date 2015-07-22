function getAssetTemplate(asset,flow){
	var i=0, length=0;

	if(fw.menu[flow]){
		fw.curTotalAsset = length = fw.menu[flow].length;
		if(length==0){
			return "404";
		}

		for(i;i<length;i++){
	 		if(fw.menu[flow][i].id==asset){ 			
	 			fw.curAssetIndex = i;

	 			//initChangePage(group,i);
	 			return fw.menu[flow][i].name+"/index";
	 		}
	 	}
	}

	return "404";
}

/*function initPage(group,page){
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
	
}*/