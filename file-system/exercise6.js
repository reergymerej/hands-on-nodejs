var fs = require('fs');

fs.open('./a.txt', 'r+', function(err, fd){
	if(err){
		throw err;
	}

	fs.fstat(fd, function(err, stats){
		console.log(stats.size);

		(function(){
			var newString = new Buffer('7', 'utf8');

			fs.write(
				fd,
				newString,
				0,
				newString.length,
				10,
				function(err, bytesWritten){
					if(!err){
						console.log('done');
					}
				}
			);
		})();
	});
});