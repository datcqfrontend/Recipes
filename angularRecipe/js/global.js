function initPage(group,page){
	var i=0; length=fw.pages[group].length;

	fw.currentGroupName = group;
	fw.currentPageName = page;
	fw.currentTotalPage = length;

 	for(i;i<length;i++){
 		if(fw.pages[group][i].page==page){ 			
 			fw.currentPageIndex = i;
 			initChangePage(group,i);
 			return;
 		}
 	}
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
}
function prevPage(){
	if(!fw.canBack) return;

	window.location.href = "index.html#/"+fw.currentGroupName+"/"+(fw.pages[fw.currentGroupName][fw.currentPageIndex-1].page);
}

function goToPage(group,page){
	window.location.href = "index.html#/"+group+"/"+page;
}