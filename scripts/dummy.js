dummy = function () {
    var fps = 30;

 }; //A constructor. Leave it blank if you don't care.

//A function that "dummy" owns.
//"dummy" is automatically constructed in the global scope,
//but can also be constructed as individual objects as many times as you want.

//var dum = new dummy(); would make an instance totally seperate from the global one.


dummy.helloworld = function () { //constructor . functionname = function ( arguments ) {



    //Start of my noob attempt at drawing a image to Canvas==================================================

     //number of frames per sec
    var myImage = new Image(100, 200);
    myImage.src = "./assets/Red_ball.png"
    console.log(myImage);
    

    myImage.onload = function () {
        setInterval(function () {
        _cv[0].drawImage(myImage, 20, 10, 50, 50)
        
			
        }, fps);
    }



    //To make an image you'll want to create the object.
    //var img = new Image(); then give it a link to the actual file.

    //https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image

    //Using Canvasses, you can use the _cv[number] (0 or 1, because we have 2 canvasses) object to draw the image.

    //http://www.w3schools.com/tags/canvas_drawimage.asp

}

