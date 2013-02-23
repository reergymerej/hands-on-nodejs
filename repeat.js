(function schedule(){
	setTimeout(function(){
		console.log('yo');
		schedule();
	}, 1000);
})();