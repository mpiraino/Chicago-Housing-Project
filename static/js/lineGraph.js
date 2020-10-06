// d3.json("/api/v1/LINCOLN+PARK").then(function(data) {
    
//   });
  var trace1 = {
    x: [1, 2, 3, 4, 5],
    y: [5,4,3,2,1],
    type: "scatter"
  };
  
  // Create our second trace
  var trace2 = {
    x: [1, 2, 3, 4, 5],
    y: [1,2,3,4,5],
    type: "scatter"
  };
  
  // The data array consists of both traces
  var data = [trace1, trace2];
  
  // Note that we omitted the layout object this time
  // This will use default parameters for the layout
  Plotly.newPlot("plot", data);