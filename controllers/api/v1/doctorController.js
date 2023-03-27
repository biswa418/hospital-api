const Doctor = require('../../../models/doctor');
const env = require('../../../config/environment');
const jwt = require('jsonwebtoken');
const crypto = require('crypto-js');

//register the doctor
module.exports.register = async function (req, res) {
    try {

        let doc = await Doctor.findOne({ username: req.body.username });

        if (doc) {
            return res.status(200).json({
                message: 'User already exists! Try loggin in or try other user ID',
                data: {
                }
            })
        } else {

            doc = await Doctor.create({
                username: req.body.username,
                password: crypto.SHA256(req.body.password).toString(), //not storing password directly
                patient: []
            });


            return res.status(200).json({
                message: 'You are registered!!',
                data: {
                    doctor: doc
                }
            });
        }

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: 'Internal Server Error',
        });
    }
}

//login and give token
module.exports.login = async function (req, res) {
    try {
        //get username and encrypted password
        let username = req.body.username;
        let password = crypto.SHA256(req.body.password).toString();

        //find the doctor in the database -- if exits and creds are right return token
        let doc = await Doctor.findOne({ username: username });

        if (!doc || doc.password != password) {
            return res.status(422).json({
                message: "Invalid username or password"
            });
        }

        return res.status(200).json({
            message: "Sign in success!! Keep the token handy.",
            data: {
                auth: 'BEARER',
                token: jwt.sign(doc.toJSON(), env.jwtSecret, { expiresIn: '1d' }),
            }
        });

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            message: 'Internal Server Error',
        });
    }
}