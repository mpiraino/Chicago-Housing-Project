//neighborhoos dropdown list
//output nbhd

// pulls data from API and runs the functions to make the graphs
d3.json(`/api/v1/${nbhd}`).then(function(data){
 buildLineGraph(data);
 //other graphs
});
