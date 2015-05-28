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

function loadPages(urlAssets, arrAssets){
	var i=0, lengthArrAssets = arrAssets.length;

	for(i;i<lengthArrAssets;i++){
		loadExternalHTML(urlAssets+arrAssets[i]+"/index.html",$('#container'));

		if(i==lengthArrAssets-1){
			//Add script jquery mobile after add assets
			//console.log($('body'));
			
			setTimeout(function(){
				$("#container").show();
				$('body').append('<script src="framework/jquery-mobile/jquery.mobile-1.4.5.min.js"></script>');
			},500);
			
		}
	}
}


