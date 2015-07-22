var app = angular.module('webApp',['ngRoute','ngTouch','ngSanitize']);

/**
* Configure the Routes
*/
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
	// Home
	.when("/", {templateUrl: function(){
			window.location.href = "index.html#/"+fw.curFlow+"/"+fw.menu[fw.curFlow][0].id;
		}
	})

	
	// Pages
	//.when("/about", {templateUrl: "partials/about.html", controller: "AboutCtrl"})
	/*.when("/faq", {templateUrl: "partials/faq.html", controller: "PageCtrl"})
	.when("/pricing", {templateUrl: "partials/pricing.html", controller: "PageCtrl"})
	.when("/services", {templateUrl: "partials/services.html", controller: "PageCtrl"})*/
	//.when("/contact", {templateUrl: "partials/contact.html", controller: "ContactCtrl"})

		.when("/:flow", {
			templateUrl: function(params){				
				window.location.href = "index.html#/"+params.flow+"/"+fw.menu[params.flow][0].id;
			}
		})

		// jQuery, Angular, Bootstrap
		.when("/:flow/:assetid", {
			templateUrl: function(params){		
				console.log(params);
				
				fw.curFlow = params.flow;
				fw.curAssetId = params.assetid;				

				return "global/assets/"+getAssetTemplate(fw.curAssetId ,fw.curFlow)+".html";
			}, 
			controller: "PageCtrl",
			resolve: {
		      // I will cause a 1 second delay
		      /*delay: function($q, $timeout) {
		        var delay = $q.defer();
		        $timeout(delay.resolve, 500);
		        return delay.promise;
		      }*/
		    }
		})

		

	
	// Blog
	//.when("/blog", {templateUrl: "partials/blog.html", controller: "BlogCtrl"})
	//.when("/blog/post", {templateUrl: "partials/blog_item.html", controller: "BlogCtrl"})
	

	// else 404
	//.otherwise("/404", {templateUrl: "partials/404.html"});
}]);

/**
 * Controls all other Pages
 */
/*app.controller('AboutCtrl', function ( $scope, $location, $http ) {
	console.log($location.$$path);

	$('.navbar li').removeClass('active');
	$('.navbar li#'+fw.currentGroupName).addClass('active');
});

app.controller('ContactCtrl', function ( $scope, $location, $http ) {
	console.log($location.$$path);

	$('.navbar li').removeClass('active');
});*/

app.controller('PageCtrl', function ( $scope, $route, $routeParams, $location, $http ) {
	/*

	$scope.nextPage = function(){ nextPage();	};
	$scope.prevPage = function(){ prevPage();	};

	//console.log($route);

	//Active navbar header
	$('.navbar li').removeClass('active');	
	$('.navbar li#'+fw.currentGroupName).addClass('active');
	//Active tooltip
 	$('[data-toggle="tooltip"]').tooltip(); 
	//Active popup modal
 	$('[data-toggle="popover"]').popover(); 

 	//console.log($location.$$path);
 	//console.log(fw);

 	//Init jumbotron-topic
 	$scope.topic = fw.pages[fw.currentGroupName][fw.currentPageIndex].topic;
 	$scope.breadcrumb = fw.pages[fw.currentGroupName][fw.currentPageIndex].breadcrumb;
 	$scope.groupName = fw.currentGroupName;

 	$scope.canPrev = fw.canBack;
 	$scope.canNext = fw.canNext;

 	$scope.pagerFunction = function(e){
 		if($(e.target).parent().hasClass('deactive')) return;		

 		switch($(e.target).data('pager')){
 			case "prev":
 				prevPage();
 				break;

 			case "next":
 				nextPage();
 				break;
 		}
 	};
 	//End init jumbotron-topic 	

 	/*console.log("Page Controller reporting for duty.");
	  // Activates the Carousel
	  $('.carousel').carousel({
	    interval: 5000
	  });

	  // Activates Tooltips for Social Links
	  $('.tooltip-social').tooltip({
	    selector: "a[data-toggle=tooltip]"
	  })*/
});

