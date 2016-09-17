var lineUp = function(){
	var xaxis, yaxis;
	for (var i=0; i<window.dancers.length; i++){
		xaxis= 600 + (400*Math.cos((10*i*Math.PI)/180));
		yaxis= 400 + (200*Math.sin((10*i*Math.PI)/180));
		window.dancers[i].setPosition(yaxis,xaxis);
	};
};
var interact = function () {
	var dancers = window.dancers;
	for (var i=0; i<dancers.length; i++) {
		var lowDistance = {
		value: Infinity,
		index: -1 };
		for (var j=0; j<dancers.length; j++){
			var distance = Math.sqrt(Math.pow((dancers[i].top-dancers[j].top),2)+Math.pow((dancers[i].left-dancers[j].left),2))
			if ((i!==j)&&(distance<lowDistance.value)){
				lowDistance.value=distance;
				lowDistance.index=j
			};
		}
		dancers[i].setPosition(dancers[lowDistance.index].top+4, dancers[lowDistance.index].left+4)
	}
}