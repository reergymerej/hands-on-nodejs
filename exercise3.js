var buf = new Buffer(100),
	buf2 = new Buffer(20);

for(var i = 0; i < 100; i++){
	buf[i] = i;
}

buf.copy(buf2, 0, 40, 60)

for(var i = 0; i < buf2.length; i++){
	console.log(buf2[i]);
}
