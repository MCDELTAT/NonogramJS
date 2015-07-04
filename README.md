# NonogramJS
A library to help waste time via Nonogram Puzzles

Ever since I found out about Japanese Nonogram Puzzles I wasted a lot of time playing them. Trust me, they are way better than Soduku Puzzles.

The end goal is to have three (3) working components. 
#1-The Game Itself
A puzzle "library" that you could simply call once in an HTML page to generate a puzzle based on one simple JSON file which gives the puzzle data in an array.

#2-A Puzzle Verifier
A machine learning application that will generate the puzzle hints based on a desired difficulty. It will determine if the hints I've given for a particular puzzle makes the puzzle possible and how long a mortal will take to solve it. We wouldn't want impossible puzzles.

#3-A Puzzle Creator
Many of these puzzle are copyrighted, and the chances of creating a duplicate one would be pretty high, so why not solve this problem with a puzzle creator. Pass the app a low res image, it pixilates it, creates a puzzle based on a user desired size and difficulty and spits out the files necessary to embed. A preview will be available to let the user make manual modifications and verify it looks awesome!

#Roadmap
This is actually my first Javascript project, so I expect it to come about as I learn new concepts. 

STATUS: Puzzle is working, you can give it custom colors for the puzzle and change the answer. Game plays to completion. 

NEXT STEP: Re-do the puzzle generation to include space for the hints required to play. 

Libraries used: 
For now I'm using SVG.js for the graphics: http://svgjs.com
It's cool and fun, so why not....
