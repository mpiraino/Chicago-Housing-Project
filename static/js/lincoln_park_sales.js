    function createMap(propertySales) {

        // Create the tile layer that will be the background of our map
        var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
          attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
          maxZoom: 18,
          id: "light-v10",
          accessToken: API_KEY
        });
      
        // Create a baseMaps object to hold the lightmap layer
        var baseMaps = {
          "Light Map": lightmap
        };
      
        // Create an overlayMaps object to hold the property sales layer
        var overlayMaps = {
          "Property Sales": propertySales
        };
      
        // Create the map object with options
        var map = L.map("plot", {
          center: [41.878113, -87.629799],
          zoom: 12,
          layers: [lightmap, propertySales]
        });
      
        // Create a layer control, pass in the baseMaps and overlayMaps. Add the layer control to the map
        L.control.layers(baseMaps, overlayMaps, {
          collapsed: false
        }).addTo(map);
      }
      
      function createMarkers(response) {
      
        // Pull the "adresses" property off of response
         var properties = response.filter(d=>d.Sale_Year==2019);
      
        // Initialize an array to hold property markers
        //var propertyMarkers = [];
      
        // Loop through the property array
        //for (var index = 0; index < properties.length; index++) {
         // var property = properties[index];
      
          // For each property, create a marker and bind a popup with the property's address
          //var propertyMarker = L.marker([property.Latitude, property.Longitude]);
            //.bindPopup("<h3>" + proterty.Address + property.Sale_Date + property.Sale_Price + property.Sale_Year + "<h3><h3>Capacity: " + property.capacity + "</h3>");
      
          // Add the marker to the propertymarker array
          //propertyMarkers.push(propertyMarker);
        //}
      
        // Create a layer group made from the property markers array, pass it into the createMap function
       // createMap(L.layerGroup(propertyMarkers));
      console.log(properties)
      }
      
      
      // Perform an API call to the  API to get neighborhood information. Call createMarkers when complete
      d3.json("/api/v1/lincoln+park", createMarkers);