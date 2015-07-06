var app = angular.module('webApp',['ngRoute']);

/**
* Configure the Routes
*/
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
	// Home
	.when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})

	
	// Pages
	.when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
	/*.when("/faq", {templateUrl: "partials/faq.html", controller: "PageCtrl"})
	.when("/pricing", {templateUrl: "partials/pricing.html", controller: "PageCtrl"})
	.when("/services", {templateUrl: "partials/services.html", controller: "PageCtrl"})*/
	.when("/contact", {templateUrl: "partials/contact.html", controller: "PageCtrl"})

		// jQuery
		.when("/jquery/home", {templateUrl: "partials/jquery/home.html", controller: "PageCtrl"})

		// Bootstrap
		.when("/bootstrap/tutorial", {templateUrl: "partials/bootstrap/tutorial.html", controller: "PageCtrl"})
		.when("/bootstrap/getStarted", {templateUrl: "partials/bootstrap/getStarted.html", controller: "PageCtrl"})
		.when("/bootstrap/gridBasic", {templateUrl: "partials/bootstrap/gridBasic.html", controller: "PageCtrl"})
		.when("/bootstrap/typography", {templateUrl: "partials/bootstrap/typography.html", controller: "PageCtrl"})

		/*
		
		
		.when("/bootstrap/tutorial", {templateUrl: "partials/bootstrap/tutorial.html", controller: "PageCtrl"})*/

		// Angular
		.when("/angular/home", {templateUrl: "partials/angular/home.html", controller: "PageCtrl"})

	
	// Blog
	.when("/blog", {templateUrl: "partials/blog.html", controller: "BlogCtrl"})
	.when("/blog/post", {templateUrl: "partials/blog_item.html", controller: "BlogCtrl"})
	

	// else 404
	.otherwise("/404", {templateUrl: "partials/404.html", controller: "PageCtrl"});
}]);

/**
 * Controls all other Pages
 */
app.controller('PageCtrl', function (/* $scope, $location, $http */) {
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

/**
 * Controls the Blog
 */
//app.controller('BlogCtrl', function (/* $scope, $location, $http */) {
  //console.log("Blog Controller reporting for duty.");
//});
