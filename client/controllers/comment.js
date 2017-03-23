app.controller('commentController', function($scope, commentFactory){
	$scope.addComment = function(comment, user, message){
		comment._user = user;
		comment._message = message
		commentFactory.addComment(comment)
		$scope.newComment = {}
	}
})
