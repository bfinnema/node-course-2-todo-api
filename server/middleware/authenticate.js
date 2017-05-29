// const bcrypt = require('bcryptjs');

var {User} = require('./../models/user.js');

var authenticate = (req, res, next) => {
    var token = req.header('x-auth');

    User.findByToken(token).then((user) => {
        if (!user) {
            return Promise.reject();
        }

        req.user = user;
        req.token = token;
        next();
    }).catch((e) => {
        res.status(401).send();
    });
};

/*
var login = (req, res, next) => {
    var email = req.body.email;
    var password = req.body.password;
    console.log(`Email: ${email}, Password: ${password}`);

    User.findByEmail(email).then((user) => {
        if (!user) {
            console.log(`User was not found`);
            return Promise.reject();
        };
        console.log(`Found user: ${user}`);
        bcrypt.compare(password, user.password, (err, res) => {
            console.log(`Result of the compare: ${res}`);
            if (res) {
                req.user = user;
                next();
            } else {
                
            };
        });
    }).catch((e) => {
        res.status(401).send();
    });
};
*/

module.exports = {authenticate};