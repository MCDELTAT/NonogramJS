//============Draw Puzzle===========
//on window load, get screen size

//get max size of boxes to draw to screen --> (screen-borders)/#boxes
//calculate for both X and Y directions

//draw canvas --> dimensions: dimensionsBox X #Boxes

//draw first rectangle in top-left corner, fill first row
//drop Y coordinate down, iterate and fill all rows left-->right

//=============Main Game Loop========
//On click of square, set internal rect style to color selected

//Update color state in player JSON structure

//Loop through both JSON structures to see if puzzle is complete
//if true --> alert that they are done
//if false --> continue the loop

//============Other Game Logic=========
//Verify Puzzle: Loop through player and answer JSON trees. 
//If location = false --> flash and color it.
//Else if = true --> do nothing

//NOTE: svg.js automatically generates ids for all SVG elements,
//Format: Svgjs(elemnType)(first element is 1007, +1 for each element after)

if (SVG.supported) {
	//variables needed for disambiguation
	var puzzleIsSolved = false;
  	var pzlDimensionsX = 800;
	var pzlDimensionsY = 800;
	var numberRectX = 4;
	var numberRectY = 4;	
	var totalBoxes = numberRectX*numberRectY;
	var borderWidth = 5;
	var btnSize = 30;
	var boxSize = 75;
	var puzzleColor1 = "#a00000";
	var puzzleColor2 = "#468499";
	var currentColor = "#ffffff"; //init to NULL (white) color

	//puzzle answer
	var answer = [
		{state:1},
		{state:1},
		{state:2},
		{state:2},
		{state:1},
		{state:1},
		{state:2},
		{state:2},
		{state:1},
		{state:1},
		{state:2},
		{state:2},
		{state:1},
		{state:1},
		{state:2},
		{state:2} //16-->answer[15]
	];
	//user puzzle state-->init: NULL
	var userState = [];
	//for each box in grid, add state object.
	for (var m=0; m<=(numberRectX*numberRectY); m++){
		userState.push({state:-1});
	}
	//assert that all values are added -->access last value in array
	if (userState[totalBoxes-1].state!=(-1)){
		console.log("User State creation failed");
	}

	//create canvas
	var canvas = SVG('puzzle').size(pzlDimensionsX, pzlDimensionsY);

	//create two buttons that will set our current color
	var color1 = canvas.rect(btnSize,btnSize).attr({fill:puzzleColor1});
	var color2 = canvas.rect(btnSize,btnSize).attr({fill:puzzleColor2}).move(btnSize, 0);
	var color1DOM = document.getElementById("SvgjsRect1007");
	var color2DOM = document.getElementById("SvgjsRect1008");

	//if click on the first color, set currentColor
	color1DOM.onclick = function(){
		currentColor = puzzleColor1;
		console.log("Current color is:" + currentColor + ".");
	}
	color2DOM.onclick = function(){
		currentColor = puzzleColor2;
		console.log("Current color is:" + currentColor + ".");
	}

	//detect number key presses, switch color to puzzle color
	document.onkeypress = function(e){
		//keyCodes: 1=49, 2=50, 3=51, 4=52 etc....
		if (e.keyCode === 49){
			currentColor = puzzleColor1;
		}
		else if (e.keyCode === 50){
			currentColor = puzzleColor2;
		}
		console.log("Current color is:" + currentColor + ".");
	}

	//create original top rect, set pos and color
	var rect = canvas.rect(boxSize, boxSize).attr({fill:'#FFFFFF'});
	rect.move(borderWidth + btnSize, borderWidth + btnSize);
	rect.stroke({color:'#000000', width:borderWidth});

	//loop to generate remainder of first row
	for (var i=1; i<=numberRectX-1; i++){
		var rect = canvas.rect(boxSize, boxSize).attr({fill:'#FFFFFF'});
		rect.stroke({color:'#000000', width:borderWidth});
		rect.move(35+(boxSize*i),35);
	}
	//loop to generate other rows
	var j = 1; //value to determine row value
	for (var i=0; i<=numberRectX-1; i++){
		var rect = canvas.rect(boxSize, boxSize).attr({fill:'#FFFFFF'});
		rect.stroke({color:'#000000', width:borderWidth});
		rect.move(35+(boxSize*i),35+(boxSize*j));
		if (i == numberRectX-1 && j<=numberRectY-2){
			i = -1; //reset the counter for next row iteration.
			j++; //increment for next row
		}
	}

	var changeColor = function() {
		this.fill({color: currentColor});
		//set the state of the box we just clicked
		var index = (canvas.index(this)-3);
		//index -= 3; //scale 1st index to zero
		if (currentColor == puzzleColor1){
			userState[index].state = 1;
		} else if (currentColor == puzzleColor2){
			userState[index].state = 2;
		}
		//check that the puzzle wasn't solved with each mouseclick
		for (var k=0; k<=totalBoxes-1; k++){
			var stateValue = userState[k].state;
			if (stateValue == answer[k].state){
				if (k == totalBoxes-1){
					alert("Congratulations, you beat the Puzzle!");
				}
				continue;
			}
			//if the above conditional evaluates false-->entire puzzle false 
			else{
				console.log("The test loop exited at: "+k+".");
			}	
			break; 	
		}	
	}
	//add event listners for every element of SVG
	var it;
	for (it=3; it<=18; it++){
		//get string to search for id in DOM
		var box = canvas.get(it);
		box.on('click', changeColor);
	}

} else {
  alert('SVG not supported, download a newer browser to play.');
}

