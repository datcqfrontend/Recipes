$(document).on('ready',function(){
	$("#container").hide();

	urlAssets = "assets/";
	arrAssets = [
					"home",

					//Assets
					"getStarted","pages","transitions","buttons","icons","popups",

					//Dialogs
					"pageDialog"	
				];

	loadPages(urlAssets,arrAssets);

});