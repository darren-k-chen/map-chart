// Author: Darren K.J. Chen

require([
    "esri/Map",
    "esri/views/MapView",
    "esri/Graphic",
    "esri/layers/GraphicsLayer"
], function(Map, MapView, Graphic, GraphicsLayer) {

var map = new Map({
	basemap: "topo-vector"
});

var view = new MapView({
	container: "viewDiv",
	map: map,
	center: [121, 23.8],
	zoom: 8
});

var graphicsLayer = new GraphicsLayer();
	map.add(graphicsLayer);

var point = {
	type: "point",
	longitude: 121,
	latitude: 23.8
};

var simpleMarkerSymbol = {
	type: "simple-marker",
	color: [226, 119, 40],  // orange
	outline: {
	    color: [255, 255, 255], // white
		width: 1
	}
};

var pointGraphic = new Graphic({
	geometry: point,
	symbol: simpleMarkerSymbol
}); graphicsLayer.add(pointGraphic);
});
