function splitBoxPolys() {
    if (boxpolysHeight > boxpolysWidth) {
        splitHorizontal();
    } else {
        splitVertical();
    }
}

function splitHorizontal() {
    //divide boxpoly into top and bottom halves
    var newLat = boxpolyLat;
    //find the center of the top half
    var getCenter(lat1, lat2, lon1, newLat)
    //find the center of the bottom half
    //return the latlong of the center
}

function splitVertical() {
    //divide boxpoly into left and right halves
    //find the center of the left half
    //find the center of the right half
    //return the latlong of the center
}


function getCenter(lat1, lat2, lon1, lon2) {

    var latCenter = avg(lat1, lat2);
    var lonCenter = avg(lon1, lon2);

    var Center = [];
    Center[0] = latCenter;
    Center[1] = lonCenter;

    console.log(Center[0], Center[1]);
    return (Center);
}
