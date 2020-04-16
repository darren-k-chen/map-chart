// Author: Darren K.J. Chen

require([
    "esri/Map",
    "esri/views/MapView",
	"esri/layers/GeoJSONLayer"
    // "esri/Graphic",
    // "esri/layers/GraphicsLayer",
	// "esri/geometry/Polygon"
], function(Map, MapView, GeoJSONLayer/*, Graphic, GraphicsLayer, Polygon*/) {

var map = new Map({
	basemap: "topo-vector"
});

var view = new MapView({
	container: "viewDiv",
	map: map,
	center: [121, 23.8],
	zoom: 8
});

alert("TEST");
var url = "https://api.jsonbin.io/b/5e9023938e85c8437013a1de"; // "https://api.jsonbin.io/b/5e902ccf8e85c8437013a53a";
const geoJSONLayer = new GeoJSONLayer({
   url: url, // "https://api.jsonbin.io/b/5e9023938e85c8437013a1de",
   copyright: "Darren K.J. Chen",
});
map.add(geoJSONLayer);  // Adds the layer to the map
alert("TEST");


// var graphicsLayer = new GraphicsLayer();
// 	map.add(graphicsLayer);
//
// var point = {
// 	type: "point",
// 	longitude: 121,
// 	latitude: 23.8
// };
//
// var simpleMarkerSymbol = {
// 	type: "simple-marker",
// 	color: [226, 119, 40],  // orange
// 	outline: {
// 	    color: [255, 255, 255], // white
// 		width: 1
// 	}
// };
//
// var pointGraphic = new Graphic({
// 	geometry: point,
// 	symbol: simpleMarkerSymbol
// }); graphicsLayer.add(pointGraphic);
});
