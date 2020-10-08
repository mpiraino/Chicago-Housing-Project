// pulls data from API and runs the functions to make the graphs
d3.json("/api/v1/lincoln+park").then(function(data){
 buildLineGraph(data);
});
