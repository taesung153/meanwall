var mongoose = require('mongoose');
var Message = mongoose.model('Message')
var User = mongoose.model('User')

module.exports = (function(){
	return{
		add:function(req, res){
			var message = new Message({content: req.body.content, _user: req.body._id})
			message.save(function(err, data){
				User.findOne({_id: req.body._id}, function(err, user){
					console.log(user)
					user._messages.push(data._id);
					user.save(function(err, userData){
						res.json(data)
					})
				})
			})
		},
		getAll: function(req, res){
			Message.find({})
			.populate('_user')
			.populate({
  				path: '_comments',
 				model: 'Comment',
 				populate: {
    			path: '_user',
   				 model: 'User'
  				}

  			})
			.exec(function(err, messages){
				res.json(messages)
			})
		}
	}
})()
