app.factory('messageFactory', function($http){
	var factory = {};
	factory.messages = [];
	factory.getAll = function(cb){
		$http.get('/messages/getall').then(function(output){
			cb(output.data)
		})
	}
	factory.addMessage = function(message, cb){
		$http.post('/messages/add', message).then(function(output){
			factory.messages.push(output.data)
			cb(output.data)
		})
	}
	return factory
})
