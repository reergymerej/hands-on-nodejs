// Exercise 4 - Overwrite a file
// Having a file named a.txt, Overwrite it with the UTF-8-encoded string 
// “ABCDEFGHIJLKLMNOPQRSTUVXYZ0123456789abcdefghijklmnopqrstuvxyz”.

var fs = require('fs');

//	open file for writing
fs.open('./a.txt', 'r+', function(err, fd){
	if(err){
		throw err;
	}

	//	create a buffer to hold the replacement string
	var replacementBuffer = new Buffer('ABCDEFGHIJLKLMNOPQRSTUVXYZ0123456789abcdefghijklmnopqrstuvxyz');

	fs.write(
		fd,
		replacementBuffer,
		0,
		replacementBuffer.length,
		null,
		function(err, bytesWritten, buffer){
			if(err){
				throw err;
			}

			console.log(bytesWritten);
		}
	);
});