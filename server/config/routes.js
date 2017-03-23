var session = require('./../controllers/session.js');
var message = require('./../controllers/message.js');
var comment = require('./../controllers/comment.js');

module.exports = function(app){
	app.post('/login', function(req, res){
		session.login(req, res);
	})

	app.get('/checkstatus', function(req, res){
		session.checkStatus(req, res);
	})
	app.get('/logout', function(req, res){
		session.logout(req, res);
	})


	app.post('/messages/add', function(req,res){
		message.add(req, res)
	})
	app.get('/messages/getall', function(req, res){
		message.getAll(req, res)
	})

	app.post('/comment/add', function(req,res){
		comment.add(req, res)
	})
}
