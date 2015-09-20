/**
 * Created by Ivan on 01.09.2015.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var UserSchema = Schema({
    id: false,
    _id: Number,
    name: {
        firstName: {type: String, default: 'NoName'},
        lastName: {type: String, default: 'NoName'}
    },
    email: {type: String, unique: true},
    sex: {type: String, unique: true},
    birthday: {type: Date, default: Date.now()},
    posts: [{type: Number, ref:'Post'}],
    age: Number,
    status: {type: String, default: 'user'}
    //login: {type: String, unique: true},
   // password: {type: String}
}, {collection: 'User', version: false});

UserSchema.pre('save', function(next){
    var dOb = this. birthday;

    this.age = (new Date() - new Date(dOb)) / 1000 / 60 / 60 / 24;

    next();
});

UserSchema.virtual('fullName').get(function(){
    return this.name.first + ' ' + this.name.last
});

UserSchema.set('toJSON', { virtuals: true });

mongoose.schemas.User = UserSchema;

