// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

	'facebookAuth' : {
		'clientID'      : '***REMOVED***', // your App ID
		'clientSecret'  : '***REMOVED***', // your App Secret
		'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
	},

	'twitterAuth' : {
		'consumerKey'       : '***REMOVED***',
		'consumerSecret'    : '***REMOVED***',
		'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
	},

	'googleAuth' : {
		'clientID'      : '***REMOVED***',
		'clientSecret'  : '***REMOVED***',
		'callbackURL'   : 'http://localhost:8080/auth/google/callback'
	}

};