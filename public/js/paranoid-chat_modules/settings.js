define({

	title: "Paranoid-Chat",

	ttl: 600000,

	motd: '<pre>\n\n' +
		'             Paranoid-Chat is powered by GrayHatSecurity.            \n' +		
		'#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#=#\n' +
		' For paranoid PGP key generation visit http://paranoid-pgp.netne.net/  \n' +
		' For help type: /help                                                \n' +
		'----------------------------------------------------------------------' +
		'</pre>',

	nick: {
		maxLen: 20,
		minLen: 2,	
	},

	key: {
		maxLen: 1024,
		minLen: 8,	
	},

	room: {
		minLen: 1,
		maxLen: 64
	},

	notifications: {
		maxOnePerMs: 3000
	}
});