$(function () {
    var mapInfos = DZGPS_v2.maps.cherno;

    // Create map control
    var map = L.map("map", {
      minZoom: mapInfos.minZoom,
      maxZoom: mapInfos.maxZoom,
      crs: mapInfos.CRS,
    });

    // Define tile layer
    L.tileLayer(
      ".maps/tiles copy" + mapInfos.tilePattern,
      {
        attribution: mapInfos.attribution,
        tileSize: mapInfos.tileSize,
      }
    ).addTo(map);

    // Center map, and sets default zoom
    map.setView(mapInfos.center, mapInfos.defaultZoom);

    // (optional) Add grid sliders
    L.latlngGraticule().addTo(map);

    // (optional) Add a scale control
    L.control.scale({ maxWidth: 200, imperial: false }).addTo(map);

    // (optional) Add mouse grid position
    L.control.gridMousePosition().addTo(map);
  });