// function that takes in a neighborhood JSON 
// and makes a line graph of price versus time
function buildLineGraph(data){
// code for graph here
console.log(data);
  
d3.json("/api/v1/${nbhd}").then(function(data){
    var trace1 = {
      x: data.map(row => row.Sale_Year),
      y: data.map(row => row.Sale_Price),
      text: data.map(row => row.Sale_Year),
      name: "Average Sale Price",
      mode: "lines",
      line: {
        color: 'rgb(219, 64, 82)',
        width: 3
      }
    };
  
    // data
    var chartData = [trace1];
  
    // Apply the group line mode to the layout
    var layout = {
      title: "Average Sale Price by Year ",
      margin: {
        l: 100,
        r: 100,
        t: 100,
        b: 100
      },
      xaxis: {
        title: 'Year'
      },
      yaxis: {
        title: 'Average Sale Price'
      }
    };
  
    // Render the plot to the div tag with id "plot"
    Plotly.newPlot("plot", chartData, layout);
});  
}