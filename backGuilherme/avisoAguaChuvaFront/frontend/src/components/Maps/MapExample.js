import React from "react";

function MapExample() {
  const mapRef = React.useRef(null);
  React.useEffect(() => {
    let google = window.google;
    let map = mapRef.current;
    let lat = -23.5542; // Latitude de Apucarana
    let lng = -51.4637; // Longitude de Apucarana
    const myLatlng = new google.maps.LatLng(lat, lng);
    const mapOptions = {
      zoom: 12,
      center: myLatlng,
      scrollwheel: false,
      zoomControl: true,
      styles: [
        // Estilos do mapa
        // ...
      ],
    };

    map = new google.maps.Map(map, mapOptions);

    const marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      animation: google.maps.Animation.DROP,
      title: "Apucarana",
    });

    const contentString =
      '<div class="info-window-content"><h2>Apucarana</h2>' +
      "<p>Esta é a cidade de Apucarana, no Brasil.</p></div>";

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });

    google.maps.event.addListener(marker, "click", function () {
      infowindow.open(map, marker);
    });
  }, []);

  return (
    <div className="relative w-full rounded h-600-px">
      <div className="rounded h-full" ref={mapRef} />
    </div>
  );
}

export default MapExample;