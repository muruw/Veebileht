function initMap() {
  var tartu = {lat: 58.378, lng: 26.729};
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 7, center: tartu});
  var marker = new google.maps.Marker({position: tartu, map: map});
}