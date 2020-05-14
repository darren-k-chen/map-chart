// Author: Darren K.J. Chen

// Please replace "https://darren-k-chen.github.io/map-chart/CountyAmountGeoJson.json" with your json src. URL
const json_url = "https://darren-k-chen.github.io/map-chart/CountyAmountGeoJson.json";

// Config. the field
const graphic_field = "APL_AMT";

// Config. the Pop-up
const popup_title = "{COUNTYNAME}";
const popup_content = "Amt = {displayAmt}";

// Config. the Legend
const legend_title = "Taiwan Map Legend";
const legend_label = "Taiwan ( R.O.C. )";
const legend_standard_title = "Display Amt.";
const legend_min_lable = "0"; // Format: String
const legend_max_lable = "3000000"; // Format: String

// Config. the min. value and color
const min_value = 0; // Format: int
const min_color = "#ffffcc";

// Config. the max. value and color
const max_value = 3000000; // Format: int
const max_color = "#a1dab4";

// Config. the outline Color
const outline_color = "white";

// Copyright
const cp_right = "Darren K.J. Chen";
