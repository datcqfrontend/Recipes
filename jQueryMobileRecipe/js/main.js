var anddev = (function(){
	this.currentIndex = 0;
	this.urlAssets = "assets/";
	this.arrAssets = [
					"home",

					//Assets
					"getStarted","pages","transitions","buttons","icons",
					"popups","toolbars","navbars","panels","collapsibles",
					"tables","grids",

					"listViews","listContent","filterItems",

					"formBasic","formInputs","formSelect","formSliders",

					"themes",

					"events","touch","scroll","orientation","pageEvents"

						
				];
	this.arrDialogs = [
		//Dialogs
		"pageDialog"
	];
	
	
	this.getIndex = function(value){
		return $.inArray(value,arrAssets);
	};

	this.setIndex = function(value){
		currentIndex = $.inArray(value,arrAssets);
	};

	this.prevAsset = function(){
		if(currentIndex>0){
			currentIndex -= 1;
			console.log("prevAsset: #"+arrAssets[currentIndex]);
			window.location.href = "#"+arrAssets[currentIndex];	
		}
		
	};

	this.nextAsset = function(){
		if(currentIndex<this.arrAssets.length){
			currentIndex += 1;	
			console.log("nextAsset: #"+arrAssets[currentIndex]);
			window.location.href = "#"+arrAssets[currentIndex];
		}
	};

	this.setEvents = function(){
		$('#container').on("swipeleft",function(){
			console.log("swipeleft");
			nextAsset();
		});

		$('#container').on("swiperight",function(){
			console.log("swiperight");
			prevAsset();
		});

		$('pre').on("swipeleft swiperight",function(e){
			//e.preventDefault();
			e.stopPropagation();
			return false;
		});

		
	};

	return this;
})();

$(document).on('ready',function(){
	console.log('hide');
	$("#container").hide();

	loadPages();
	loadDialogs();

	
});