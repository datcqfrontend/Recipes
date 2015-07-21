//============================================================================
//SCRIPT FOR SHOW DEMO
//Intro.html
app.controller('demoIntroCtrl', function($scope) {
    $scope.firstName= "John";
    $scope.lastName= "Doe";
});

app.controller('demoCostCtrl', function($scope) {
    $scope.quantity= 10;
    $scope.price= 5;
});

app.controller('demoNameCtrl', function($scope) {
    $scope.names = [
    	{name:"Kai", country:"Denmark"},
    	{name:"Jani", country:"Norway"},
    	{name:"Hege", country:"Sweden"},
    	{name:"Helen", country:"Austria"}
    ]
});

app.controller('demoCustomerCtrl', function($scope,$http) {
    $http.get("partials/angular/customer.json") 
       .success(function(response) { 
           $scope.names = response.records; 
    }); 
});

app.controller('demoPersonCtrl', function($scope,$http) {
    $scope.firstName = "John",
  	$scope.lastName = "Doe"
  	$scope.myVar = false;
 	 $scope.toggle = function() {
      $scope.myVar = !$scope.myVar;
  	};
});

app.controller('demoPerson2Ctrl', function($scope,$http) {
    $scope.firstName = "John",
  	$scope.lastName = "Doe"
  	$scope.myVar = true;
 	 $scope.toggle = function() {
      $scope.myVar = !$scope.myVar;
  	};
});

app.controller('demoFormCtrl', function($scope,$http) {
    $scope.master = {firstName: "John", lastName: "Doe"};
    $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
    };
    $scope.reset();
});

app.controller('demoValidateCtrl', function($scope,$http) {
	$scope.user = 'John Doe';
	$scope.email = 'john.doe@gmail.com';
});


app.controller('demoLowerCaseCtrl', function($scope) {
	$scope.x1 = "JOHN";
	$scope.x2 = angular.lowercase($scope.x1);
});

app.controller('demoUpperCaseCtrl', function($scope) {
	$scope.x1 = "JOHN";
	$scope.x2 = angular.uppercase($scope.x1);
});

app.controller('demoIsStringCtrl', function($scope) {
	$scope.x1 = "JOHN";
	$scope.x2 = angular.isString($scope.x1);
});

app.controller('demoIsNumberCtrl', function($scope) {
	$scope.x1 = "JOHN";
	$scope.x2 = angular.isNumber($scope.x1);
});

app.controller('demoUserCtrl', function($scope) {
	$scope.fName = '';
	$scope.lName = '';
	$scope.passw1 = '';
	$scope.passw2 = '';
	
	$scope.users = [
	{id:1, fName:'Hege',  lName:"Pege", passW: "123" },
	{id:2, fName:'Kim',   lName:"Pim", passW: "123" },
	{id:3, fName:'Sal',   lName:"Smith", passW: "123" },
	{id:4, fName:'Jack',  lName:"Jones", passW: "123" },
	{id:5, fName:'John',  lName:"Doe", passW: "123" },
	{id:6, fName:'Peter', lName:"Pan", passW: "123" }
	];

	$scope.lastId = 6;
	$scope.editId = -1;
	$scope.edit = true;
	$scope.error = false;
	$scope.incomplete = false; 

	$scope.editUser = function(id) {
	  if (id == 'new') {
	  	$scope.editId = $scope.lastId + 1;
	  	$scope.edit = true;
	    $scope.incomplete = true;
	    $scope.fName = '';
	    $scope.lName = '';
	  } else {
	  	$scope.editId = id;
	    $scope.edit = false;
	    $scope.fName = $scope.users[id-1].fName;
	    $scope.lName = $scope.users[id-1].lName; 
	  }
	};

	$scope.save = function(){
		if ($scope.edit == true) {
			$scope.lastId = $scope.editId;
			var obj = {
				id: $scope.lastId,
				fName: $scope.fName,
				lName: $scope.lName,
				passW: $scope.passw1
			}				
			$scope.users.push(obj);
		}else{				
			$scope.users[$scope.editId-1].passW =  $scope.passw1 ;				;
		}
	}

	$scope.$watch('passw1',function() {$scope.test();});
	$scope.$watch('passw2',function() {$scope.test();});
	$scope.$watch('fName', function() {$scope.test();});
	$scope.$watch('lName', function() {$scope.test();});

	$scope.test = function() {
	  if ($scope.passw1 !== $scope.passw2) {
	    $scope.error = true;
	    } else {
	    $scope.error = false;
	  }
	  $scope.incomplete = false;
	  if ($scope.edit && (!$scope.fName.length ||
	  !$scope.lName.length ||
	  !$scope.passw1.length || !$scope.passw2.length)) {
	       $scope.incomplete = true;
	  }
	};

});

app.controller('demoMyNoteCtrl', function($scope) {
	$scope.message = "";
    $scope.left  = function() {return 100 - $scope.message.length;};
    $scope.clear = function() {$scope.message = "";};
    $scope.save  = function() {alert("Note Saved");};
});

//END SCRIPT FOR SHOW DEMO
//============================================================================