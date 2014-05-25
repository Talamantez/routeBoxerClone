//  make the following function with bounds object
function getPlacesFromBounds(bounds) {
    //slow this down - try to batch load data

    service = new google.maps.places.PlacesService(map);
    var googleBounds = [];
    googleBounds = bounds;
    console.log('googleBounds: ' + googleBounds);

    for (i = 0; i < googleBounds.length; i += 1) {
        var myBounds = [];
        console.log('googleBounds ' + i + ' ' + googleBounds[i]);
        myBounds = googleBounds[i];

        //myCoords = new google.maps.LatLng(38.64592, -105.47095);

        console.log(myBounds);

        //The map is saying that googleBounds[i] is "not a
        //LatLng or LatLngLiteral". can it take
        //a bounds object as input?

        var request = {
            bounds: myBounds,
            types: ['food']
        };
        service.nearbySearch(request, callback);
    }
}

function callback(results, status) {
        //console.log('callback called');
        //console.log(results + status);
        //getting a "ZERO_RESULTS" return from googles.

    for (var i = 0; i < results.length; i++) {
       // console.log(results.toJSON());
        //console.log('callback results ' + [i] + results[i]);
        //console.log('about to log results details ' + countOfPlaces);
          console.log('name: ' + results[i].name);
        //console.log('id: ' +results[i].id);
          console.log('types: '+results[i].types);
          console.log('rating: '+results[i].rating);
          console.log('vicinity: '+results[i].vicinity);
        //console.log(results[i].URL);
        //console.log(results[i].website);

        if (status == google.maps.places.PlacesServiceStatus.OK) {
            //request places every second
            //console.log('maps.places');
            var limit = 20;
            for (var i = 0; i < limit; i++) {
                createMarker(results[i]);
            }
        } else {
            console.log('google.maps.places.PlacesServiceStatus Not Ok');
        }
 
    }
    //return placesCount;
}

function createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
    });

} //createMarker

