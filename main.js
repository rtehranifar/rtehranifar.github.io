function initMap() {
  var uluru = {lat: 40.8054491, lng: -73.9654415};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}