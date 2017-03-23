app.factory('sessionFactory', function($http, $location){
	var factory = {};

	factory.checkStatus = function(cb){
		$http.get('/checkstatus').then(function(output){
			if(output.data){
				cb(output.data)

				if($location.$$path == '/login'){
					$location.url('/dash')
				}
			}else{
				$location.url('/login')
			}
		})
	}
	
	factory.login = function(user){
		$http.post('/login', user).then(function(output){
			if(output.data){
				$location.url('/dash')
			}
		})
	}
	return factory;
})
