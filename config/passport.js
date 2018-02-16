const LocalStrategy         = require('passport-local').Strategy,
      User                  = require('../models/user');

      module.exports = (passport) => {
          // serialization
          passport.serializeUser((user, done) => {
              done(null, user.id);
          });

          passport.deserializeUser((id, done) => {
              User.findById(id, (err, user) => {
                  done(err, user);
              });
          });

          // Local signup
          passport.user('local-signup;', new LocalStrategy({
              
          }))

      }