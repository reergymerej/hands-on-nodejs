//	print the size of a.txt in bytes
var fs = require('fs');




function getFileSize(filePath){
	
	//	open the file
	fs.open(filePath, 'r', function(err, fd){
		if(err){
			console.error('unable to open file');
			throw err;
		}

		//	get the file's stats
		fs.fstat(fd, function(err, stats){
			if(err){
				throw err;
			}

			console.log('%s is %d bytes', filePath, stats.size);
		});
	});	
}

getFileSize('./a.txt');