$(function () {	
	var timeMinutes = 0;
	var timeHours = 0;

    $("#testResizableArray").sevenSeg({ digits: 4 }); // set number of segments
    setInterval(function() {
		timeMinutes = new Date().getMinutes();	
		timeHours = new Date().getHours();	
		time = String(timeHours).padStart(2, '0') + "." + String(timeMinutes).padStart(2, '0');
		$("#testResizableArray").sevenSeg({ value: time });		
		}, 
	5);
});