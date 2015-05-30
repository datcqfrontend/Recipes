$(document).on('ready',function(){
	$("#container").hide();

	urlAssets = "assets/";
	arrAssets = [
					"home","getStarted"

					//"home","page1","page2","page3",
					//"dialog1"	
				];

	loadPages(urlAssets,arrAssets);

});