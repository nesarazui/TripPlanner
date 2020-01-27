const mapbox = require("mapbox-gl")
module.exports = function (type, coordinates) {
    const markerDomEl = document.createElement("div"); // Create a new, detached DIV
    markerDomEl.style.width = "32px";
    markerDomEl.style.height = "39px";
    switch (type) {
        case 'activity':
                markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
                console.log('testing')
                break;
        case 'hotel':
                markerDomEl.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
                break;  
        case 'restaurant':
                markerDomEl.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
                break;
    }
    
 return new mapbox.Marker(markerDomEl).setLngLat(coordinates);
}

