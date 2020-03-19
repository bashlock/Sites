window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
	exportEnabled:true,
	animationEnabled:true,
    animationDuration:1500,  //change to 1000, 500 etc
	title:{
		text: ""
	},
	legend:{
		cursor: "pointer",
		itemclick: explodePie,
		horizontalAlign: "right",
		verticalAlign: "center",
        fontColor: "#9a9a9a",
        fontFamily: "Roboto",
        fontWeight: "normal",
	},
     toolTip:{
//        backgroundColor:"#000",
        fontColor: "#cccccc",
        cornerRadius: "16",
        backgroundColor: "rgba(0,0,0,.7)",
        fontFamily: "Roboto",
        borderColor: "#000",
     },
	data: [{
        type: "doughnut",
		startAngle: 60,
		innerRadius:70,
		showInLegend: true,
		//toolTipContent: "{name}: <strong class='hide'>{y}%</strong>",
        //indexLabel: "{name} - {y}%",
		dataPoints: [
			{ y: 35, name: "Graphic Design",indexLabelBackgroundColor: "#000", },
			{ y: 35, name: "UI Design" },
			{ y: 15, name: "UX Design" },
            { y: 5, name: "Branding" },
            { y: 10, name: "Interaction" },
		]
	}]
});
chart.render();
}

function explodePie (e) {
	if(typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
		e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
	} else {
		e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
	}
	e.chart.render();

}