var model = {
	 user: "Albert"         
};

var myAngularApp = angular.module("myApp", []);
  
myAngularApp.run(function ($http) {
	$http.get("characters.json").success(function (data) {
	   model.items = data.characters;			   
	});
});

myAngularApp.controller("myCtrl", function ($http, $scope, $filter, $rootScope) {
	   
		$http.get("characters.json").success(function (data) {
		   $scope.mydata= data.characters;			      
		});

		$scope.updateData = function(itemSelected) {					
			
			//alert(itemSelected.url);
			
			$http.get(itemSelected.url).success(function (data) {
				$scope.characterData= data;
				var createdDate = data.created.substr(0,10); 
											
				$scope.formatedDate = $filter('date')(createdDate,'EEEE, MMM dd yyyy');			       
		    });
		}
});
	