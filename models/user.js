const mongoose                    = require('mongoose'),
      passportLocalMongoose       = require('passport-local-mongoose');

let UserSchema  = new mongoose.Schema({
    email: String,
    username: String,
    password: String,
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
    }
});

UserSchema.plugin(passportLocalMongoose, {
    usernameField: 'email',
    errorMessages: {
        MissingPasswordError: 'No password was given',
        AttemptTooSoonError: 'Account is currently locked. Try again later',
        TooManyAttemptsError: 'Account locked due to too many failed login attempts',
        NoSaltValueStoredError: 'Authentication not possible. No salt value stored',
        IncorrectPasswordError: 'Password or email are incorrect',
        IncorrectUsernameError: 'Password or email are incorrect',
        MissingUsernameError: 'No email was given',
        UserExistsError: 'That email address is already in use!'
    }
});

module.exports = mongoose.model('User', UserSchema);