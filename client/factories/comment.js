app.factory('commentFactory', function($http, $route){
	var factory = {};
	factory.addComment = function(comment){
		$http.post('/comment/add', comment).then(function(output){
			console.log(output.data)
			$route.reload()
		})
	}
	return factory
})
