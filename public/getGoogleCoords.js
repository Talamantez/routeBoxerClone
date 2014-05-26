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
}
