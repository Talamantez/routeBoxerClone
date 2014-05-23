//Track Down "InvalidValueError"



function getGooglePlaces(coords) {


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
            radius: 500
        };
        //////////////


        function callback(results, status) {
            console.log(results, status);
            if (status == google.maps.places.PlacesServiceStatus.OK) {
                for (var i = 0; i < results.length; i++) {
                    createMarker(results[i]);
                }
            }
        }

        function createMarker(place) {
            var placeLoc = place.geometry.location;
            var marker = new google.maps.Marker({
                map: map,
                position: place.geometry.location
            });



        }


        service.nearbySearch(request, callback);
    }
}
