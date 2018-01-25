const mongoose                      = require('mongoose'),
      passportLocalMongoose         = require('passport-local-mongoose');

let UserSchema  = new mongoose.Scema({
    local: {
        username: String,
        password: String,
    },
    twitter: {
        id: String,
        token: String,
        displayName: String,
        username: String
    },
    facebook: {
        id: String,
        token: String,
        email: String,
        name: String
    },
    google: {
        id: String,
        token: String,
        email: String,
        name: String
    },
    profile: {
        firstName: String,
        lastName: String,
        dateOfBirth: Date,
        
    }
});

module.exports = mongoose.model('User', UserSchema);