var map = L.map('map', {
		crs: L.CRS.Simple
	});

	var bounds = [[0, 0], [15360, 15360]];
	var image = L.imageOverlay('./maps/cherno/map.png', bounds).addTo(map);
