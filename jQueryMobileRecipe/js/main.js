$(document).on('ready',function(){
	$("#container").hide();

	urlAssets = "assets/";
	arrAssets = [
					"home","page1"

					//"home","page1","page2","page3",
					//"dialog1"	
				];

	loadPages(urlAssets,arrAssets);

});