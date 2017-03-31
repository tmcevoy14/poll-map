
// the total count of button clicks
var total_count = 0

// svg path for target icon
var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

var map = AmCharts.makeChart( "chartdiv", {
                             "type": "map",
                             "theme": "black",
                             
                             "imagesSettings": {
                             "selectedColor": "#ee38ea",
                             "color": "#ee38ea"
                             },
                             
                             "areasSettings": {
                             "unlistedAreasColor": "#FFFFFF",
                             "unlistedAreasAlpha": "0.1"
                             },
                             
                             "dataProvider": {
                             "map": "irelandLow",
                             "images": []
                             }
                             } );

function getRandomLatitude(min, max) {
    return Math.random() * (max - min) + min;
}

function getRandomLongitude(min, max) {
    return Math.random() * (max - min) + min;
}

// Load the page
AmCharts.ready();


// a function that actual adds the city to map
function addCity() {

    var ranges = [
                 [52.3, 54, -9, -6.4 ],
                 [51.8, 52.3, -9.75, -8.3],
                 [53.4, 54.25, -9.75, -8.3],
                 [52.3, 54, -9, -6.4 ],
                 ];
    
    var random_range = Math.floor(Math.random() * 4)
    
    var range = ranges[random_range]
        var city = {
                    "latitude": getRandomLatitude(range[0], range[1]),
                    "longitude": getRandomLongitude(range[2], range[3])
        };
    
    city.svgPath = targetSVG;
    city.zoomLevel = 5;
    city.scale = 0.5;
    
    // TODO update some sort of counter and store it in a DB in case of back up.
    total_count ++    
    document.getElementById('count_text').value = total_count;
    
    // remove it from select
    //select.removeChild( select.childNodes[ select.selectedIndex ] );
    
    // add city object to map
    map.dataProvider.images.push( city );
    map.validateData();
    
    
    //var btn = document.getElementById('button');
    //btn.disabled = true;
}
