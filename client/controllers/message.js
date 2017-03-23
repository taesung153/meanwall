app.controller('messageController', function($scope, messageFactory){
	$scope.errors = [];
	messageFactory.getAll(function(data){
		$scope.messages = data
	})
	$scope.addMessage = function(id){
		$scope.errors = [];
		if(!$scope.newMessage|| !$scope.newMessage.content){
			$scope.errors.push('Please enter text into the content field, idiot.')
		}else if($scope.newMessage.content.length < 4){
			$scope.errors.push('Message must be at least 4 chars.')
		}else if($scope.newMessage.content.length > 144){
			$scope.errors.push('Message is too long.')
		}else{
			$scope.newMessage._id = id;
			messageFactory.addMessage($scope.newMessage, function(data){
				$scope.messages.push(data)
			});
			$scope.newMessage = {};
		}
	}
})
