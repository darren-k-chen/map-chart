// Author: Darren K.J. Chen

require([
	"esri/views/MapView",
	"esri/WebMap"
], function(MapView, WebMap) {
    var client_id = "05928d6e0d184934813e1773d7d44fa5";
    var webmap = new WebMap({
        portalItem: {
            id: client_id
        }
    });

    var view = new MapView( {
        container: "viewDiv",
		map: webmap
    });
});
