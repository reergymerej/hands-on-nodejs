// Exercise 3 - read two chunks from a file
// Having a file named a.txt, print bytes 5 to 9, 
// and when done, read bytes 10 to 14.

var fs = require('fs');

var fileName = './a.txt';

//	open file
fs.open(fileName, 'r', function(err, fd){
	if(err){
		throw err;
	}

	var chunk1 = new Buffer(10),
		chunk2 = new Buffer(4);

	function readChunk(buffer, start, end, callback){
		fs.read(
			fd,
			buffer,
			0,
			end - start,
			start,
			function(err, bytesRead, buffer){
				if(err){
					throw err;
				}

				console.log(buffer.toString());

				if(typeof callback === 'function'){
					callback();
				}
			}
		);
	};

	readChunk(chunk1, 5, 9, readChunk(chunk2, 10, 14));
});