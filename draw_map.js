// Author: Darren K.J. Chen

require([
	"esri/views/MapView",
	"esri/WebMap"
], function(MapView, WebMap) {
    var item_id = "05928d6e0d184934813e1773d7d44fa5";
    var map = new WebMap({
        portalItem: {
            id: item_id
        }
    });

    var view = new MapView({
        container: "viewDiv",
		map: map
    });
});
