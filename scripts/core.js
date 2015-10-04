_cv = []; // Array of Canvasses

moduLoad("dummy"); // Modules to load. Automatically appends .js

_g = { dummies : [] }; // "Globals". Try not to use too much.


moduLoad.ready = function () {

    console.log("All loaded up and ready to go!");
    console.log(_cv.setupAll() + " canvasses found."); // Setup all canvasses. We only have one. It's called _cv[0].

    _g.dummies.push(new dummy()); // Make two clones of Dummy. put them inside a constant so we can keep track of them.
	_g.dummies.push(new dummy());
	
	_g.dummies[1].pos = [90, 90]; // Change the second clone
	
	for (var i = 0; i < _g.dummies.length; i++) { // Go through all the dummies and tell them to "helloworld"
		_g.dummies[i].helloworld();
	}

    //setInterval(function() { main.step(); },1000/60);

}

// Don't touch this shit. //

_cv.setupAll = function () {
    $("canvas").each(function (ind) {
        _cv[ind] = $(this)[0].getContext('2d');
    });
    return $("canvas").length;
}