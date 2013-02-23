var buf = new Buffer(100);

for(var i = 0; i < 100; i++){
	buf[i] = i;
}

for(var i = 0; i < buf.length; i++){
	console.log(buf[i]);
}
