function getRawBounds() {
    var rawBounds = [];

    for (i = 0; i < boxpolys.length; i += 1) {
        var rawBoundsUnit = [];
        var neCoords = getRawNeCoords(
            boxpolys[i].bounds.Ba.k,
            boxpolys[i].bounds.ra.k
        );
        var swCoords = getRawSwCoords(
            boxpolys[i].bounds.Ba.j,
            boxpolys[i].bounds.ra.j
        );

        rawBoundsUnit[0] = swCoords;
        rawBoundsUnit[1] = neCoords;
        rawBounds[i] = rawBoundsUnit;
    }
    // console.log(rawBounds);
    return rawBounds;

}

//get the sw corner of the box
function getRawSwCoords(swLat, swLon) {
    var swCoords = [];
    var swCoords = getBoundsCoords(swLat, swLon);
    //console.log(swCoords);
    return swCoords;
}
//get the ne corner of the box
function getRawNeCoords(neLat, neLon) {
    var neCoords = [];
    var neCoords = getBoundsCoords(neLat, neLon);
    //console.log(neCoords);
    return neCoords;
}

//Make a coord array from lat lon
function getBoundsCoords(lat, lon) {
    var boundsCoords = [];
    boundsCoords[0] = lat;
    boundsCoords[1] = lon;
    return boundsCoords;
}
