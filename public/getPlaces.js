    var placesCount = 0;

    function getGooglePlaces(coords) {
        //slow this down - try to batch load data

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
                radius: 800, //1 mile in meters
                types: ['food']

            };

            service.nearbySearch(request, callback);
        }
    }

    function callback(results, status) {

        for (var i = 0; i < results.length; i++) {
            sleep(20);
            console.log('slept for 20 millis');

            console.log(results[i].name);
            console.log(results[i].id);
            console.log(results[i].types);
            console.log(results[i].rating);
            console.log(results[i].vicinity);
            //console.log(results[i].URL);
            //console.log(results[i].website);

            if (status == google.maps.places.PlacesServiceStatus.OK) {
                //request places every second
                var limit = 20;
                for (var i = 0; i < limit; i++) {
                    createMarker(results[i]);
                    placesCount += 1;
                }
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

    function sleep(ms) {
        var start = new Date().getTime(),
            expire = start + ms;
        while (new Date().getTime() < expire) {}
        return;
    }

    /*    function addMore(results, placesCount) {
        var limit = 10 + placesCount;
        console.log(placesCount);
        for (var i = placesCount; i < limit; i++) {
            createMarker(results[i]);
            placesCount += 1;
        }
        //return placesCount;
    }*/
    /*        var attributes = [
            name
            formatted_address,
            geometry(lat / long),
            Icon,
            ID,
            formatted_phone_number,
            vicinity,
            photos,
            rating,
            reference,
            types,
            URL,
            website
        ];*/
    // console.log(attributes);
