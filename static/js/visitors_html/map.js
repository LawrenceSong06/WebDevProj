function info_templete(header,content,figure){
  return '<div id="content" class="map_info">' +'<h1>'+header+'</h1>' + '<p>'+content+'</p>' + '<figure>'+figure +'</figure>'+ '</div>';
}

let map1;
async function initMap1() {
  const position = { lat: 40.440539848094524, lng: -80.01731695393724 };
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  map1 = new Map(document.getElementById("map1"), {
    zoom: 14,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  const marker = new AdvancedMarkerElement({
    map: map1,
    position: position,
    title: "The Duquesne Incline Parking",
    gmpClickable: true,
  });

  const contentString = info_templete("The Duquesne Incline Parking","1197 West Carson St. Pittsburgh, PA. 15219", '<img src="../static/imgs/visitors/parking_street.png" alt="Street view of the parking" title="Street View">');

  const infowindow = new google.maps.InfoWindow({
    content: contentString,
    ariaLabel: "The Duquesne Incline Parking",
  });

  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map1,
    });
  });

  marker.click();
}

function initMaps(){
  initMap1();
}