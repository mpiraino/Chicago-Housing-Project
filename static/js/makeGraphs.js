//neighborhoods dropdown list
const neighborhoods = ['ANDERSONVILLE',
'ARCHER HEIGHTS,WEST ELSDON',
'ARMOUR SQUARE,CHINATOWN',
'ASHBURN',
'AUBURN GRESHAM',
'AUSTIN',
'AVALON PARK,CALUMET HEIGHTS',
'BACK OF THE YARDS',
'BELMONT CRAGIN,HERMOSA',
'BELMONT CRAIGIN,HERMOSA',
'BEVERLY',
'BRIDGEPORT',
'BRIGHTON PARK,MCKINLEY PARK',
'BRONZEVILLE',
'BUCKTOWN',
'CHATHAM,BURNSIDE',
'DUNNING',
'EDGEWATER',
'EDISON PARK',
'ENGLEWOOD',
'GARFIELD PARK',
'GOLD COAST',
'HUMBOLDT PARK',
'HYDE PARK',
'IRVING PARK,AVONDALE',
'JEFFERSON PARK',
'KENWOOD,OAKLAND',
'LAKE VIEW',
'LINCOLN PARK',
'LINCOLN SQUARE',
'LITTLE ITALY, UIC',
'LITTLE VILLAGE',
'LOGAN SQUARE',
'LOOP',
'LOWER WEST SIDE',
'MARQUETTE PARK,GAGE PARK',
'MIDWAY AIRPORT',
'MONTCLARE, GALEWOOD',
'MOUNT GREENWOOD,MORGAN PARK',
'NEAR SOUTH SIDE',
'NORTH CENTER',
'NORTH LAWNDALE',
'NORTH PARK,ALBANY PARK',
'NORWOOD PARK',
'OAKLAND,KENWOOD',
'OLD TOWN',
'PORTAGE PARK',
'PULLMAN',
'RIVER NORTH',
'RIVERDALE',
'ROGERS PARK',
'RUSH & DIVISION',
'SAUGANASH,FOREST GLEN',
'SHEFFIELD & DEPAUL',
'SOUTH CHICAGO',
'SOUTH SHORE, GRAND CROSSING',
'SOUTHEAST SIDE',
'UKRAINIAN VILLAGE AND EAST VILLAGE',
'UNITED CENTER',
'UPTOWN',
'WASHINGTON HEIGHTS,ROSELAND',
'WASHINGTON PARK',
'WEST LAWN',
'WEST LOOP',
'WEST PULLMAN',
'WEST RIDGE',
'WICKER PARK,WEST TOWN',
'WOODLAWN',
'WRIGLEYVILLE']

function init(){
    // select dropdown menu and make an event handler
    let dropDown = d3.select("#selDataset");
    dropDown.on("change", onSelect);

    // add neighborhoods to dropdown menu
    for(name of neighborhoods){
        option  = dropDown.append("option")
    option.text(name)
    option.attr("value", name)
    };

    // make graphs for default neighborhood
    let nbhd = neighborhoods[0];
    makeNeighborhoodGraphs(nbhd);
};

//function to build all graphs

function makeNeighborhoodGraphs(nbhd){
    // pulls data from API and runs the functions to make the graphs
    d3.json(`/api/v1/${nbhd}`).then(function(data){
        buildLineGraph(data);
        //other graphs
    });
}

// event handler function for drop down menu
function onSelect(){
    let nbhd = d3.select(this).property("value");
    makeNeighborhoodGraphs(nbhd);
}

init();
