import React from "react";

function MapExample() {
  const mapRef = React.useRef(null);
  React.useEffect(() => {
    let google = window.google;
    let map = mapRef.current;
<<<<<<< Updated upstream
    let lat = "40.748817";
    let lng = "-73.985428";
=======
    let lat = -23.5542; // Latitude de Apucarana
    let lng = -51.4637; // Longitude de Apucarana
>>>>>>> Stashed changes
    const myLatlng = new google.maps.LatLng(lat, lng);
    const mapOptions = {
      zoom: 12,
      center: myLatlng,
      scrollwheel: false,
      zoomControl: true,
      styles: [
<<<<<<< Updated upstream
        {
          featureType: "administrative",
          elementType: "labels.text.fill",
          stylers: [{ color: "#444444" }],
        },
        {
          featureType: "landscape",
          elementType: "all",
          stylers: [{ color: "#f2f2f2" }],
        },
        {
          featureType: "poi",
          elementType: "all",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "road",
          elementType: "all",
          stylers: [{ saturation: -100 }, { lightness: 45 }],
        },
        {
          featureType: "road.highway",
          elementType: "all",
          stylers: [{ visibility: "simplified" }],
        },
        {
          featureType: "road.arterial",
          elementType: "labels.icon",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "transit",
          elementType: "all",
          stylers: [{ visibility: "off" }],
        },
        {
          featureType: "water",
          elementType: "all",
          stylers: [{ color: "#4299e1" }, { visibility: "on" }],
        },
=======
        // Estilos do mapa
        // ...
>>>>>>> Stashed changes
      ],
    };

    map = new google.maps.Map(map, mapOptions);

    const marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      animation: google.maps.Animation.DROP,
<<<<<<< Updated upstream
      title: "Notus React!",
    });

    const contentString =
      '<div class="info-window-content"><h2>Notus React</h2>' +
      "<p>A free Admin for Tailwind CSS, React, and React Hooks.</p></div>";
=======
      title: "Apucarana",
    });

    const contentString =
      '<div class="info-window-content"><h2>Apucarana</h2>' +
      "<p>Esta é a cidade de Apucarana, no Brasil.</p></div>";
>>>>>>> Stashed changes

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });

    google.maps.event.addListener(marker, "click", function () {
      infowindow.open(map, marker);
    });
<<<<<<< Updated upstream
  });
  return (
    <>
      <div className="relative w-full rounded h-600-px">
        <div className="rounded h-full" ref={mapRef} />
      </div>
    </>
=======
  }, []);

  return (
    <div className="relative w-full rounded h-600-px">
      <div className="rounded h-full" ref={mapRef} />
    </div>
>>>>>>> Stashed changes
  );
}

export default MapExample;
