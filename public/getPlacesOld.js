function getGooglePlaces(coords) {
    //slow this down - try to batch load data
    var placesCount = 0;
    service = new google.maps.places.PlacesService(map);
    var googleCoords = [];
    googleCoords = coords;
    // new google.mapffs.LatLng(38.64592, -105.47095)
    for (i = 0; i < googleCoords.length; i += 1) {
        myCoords = googleCoords[i];
        //myCoords = new google.maps.LatLng(38.64592, -105.47095);
        console.log(myCoords);
        //works up to here
        var request = {
            location: myCoords,
            radius: 500,
            types: ['store']

        };


        //////////////
        //// get all result results.length
        //// display 10 at a time
        ////


        function callback(results, status) {
            console.log(results, status);
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                //request places every second
                var limit = 10;

                for (var i = 0; i < limit; i++) {
                    createMarker(results[i]);
                    placesCount += 1;
                }
            }
            console.log(placesCount);
            return placesCount;
        }
        //
        function createMarker(place) {
            var placeLoc = place.geometry.location;
            var marker = new google.maps.Marker({
                map: map,
                position: place.geometry.location
            });



        }


        service.nearbySearch(request, callback);
    }
    return placesCount;
}

function addMore(results, placesCount) {
    var limit = 10 + placesCount;
    console.log(placesCount);
    for (var i = placesCount; i < limit; i++) {
        createMarker(results[i]);
        placesCount += 1;
    }
}
