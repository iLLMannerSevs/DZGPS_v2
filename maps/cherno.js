function InitMap() {
  // set map config
let config = {
    minZoom: 0,
    maxZoom: 5,
  };
  // map magnification at init
  const lat = 7500.00
  const lng = 7500.00
  // call map
  const map = L.map("map", config).setView([lat, lng], zoom); 
    // load tile layers
  L.tileLayer("./maps/chernarus/{z}/{x}/{y}.png", {attribution: '&copy; <a href="https://shadowsuspect707.wixsite.com/dayznetwork">DayZ NETWORk*</a> contributors',}).addTo(map);
 
  // on drag_end update coordinates same for zoom
  map.on("dragend", updateInfo);
  map.on("zoomend", updateInfo);
  // our legend display
  const coordinates = L.control({ position: "bottomright" });

  coordinates.onAdd = function () {
    const div = L.DomUtil.create("div", "center-of-map-description");
    L.DomEvent.disableClickPropagation(div);
    return div;
  };

  coordinates.addTo(map);

  // update bounds info when loading site
  document.addEventListener("DOMContentLoaded", function() {
    updateInfo();
  });

  const markerPlace = document.querySelector(".center-of-map-description");

  function updateInfo() {
    const {lat } = map.getCenter();
    const zoom = map.getZoom();
    markerPlace.innerHTML = `center: ${lat.toFixed(5)}, $(lng.toFixed(5)} | zoom: ${zoom}`;
}}