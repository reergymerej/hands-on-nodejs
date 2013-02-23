//	read a chunk from a file

var fs = require('fs');

function readChunk(filePath, start, end){

	//	open the file for reading
	fs.open(filePath, 'r', function(err, fd){
		if(err){
			console.error('unable to open %s', filePath);
			throw err;
		}

		//	new Buffer to hold read data
		var myBuff = new Buffer(end - start);

		//	read chunk
		fs.read(
			fd,
			myBuff,
			0,
			end - start,
			start,
			function(err, bytesRead, buffer){
				if(err){
					console.err('unable to read bytes');
					throw err;
				}

				console.log('bytes read: %d', bytesRead);
				console.log(myBuff.toString());
			}
		);
	});
};

readChunk('./a.txt', 10, 14);