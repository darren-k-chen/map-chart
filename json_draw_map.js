require([
    "esri/Map",
    "esri/layers/GeoJSONLayer",
    "esri/views/MapView"
], function(Map, GeoJSONLayer, MapView) {
	var map = new Map({
		basemap: "topo-vector"
	});

	var view = new MapView({
		container: "viewDiv",
		map: map,
		center: [121, 23.8],
		zoom: 8
	});

	const layer = new GeoJSONLayer({
        url: json_url,
        // popupTemplate: template,
        // renderer: renderer, //optional
		copyright: "TaiwanMap"
    });

	map.add(layer);
});

// https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-SimpleFillSymbol.html
