var calc=angular.module("calculator",[]);
calc.controller("calccontroller",function($scope){
	
	$scope.a=0;
	$scope.b=0;
$scope.f1=function(){$scope.result=$scope.c + $scope.d;};
	$scope.f2=function(){$scope.result=$scope.c - $scope.d;};
	$scope.f3=function(){$scope.result=$scope.c * $scope.d;};
	$scope.f4=function(){$scope.result=$scope.c / $scope.d;};
	
$scope.aa = function(btn) {
	//$scope.output = btn;
	
	$scope.a += String(btn);
	$scope.c = parseInt($scope.a);
};

$scope.bb = function(btn) {
	//$scope.output = btn;
	
	$scope.b += String(btn);
	$scope.d = parseInt($scope.b);
};

$scope.cca=function(){
	$scope.a=0;
	$scope.c=0;
}

$scope.ccb=function(){
	$scope.b=0;
	$scope.d=0;
}


	

});
