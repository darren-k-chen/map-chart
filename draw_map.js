// Author: Darren K.J. Chen

require([
	"esri/views/MapView",
	"esri/WebMap"
], function(MapView, WebMap) {
    // var item_id = "<YourItemId>";
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
