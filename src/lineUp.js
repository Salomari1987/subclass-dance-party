var lineUp = function(){
	for (var i=0; i<window.dancers.length; i++){
		console.log(window.$node);
		window.dancers[i].setPosition(0, i*20);

	}

}