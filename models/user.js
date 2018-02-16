const mongoose                      = require('mongoose'),
      passportLocalMongoose         = require('passport-local-mongoose'),
      bcrypt                        = require('bcrypt-nodejs');

let UserSchema  = new mongoose.Schema({
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
    }
});

// methods
// hash generation
UserSchema.methods.generateHash = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// check that password is valid
UserSchema.methods.validPassword = (password) => {
    return bcrypt.compareSync(password, this.local.password);
}

module.exports = mongoose.model('User', UserSchema);