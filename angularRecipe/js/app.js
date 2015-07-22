var app = angular.module('webApp',['ngRoute','ngTouch','ngSanitize']);

/**
* Configure the Routes
*/
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
	// Home
	.when("/", {templateUrl: "partials/home.html", controller: "HomeCtrl"})

	
	// Pages
	//.when("/about", {templateUrl: "partials/about.html", controller: "AboutCtrl"})
	/*.when("/faq", {templateUrl: "partials/faq.html", controller: "PageCtrl"})
	.when("/pricing", {templateUrl: "partials/pricing.html", controller: "PageCtrl"})
	.when("/services", {templateUrl: "partials/services.html", controller: "PageCtrl"})*/
	//.when("/contact", {templateUrl: "partials/contact.html", controller: "ContactCtrl"})

		.when("/:pageName", {
			templateUrl: function(params){				
				return "partials/"+initPage(params.pageName,params.pageName)+".html";
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

		// jQuery, Angular, Bootstrap
		.when("/:groupName/:pageName", {
			templateUrl: function(params){				
				return "partials/"+initPage(params.groupName,params.pageName)+".html";
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

app.controller('HomeCtrl', function ( $scope, $location, $http ) {
	//Remove navbar header
	$('.navbar li').removeClass('active');	
});

app.controller('PageCtrl', function ( $scope, $route, $routeParams, $location, $http ) {
	window.scrollTo(0,0);

	//console.log($route);

	//Active navbar header
	$('.navbar li').removeClass('active');	
	$('.navbar li#'+fw.currentGroupName).addClass('active');
	//Active tooltip
 	$('[data-toggle="tooltip"]').tooltip(); 
	//Active popup modal
 	$('[data-toggle="popover"]').popover(); 

 	//console.log($location.$$path);
 	console.log(fw);

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


app.controller('TutorialCtrl', function ( $scope, $location, $http ) {
	window.scrollTo(0,0);

	$http.get("partials/"+fw.currentGroupName+"/json/cntTutorial.json") 
       .success(function(response) { 
           $scope.tutorials = response.content; 
    }); 

	//$scope.tutorials = fw.pages[fw.currentGroupName][fw.currentPageIndex].content;	
});

/**
 * Controls the Blog
 */
//app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
  //console.log("Blog Controller reporting for duty.");
//});


app.directive('a', function() {
    return {
        restrict: 'E',
        link: function(scope, elem, attrs) {
            if(attrs.ngClick || attrs.href === '' || attrs.href === '#'){
                elem.on('click', function(e){
                    e.preventDefault();
                });
            }
        }
   };
});
