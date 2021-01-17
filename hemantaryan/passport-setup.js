const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
passport.deserializeUser(function(user, done) {

    done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: "212353961879-22876ek3uahopeafjramqn17hoq1q6db.apps.googleusercontent.com",
    clientSecret: "kukScwYpniqvUtJiGfzQGeAM",
    callbackURL: "http://localhost:3000/google/callback"
  },
  function(accessToken, refreshToken, profile, done) 
  {
    return done(null, profile);
  }
));
