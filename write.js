var fs = require('fs');

fs.open('./system.log', 'a', function(err, file){
	var writeBuffer = new Buffer('writing this string'),
		bufferOffset = 0,
		bufferLength = writeBuffer.length,
		filePosition = null;

	if(err){
		throw err;
	}

	fs.write(
		file,
		writeBuffer,
		bufferOffset,
		bufferLength,
		filePosition,
		function(err, written){
			if(err){
				throw err;
			}

			console.log('wrote ' + written);
		}
	);
});