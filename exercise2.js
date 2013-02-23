var buf = new Buffer(100),
	slice;

for(var i = 0; i < 100; i++){
	buf[i] = i;
}

slice = buf.slice(40, 60)

for(var i = 0; i < slice.length; i++){
	console.log(slice[i]);
}
