// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

	'facebookAuth' : {
		'clientID'      : '510898635762603', // your App ID
		'clientSecret'  : '3dc7d483d7b2ead08a8c2a8384123524', // your App Secret
		'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
	},

	'twitterAuth' : {
		'consumerKey'       : 'LZfXTUfqhR0i7s5xNiZEi9TJh',
		'consumerSecret'    : 'kUwLbwzbsvkIk0077li1iMmxm01h6rD4ktLRuEI6XwUHQopcom',
		'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
	},

	'googleAuth' : {
		'clientID'      : '779857270990-s97tbil1cd8vnir3egfgt13rj7i8vobn.apps.googleusercontent.com',
		'clientSecret'  : 'lRweVnwmI9bDkOAHAGegUW6H',
		'callbackURL'   : 'http://localhost:8080/auth/google/callback'
	}

};