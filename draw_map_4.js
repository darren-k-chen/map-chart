// Author: Darren K.J. Chen

require([
    "esri/Map",
    "esri/views/MapView",
	"esri/layers/CSVLayer"
	// "esri/layers/FeatureLayer"
    // "esri/Graphic",
    // "esri/layers/GraphicsLayer",
	// "esri/geometry/Polygon"
], function(Map, MapView, /*FeatureLayer, */CSVLayer/*, Graphic, GraphicsLayer, Polygon*/) {

var map = new Map({
	basemap: "hybrid" // "topo-vector"
});

var view = new MapView({
	container: "viewDiv",
	map: map,
	center: [121, 23.8],
	zoom: 8
});

alert("TEST");
var url = "https://darren-k-chen.github.io/map-chart/CountyAmountGeoJson/CountyAmount.csv"; // "https://api.jsonbin.io/b/5e902ccf8e85c8437013a53a";
var layer = new CSVLayer({
   url: url, // "https://api.jsonbin.io/b/5e9023938e85c8437013a1de",
   copyright: "Darren K.J. Chen"
});
map.add(layer);  // Adds the layer to the map
alert("TEST");
});
