_cv = []; // Array of Canvasses

moduLoad("dummy"); // Modules to load. Automatically appends .js

_g = {}; // "Globals". Try not to use too much.


moduLoad.ready = function () {

    console.log("All loaded up and ready to go!");
    console.log(_cv.setupAll() + " canvasses found."); // Setup all canvasses. We only have one. It's called _cv[0].

    dummy.helloworld();

    //setInterval(function() { main.step(); },1000/60);

}

// Don't touch this shit. //

_cv.setupAll = function () {
    $("canvas").each(function (ind) {
        _cv[ind] = $(this)[0].getContext('2d');
    });
    return $("canvas").length;
}