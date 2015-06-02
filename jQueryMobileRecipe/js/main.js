$(document).on('ready',function(){
	$("#container").hide();

	urlAssets = "assets/";
	arrAssets = [
					"home",

					//Assets
					"getStarted","pages","transitions","buttons",

					//Dialogs
					"pageDialog"	
				];

	loadPages(urlAssets,arrAssets);

});