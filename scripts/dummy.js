dummy = function () {
    this.fps = 30;
	this.pos = [20, 10];
};

//var dum = new dummy(); would make an instance totally seperate from the global one.


dummy.prototype.helloworld = function () { //constructor . functionname = function ( arguments ) {



    //Start of my noob attempt at drawing a image to Canvas==================================================

     //number of frames per sec
    var myImage = new Image(100, 200);
    myImage.src = "./assets/Red_ball.png"
    console.log(myImage);
    

   // myImage.onload = function () {	// Got rid of all this because we need to not have 1000 objects each
										// setting their own timers. Be creative and decide how to get all the objects to draw on one timer.
       // setInterval(function () {
		   
		   //Only reason we can neglect the onload is because Chrome and Firefox have the images cached so they're always loaded.
		   
        _cv[0].drawImage(myImage, this.pos[0], this.pos[1], 50, 50)
        
			
        //}, this.fps);
   // }
}

