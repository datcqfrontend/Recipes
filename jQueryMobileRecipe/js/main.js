$(document).on('ready',function(){
	$("#container").hide();

	urlAssets = "assets/";
	arrAssets = [
					"home",

					//Assets
					"getStarted","pages","transitions","buttons","icons",
					"popups","toolbars","navbars","panels","collapsibles",
					"tables","grids",

					/*"listViews","listContent","filterItems",

					"formBasic","formInputs","formSelect","formSliders",

					"themes",

					"events","touch","scroll","orientation","pageEvents",*/

					//Dialogs
					"pageDialog"	
				];

	loadPages(urlAssets,arrAssets);

});