var fs = require('fs');

fs.stat('/etc/passwdo', function(err, stats){
	if(err){
		console.log('error message: ' + err.message);
	} else {
		console.log(stats);
	}
});