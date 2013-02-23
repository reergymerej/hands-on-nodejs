var fs = require('fs');

fs.open('./system.log', 'r', function(err, fileDescriptor){
	if(err){
		throw err;
	}

	var readBuffer = new Buffer(1024),
		bufferOffset = 0,
		bufferLength = 5,
		filePosition = 0;


	console.log(fileDescriptor);

	//	read from the file
	fs.read(fileDescriptor, readBuffer, bufferOffset, bufferLength, filePosition, function(err, readBytes){
		bufferOffset += bufferLength;

		if(err){
			throw err;
		}

		console.log('read: ', readBytes);
	});
});