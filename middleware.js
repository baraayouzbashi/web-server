module.exports = {
	requireAuthentication: function (req, res, next){
		console.log('Private route requested');
		next();
	},
	logger: function(req, res, next){
		console.log('Request: '+ req.method + ' '+ req.originalUrl + ' @ '+ new Date().toString() );
		next();
	}
};