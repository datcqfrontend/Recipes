function loadExternalHTML(url,container) {

	var xmlhttp;
	
	if (window.XMLHttpRequest) {
		xmlhttp = new XMLHttpRequest();
	} else {
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function () {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			//console.log(container);

			var obj = $(xmlhttp.responseText);
			container.append(obj);
		}
	}
		
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}

function loadPages(){
	var i=0, lengthArrs = anddev.arrAssets.length;

	for(i;i<lengthArrs;i++){
		loadExternalHTML(anddev.urlAssets+anddev.arrAssets[i]+"/index.html",$('#container'));
	}
}

function loadDialogs(){
	var i=0, lengthArrs = anddev.arrDialogs.length;

	for(i;i<lengthArrs;i++){
		loadExternalHTML(anddev.urlAssets+anddev.arrDialogs[i]+"/index.html",$('#container'));

		if(i==lengthArrs-1){
			//Add script jquery mobile after add assets
			//console.log($('body'));
			
			setTimeout(function(){
				$("#container").show();
				$('body').append('<script src="framework/jquery-mobile/jquery.mobile-1.4.5.min.js"></script>');

				anddev.setEvents()
			},500);			
		}
	}
}