/**
 * Created by Ivan on 13.09.2015.
 */

module.exports = function(app) {

    var bodyParser = require('body-parser');
    var userRouter = require('./user');
    var adminRouter = require('./admin');

    app.use(bodyParser.json());

    app.get('/', function (req, res, next) {
        res.status(200).send("Main");
    });

    app.use('/user', userRouter);
    app.use('/admin', adminRouter);

    app.use(function(err, req, res, next){
        var status = err.status || 500;

        res.status(status).send(err);
    });

};