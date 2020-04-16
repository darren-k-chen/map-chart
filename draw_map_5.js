require([
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/FeatureLayer"
], function(Map, MapView, FeatureLayer) {
  var map = new Map({
	basemap: "hybrid"//"viewDiv"//
  });

  var view = new MapView({
	container: "viewDiv",
	map: map,
	center: [121, 23.8],
	zoom: 8//,

	// extent: {
	//   // autocasts as new Extent()
	//   xmin: -23112.922292731062,
	//   ymin: 2676963.721628806,
	//   xmax: 437924.4581153632,
	//   ymax: 2735172.1713790386,
	//   spatialReference: 102443
	// }
  });

  /********************
   * Add feature layer
   ********************/

  // Carbon storage of trees in Warren Wilson College.
  var featureLayer = new FeatureLayer({
	url:
	  "http://landgis.taitung.gov.tw/arcgiswa/rest/services/Taiwan/TwnBaseMap_V1/MapServer"
  });

  map.add(featureLayer);
});
