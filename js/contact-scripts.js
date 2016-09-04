function init_map() {
    var mapProp = {
    	zoom: 14,
    	center: new google.maps.LatLng(42.4126321, -71.14964420000001),
    	mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(document.getElementById('googleMap'), mapProp);

    var marker = new google.maps.Marker({
    	map: map,
    	position: new google.maps.LatLng(42.4126321,-71.14964420000001)
    });

    var infoWindow = new google.maps.InfoWindow({
    	content:'<strong>Baghdady Law Offices</strong><br>382 Massachusetts Avenue<br>Arlington, MA 02474<br>'
    });

    google.maps.event.addListener(marker, 'click', function() {
    	infoWindow.open(map, marker);
    });

    infoWindow.open(map, marker);
}

google.maps.event.addDomListener(window, 'load', init_map);