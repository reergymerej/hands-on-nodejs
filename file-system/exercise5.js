var fs = require('fs');

fs.open('./a.txt', 'a', function(err, fd){
	if(!err){
		(function(){
			var buff = new Buffer('\n' + Date.now() + ' - newline', 'utf8');

			fs.write(
				fd,
				buff,
				0,
				buff.length,
				null,
				function(err, bytesWritten, buffer){
					if(bytesWritten === buff.length){
						console.log('sweet');
					}
				}
			);
		})();
	}
});