var mongoose = require('mongoose');
var Schema = mongoose.Schema;
UserSchema = new Schema({
	name:{type: String, required: true},
	_messages:[{type: Schema.Types.ObjectId, ref: 'Message'}],
	_comments:[{type: Schema.Types.ObjectId, ref: 'Comment'}]
})


mongoose.model('User', UserSchema);
