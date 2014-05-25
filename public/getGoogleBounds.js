function getGoogleBounds(rawBounds) {
    console.log('making googleBounds array');
    console.log('raw Bounds index 0: ' + rawBounds[0]);
    console.log('raw Bounds index 1: ' + rawBounds[1]);

    var googleBounds = [];

    for (i = 0; i < rawBounds.length; i += 1) {
        //pluck an array of index i out of rawbounds
        //array
        //so make a variable to store each of those indecies.
        //then plug "myvar[0] and myvar[1] into assembleBounds"

        //make an array to store the incoming rawBoundsUnit
        var myRawBounds = [];
        myRawBounds = rawBounds[i];
        console.log('myRawBounds: ' + myRawBounds);
        //first index is swBounds
        console.log('myRawBounds[0] SW bounds' + myRawBounds[0]);
        //second index is neBounds
        console.log('myRawBounds[1] NE bounds:' + myRawBounds[1]);

        //make a rawSwBounds Array to store the SW bounds
        var myRawSwBounds = [];
        myRawSwBounds = myRawBounds[0];
        console.log('myRawSwBounds: ' + myRawSwBounds);

        //make a RawNeBounds Array to store the NE bounds
        var myRawNeBounds = [];
        myRawNeBounds = myRawBounds[1];
        console.log('myRawNeBounds:' + myRawNeBounds);

        //pass the myRawSwBounds and myRawNeBounds array
        //to "assembleBounds()". This should make googleBounds
        //object for each unit in the myRawBounds array

        var myBounds = assembleBounds(myRawSwBounds, myRawNeBounds);
        console.log('myBounds: ' + myBounds);

        googleBounds[i] = myBounds;
    }

    return googleBounds;
}

//take in rawBounds, output googleBounds
//make a googleLatLongBounds object for every
//coordinate pair in the array "rawBounds"

function assembleBounds(swBounds, neBounds) {
    console.log('assembling swBounds:' + swBounds + ' and neBounds:' + neBounds);

    //make arrays to store the input Bounds arrays
    var mySwBounds = [];
    var myNeBounds = [];

    //assign the arrays to the input arguments
    var mySwBounds = swBounds;
    var myNeBounds = neBounds;

    //log the new arrays
    console.log('mySwBounds:' + mySwBounds);
    console.log('myNeBounds:' + myNeBounds);



    //split the ne and sw Bounds objects into lat and lon units
    var mySwBoundsLat = mySwBounds[0];
    console.log('Sw Lat: expect to be 46ish:'+mySwBoundsLat );
    var mySwBoundsLon = mySwBounds[1];
    console.log('Sw lon: expect to be -122ish '+mySwBoundsLon );
    
    var myNeBoundsLat = myNeBounds[0];
        console.log('Ne Lat: expect to be 46ish:'+myNeBoundsLat );
    var myNeBoundsLon = myNeBounds[1];
        console.log('Nw Lon: expect to be -122ish:'+myNeBoundsLon );
    console.log('mySwBoundsLat: ' + mySwBoundsLat);
    console.log('mySwBoundsLon: ' + mySwBoundsLon);

    console.log('myNeBoundsLat: ' + myNeBoundsLat);
    console.log('myNeBoundsLon: ' + myNeBoundsLon);


    var mySwGoogleLatLon = new google.maps.LatLng(mySwBoundsLat, mySwBoundsLon);
    var myNeGoogleLatLon = new google.maps.LatLng(myNeBoundsLat, myNeBoundsLon);
    //log the googleLatLon objects
    console.log('mySwGoogleLatLon: ' + mySwGoogleLatLon);
    console.log('myNeGoogleLatLon: ' + myNeGoogleLatLon);


    var myGoogleBounds = [];
    myGoogleBounds = new google.maps.LatLngBounds(
        mySwGoogleLatLon,
        myNeGoogleLatLon
    );

    console.log('myGoogleBounds ran');
    console.log('myGoogleBounds:' + myGoogleBounds);

    return myGoogleBounds;
}


//the code below is a processor I wrote to handle the incoming bounds objects,
//but it was too hard to debug, so I moved the logic up to the assemble bounds function
//get southwest bounds
/*function getSwBounds(rawSwBounds) {
    var swLat = rawSwBounds[0];
    var swLon = rawSwBounds[1];
    var swLatLon = new google.maps.LatLng(swLat, swLon);
    console.log('rawSwBounds' + rawSwBounds);
    return rawSwBounds;
}

//get northeast bounds
function getNeBounds(rawNeBounds) {
    var neLat = rawNeBounds[0];
    var neLon = rawNeBounds[1];
    var neLatLon = new google.maps.LatLng(neLat, neLon);
    console.log('rawNeBounds' + rawNeBounds);
    return rawNeBounds;
}*/
