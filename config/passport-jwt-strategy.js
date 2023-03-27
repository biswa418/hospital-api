const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const env = require('./environment');

const Doctor = require('../models/doctor');

let opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: env.jwtSecret
}

//create new jwt strat
passport.use(new JwtStrategy(opts, async function (jwt_payload, done) {
    let doc = await Doctor.findById(jwt_payload._id);

    if (doc) {
        return done(null, doc);
    } else {
        return done(null, false);
    }
}));

module.exports = passport;