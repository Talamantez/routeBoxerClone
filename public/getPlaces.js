/*
For each box
get coords
find Center
print CenterCoords;
*/

//get an array of the lat long coords of the centers of your boxes from routeBoxer
function getPlaces() {
    //make an array called "places" to store our coord arrays
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
    }
    return places;
}

//Get coords array from the corner lat lon coords for the routeBoxer boxes
function getCoords(lat1, lat2, lon1, lon2) {
    var coords = [];
    coords[0] = lat1;
    coords[1] = lat2;
    coords[2] = lon1;
    coords[3] = lon2;

    return coords;
}

//Get center of box, accepts a the coord array from getCoords() as an argument
function getCenter(coords) {

    var latCenter = avg(coords[0], coords[1]);
    var lonCenter = avg(coords[2], coords[3]);

    var Center = [];
    Center[0] = latCenter;
    Center[1] = lonCenter;

    console.log(Center[0], Center[1]);
    return (Center);
}

//mean 2 numbers

function avg(a, b) {
    var c = a + b;
    var d = c / 2;
    return d;
}

/*
take in the coordinates array Places and export an array of coords that are
formatted so you can talk to Google Places

input: places[[lat,lon],[lat,lon],..]

output: google.maps.LatLng[] googleCoords[google.mapsLatLng[],google.mapsLatLng[]]



*/

function getGoogleCoords(places) {

    var googleCoords = [];

    for (i = 0; i < places.length; i += 1) {
        //assign the nested array to an new array so we can access it indecies
        var coords = [];
        coords = places[i];
        //assign the first index to the lat variable
        var lat = coords[0];
        //assign the second index to the lon variable
        var lon = coords[1];

        var myGooglePlace = new google.maps.LatLng(lat, lon);

        googleCoords[i] = myGooglePlace;

    }

    return googleCoords;
    //var myLatlng = new google.maps.LatLng(-25.363882, 131.044922);
}



function dropMarkersCenter() {
    var places = getPlaces();
    for (i = 0; i < places.length; i += 1) {
        var thisPlace = [];
        thisPlace = places[i];
        var lat = thisPlace[0];
        var lon = thisPlace[1];
        var markerLatLon = new google.maps.LatLng(lat, lon);
        var marker = new google.maps.Marker({
            position: markerLatLon,
            map: map,
            title: lat + ', ' + lon
        });
    }


}
