//puzzle format:

	//canvas size
	var pzlDimensionsX = window.outerWidth;
	pzlDimensionsX -= 100; //puzzle size is 100 less than screen size
	var pzlDimensionsY = window.outerHeight;
	pzlDimensionsY -= 100;

	//number of boxes
	var numberRectX = 4;
	var numberRectY = 4;
	var totalBoxes = numberRectX*numberRectY;

	//size of color buttons & boxes with border
	var btnSize = 30;
	var boxSize = 50;
	var borderWidth = 5;

	//colors
	var puzzleColor1 = "#a00000";
	var puzzleColor2 = "#468499";
	var currentColor = "#ffffff"; //init to NULL (white) color

	//hints 
		//rows[{color: 1, number: 6},{}]
	var rowhints = [
	{row:1, color:0, value:3},
	{row:1, color:1, value:1},
	];	

	//answer
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
	