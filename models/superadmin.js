/**
 * Created by Ivan on 06.09.2015.
 */
var User = require('./user');

SuperAdmin = function (login, full_name, birthday, sex, email) {
    User.apply(this, arguments);
    this.status = "superadmin";
};
SuperAdmin.prototype = Object.create(User.prototype);
SuperAdmin.prototype.constructor = SuperAdmin;

exports.SuperAdmin = SuperAdmin;