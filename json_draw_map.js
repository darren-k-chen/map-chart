// Author: Darren K.J. Chen

// Ref. Doc. 1 >> https://developers.arcgis.com/javascript/latest/api-reference/esri-symbols-SimpleFillSymbol.html
// Ref. Doc. 2 >> https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-visualVariables-VisualVariable.html
// Ref. Doc. 3 >> https://developers.arcgis.com/javascript/latest/api-reference/esri-renderers-visualVariables-ColorVariable.html

require([
    "esri/Map",
    "esri/layers/GeoJSONLayer",
    "esri/views/MapView",
	"esri/widgets/Legend"
], function(Map, GeoJSONLayer, MapView, Legend) {

	const template = {
        title: popup_title,
		content: popup_content
    };

	const renderer = {
        type: "simple",
        field: graphic_field,
		label: legend_label,
        symbol: {
            type: "simple-fill",
			style: "solid",
            outline: {
                color: outline_color,
				width: "0.5px"
            }
        },
        visualVariables: [
        {
            type: "color",
            field: graphic_field,
			// normalizationField: "<if_use_percent>",
			legendOptions: {
				title: legend_standard_title
			},
            stops: [
            {
                value: min_value,
				label: legend_min_lable,
                color: min_color
            },
			{
                value: max_value,
				label: legend_max_lable,
                color: max_color
            }]
        }]
    };

	const layer = new GeoJSONLayer({
        url: json_url,
        popupTemplate: template,
		title: legend_title,
        renderer: renderer, //optional
		copyright: cp_right
    });

	var map = new Map({
		basemap: "topo-vector",
		layers: [layer]
	});

	var view = new MapView({
		container: "viewDiv",
		map: map,
		center: [121, 23.8],
		zoom: 8
	});

	view.ui.add(
        new Legend({
            view: view
        }),
        "top-right"
    );

	// map.add(layer);
});
