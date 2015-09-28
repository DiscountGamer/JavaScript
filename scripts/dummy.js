dummy = { }; //A constructor. Leave it blank if you don't care.

//A function that "dummy" owns.
//"dummy" is automatically constructed in the global scope,
//but can also be constructed as individual objects as many times as you want.

//var dum = new dummy(); would make an instance totally seperate from the global one.
	

dummy.helloworld = function() { //constructor . functionname = function ( arguments ) {
	
	console.log("Hello World!"); //Goes into Chrome/FF debugger console.
	alert("Hello World!"); //Makes an annoying ass alert box.

	//Start of my noob attempt at drawing a image to Canvas==================================================

	var myImage = new Image(100, 200);
	myImage.src = "./assets/Ninja_Star.png"
	console.log(myImage);
	_cv[0].drawImage(myImage, 10, 10)
	
	    var c = document.getElementById("myCanvas");
	    var ctx = c.getContext("2d");
	    var img = document.getElementById("Ninja_Star");
	    ctx.drawImage(img, 10, 10);
	
	
	
	//To make an image you'll want to create the object.
	//var img = new Image(); then give it a link to the actual file.
	
	//https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image
	
	//Using Canvasses, you can use the _cv[number] (0 or 1, because we have 2 canvasses) object to draw the image.
	
	//http://www.w3schools.com/tags/canvas_drawimage.asp
	
}

