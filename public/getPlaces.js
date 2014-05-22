function logit() {
    console.log('hi');
}

//For each box
//get coords
//find Center
//print CenterCoords;

//For each box
function getPlaces() {
    var places = [];

    for (i = 0; i < boxpolys.length; i += 1) {
        //get the corner coordinates of the box
        console.log(i);
        var boxCoords = getCoords(
            boxpolys[i].bounds.Ba.j,
            boxpolys[i].bounds.Ba.k,
            boxpolys[i].bounds.ra.j,
            boxpolys[i].bounds.ra.k
        );
        //find the center of the box
        var center = [];
        center = getCenter(boxCoords);
        //push to the places array
        places[i] = center;
        //console.log('assigning ' + center);
    }
    return places;
}

//Get Coords0
function getCoords(lat1, lat2, lon1, lon2) {
    var coords = [];
    coords[0] = lat1;
    coords[1] = lat2;
    coords[2] = lon1;
    coords[3] = lon2;

    return coords;
}

//Get center of box, accepts a coord array as an argument
function getCenter(coords) {

    var latCenter = avg(coords[0], coords[1]);
    var lonCenter = avg(coords[2], coords[3]);

    var Center = [];
    Center[0] = latCenter;
    Center[1] = lonCenter;

    console.log(Center[0], Center[1]);
    return (Center);
}
//average 2 numbers

function avg(a, b) {
    var c = a + b;
    var d = c / 2;
    return d;
}



/*
function getCenter(lat1, lat2, lon1, lon2) {

    var latCenter = avg(lat1, lat2);
    var lonCenter = avg(lon1, lon2);

    var Center = [];
    Center[0] = latCenter;
    Center[1] = lonCenter;

    console.log(Center[0], Center[1]);
    return (Center);
}
*/
