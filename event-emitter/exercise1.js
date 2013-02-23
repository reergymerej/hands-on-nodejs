//	get EventEmitter from events module
var eventEmitter = require('events').EventEmitter;

//	load util
var util = require('util');

//	constructor
var Ticker = function(waitTime){
	var that = this;

	setInterval(emitEvent, waitTime);

	//	emit a tick event
	function emitEvent(){
		that.emit('tick event', Date.now());
	}
}

//	inherit from EventEmitter
util.inherits(Ticker, eventEmitter);

//	create an instance of Ticker
var t = new Ticker(1000);

t.on('tick event', function(time){
	console.log('tick at %d', time);
});