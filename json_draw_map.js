// Author: Darren K.J. Chen
// Ref. Doc. 1 >> https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-SimpleFillSymbol.html
// Ref. Doc. 2 >> https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-visualVariables-VisualVariable.html
// Ref. Doc. 3 >> https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-visualVariables-ColorVariable.html

// alert("Test-A");

require([
    "esri/Map",
    "esri/layers/GeoJSONLayer",
	// "esri/widgets/Legend",
    "esri/views/MapView"
], function(Map, GeoJSONLayer, MapView/*, Legend*/) {
	// alert("T1");
	const template = {
        title: "{COUNTYNAME}",
		content: "Amt = {displayAmt}"
    };

	// alert("T2");
	const renderer = {
        type: "simple",
        field: "COUNTYNAME",
		label: "Taiwan ( R.O.C. )",
        symbol: {
            type: "simple-fill",
			style: "solid",
            outline: {
                color: "white",
				width: "0.5px"
            }
        },
        visualVariables: [
        {
            type: "color",
            field: "displayAmt",
			// normalizationField: 1000000,
			legendOptions: {
				title: "Display Amt."
			},
            stops: [
            {
                value: 1,
				label: "0",
                color: "#ffffcc"
            },
			{
                value: 1000,
				label: "3000000",
                color: "#a1dab4"
            }]
        }]
    };

	// alert("T3");
	const layer = new GeoJSONLayer({
        url: json_url,
        popupTemplate: template,
        renderer: renderer, //optional
		copyright: "TaiwanMap"
    });

	// alert("T4");
	var map = new Map({
		basemap: "topo-vector",
		layers: [layer]
	});

	// alert("T5");
	var view = new MapView({
		container: "viewDiv",
		map: map,
		center: [121, 23.8],
		zoom: 8
	});

	// alert("T6");
	map.add(layer);

	// alert("T7");
	view.ui.add(
        new Legend( {
            view: view
        }),
        "top-right"
    );

	// alert("T8");
});

// alert("Test-B");
