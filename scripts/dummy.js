dummy = { }; //A constructor. Leave it blank if you don't care.

//A function that "dummy" owns.
//"dummy" is automatically constructed in the global scope,
//but can also be constructed as individual objects as many times as you want.

//var dum = new dummy(); would make an instance totally seperate from the global one.
	

dummy.helloworld = function() { //constructor . functionname = function ( arguments ) {
	
	console.log("Hello World!"); //Goes into Chrome/FF debugger console.
	alert("Hello World!"); //Makes an annoying ass alert box.
	
	//To make an image you'll want to create the object.
	//var img = new Image(); then give it a link to the actual file.
	
	//https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image
	
	//Using Canvasses, you can use the _cv[number] (0 or 1, because we have 2 canvasses) object to draw the image.
	
	//http://www.w3schools.com/tags/canvas_drawimage.asp
	
}

