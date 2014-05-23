function getDirections(fromPlace, toPlace, bufferMiles) {
    console.log(bufferMiles);
    var distance = $('#distance');
    console.log(distance);
    distance.val(bufferMiles);
    console.log(distance.val);
    from.value = fromPlace;
    to.value = toPlace;

    var submit = $('#executeDirectionsSearch').click();
}
