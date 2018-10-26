var config = {
    /*
    github: {
      clientID: 'get_your_own',
      clientSecret: 'get_your_own',
      callbackURL: "http://127.0.0.1:3000/auth/github/callback"
    },
    linkedin: {
      clientID: 'get_your_own',
      clientSecret: 'get_your_own',
      callbackURL: "http://127.0.0.1:3000/auth/linkedin/callback"
    },
    twitter: {
      consumerKey: 'get_your_own',
      consumerSecret: 'get_your_own',
      callbackURL: "http://127.0.0.1:3000/auth/twitter/callback"
    }
    */
    google: {
        clientID: 'get_your_own',
        clientSecret: 'get_your_own',
        callbackURL: "http://127.0.0.1:3000/auth/google/callback"
    },
    
    facebook: {
        clientID: 'get_your_own',
        clientSecret: 'get_your_own',
        callbackURL: "https://*****.ngrok.io/auth/fblogin/callback"
    },

    mongo: {
        url: 'mongodb://localhost:27017/login'
    }
  };
  
  module.exports = config;
  