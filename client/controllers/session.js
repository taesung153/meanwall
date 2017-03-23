app.controller('sessionController', function($scope, sessionFactory){
	$scope.errors = [];
	sessionFactory.checkStatus(function(data){
		$scope.curUser = data;
	})
	$scope.login = function(){
		$scope.errors = [];
		if(!$scope.logReg ||!$scope.logReg.name ){
			$scope.errors.push('Please type something in login field.')
		}else if($scope.logReg.name.length < 3){
			$scope.errors.push('Name must be 3 chars long.')
		}else if($scope.logReg.name.length > 10){
			$scope.errors.push('Your name must be shorter than 10 chars.')
		}else{
			sessionFactory.login($scope.logReg)
			$scope.logReg[0] = {};
		}
	}
})
