var mongoose = require('mongoose');
var Schema = mongoose.Schema;
MessageSchema = new Schema({
	content:{type: String, required: true},
	_user:{type: Schema.Types.ObjectId, ref: 'User'},
	_comments:[{type: Schema.Types.ObjectId, ref: 'Comment'}]
})


mongoose.model('Message', MessageSchema);
