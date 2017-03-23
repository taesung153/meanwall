var mongoose = require('mongoose');
var Schema = mongoose.Schema;
CommentSchema = new Schema({
	content:{type: String, required: true},
	_user:{type: Schema.Types.ObjectId, ref: 'User'},
	_message: {type: Schema.Types.ObjectId, ref: 'Message'}
})


mongoose.model('Comment', CommentSchema);
