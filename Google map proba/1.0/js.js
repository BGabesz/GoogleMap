
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}







/* function initMap() {
    var hely={ lat: -25.397, lng: 131.644 };
    var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: hely
  });
} */