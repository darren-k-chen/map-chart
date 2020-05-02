// Author: Darren K.J. Chen

require([
    "esri/Map",
    "esri/views/MapView",
	// "esri/layers/GeoJSONLayer"
	// "esri/widgets/Legend",
	"esri/layers/FeatureLayer"

    // "esri/Graphic",
    // "esri/layers/GraphicsLayer",
	// "esri/geometry/Polygon"
], function(Map, MapView, FeatureLayer/*GeoJSONLayer, Legend, Graphic, GraphicsLayer, Polygon*/) {

var map = new Map({
	basemap: "topo-vector"
});

var view = new MapView({
	container: "viewDiv",
	map: map,
	center: [121, 23.8],
	zoom: 8
});

// alert("TEST");
var url = "https://services5.arcgis.com/sh1jQ9KfyLjkJ9XX/arcgis/rest/services/countyamountgeojson/FeatureServer/0?token=5XZVgR_SKO7Nen2Uj4a1zyRtbUbhYJ9tzQ1scM-m7T-Jw5ZUUWLHti-hNQ9ycIt_XAcHrYFXYR-LXDysiMBKFMTyE8Y2zZSbQ0mp6BmjJhx9fmYnrpjLzQYYzjrF8Dc3aZZaxGA5V9gjpczlY1_gkZmoXLkDWIn8STyC4vAkiDRbcUT8Nuxb1e0oNInKtfS8kox7EXjcij1AJfn7ZMAD-RPL3-yuKFwC8d_fp8dt8K8."; // "https://api.jsonbin.io/b/5e902ccf8e85c8437013a53a";
const layer = new FeatureLayer({
   url: url, // "https://api.jsonbin.io/b/5e9023938e85c8437013a1de",
   copyright: "Darren K.J. Chen",
   // outFields: ["*"]
});
// layer.legendEnabled = true;

// var legend = new Legend({
//   view: view,
//   layerInfos: [{
//     layer: layer,
//     title: "Taiwan"
//   }]
// });

// view.ui.add(legend, "bottom-right");
// alert("TEST");
map.add(layer);  // Adds the layer to the map
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
