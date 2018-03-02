var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy,
    config = require(INCPATH + '/config');

module.exports = function(passport) {

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    // =========================================================================
    // GOOGLE ==================================================================
    // =========================================================================
    passport.use(new GoogleStrategy({
            clientID        : config.get("googleAuth:clientID"),
            clientSecret    : config.get("googleAuth:clientSecret"),
            callbackURL     : config.get("googleAuth:callbackURL")

        },
        function(token, refreshToken, profile, done) {
        console.log(arguments);

            // make the code asynchronous
            // User.findOne won't fire until we have all our data back from Google

        }));

};
