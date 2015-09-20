var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var PostSchema = Schema({
    _id: Number,
    date: {type: Date, default: Date.now()},
    _creator : { type: Number, ref: 'User' },
    name: String
}, {collection: 'Post'});

mongoose.schemas.Post = PostSchema;