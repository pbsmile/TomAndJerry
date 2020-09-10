document.addEventListener('DOMContentLoaded',init);

function init(){
}

function randommap() {
    var map = Math.floor(Math.random() * 5) + 1;
    var x = ""
    var mapHtml = ""
    window.thisMap = mapstruct[0];
    
    if(map == 1){
        thisMap = mapstruct[0];
        x = "Map Pakbung"
        mapHtml = "map1.html"
    }
    if(map == 2){
        thisMap = mapstruct[1];
        x = "Map Nice"
        mapHtml = "map2.html"
    }
    if(map == 3){
        thisMap = mapstruct[2];
        x = "Map Namob"
        mapHtml = "map3.html"
    }
    if(map == 4){
        thisMap = mapstruct[3];
        x = "Map Aon"
        mapHtml = "map4.html"
    }
    if(map == 5){
        thisMap = mapstruct[4];
        x = "Map Little"
        mapHtml = "map5.html"
    }
    document.getElementById('map').textContent = x
    document.getElementById("MapObj").innerHTML = '<object data='+ map +'  width="100%" height="100%"></object>'
    console.log(thisMap);
}

function start()
{ 
   
    var search = document.getElementById('search');
    var strSearch = search.options[search.selectedIndex].value;
    var delay = document.getElementById('delay');
    var strDelay = delay.options[delay.selectedIndex].value;
    console.log(thisMap);
    if(strSearch == 'iterative'){
        iterativeDeepeningSearch(thisMap);
    }
    if(strSearch == 'uniform'){
        unc(thisMap);
    }
}




/*------------------------- map is here -------------------------*/
let mapstruct = [
    {
        startPlanet:0,
        endPlanet:6,
        fuelLimit:12,
        mapNumber:0,
        Planets:[
            {
                time:0,
                linkedPlanets:[
                    {
                        planetNumber:1,
                        time:4,
                        useFuel:1
                    },
                    {
                        planetNumber:3,
                        time:1,
                        useFuel:4
                    },
                ]
            },
            {
                time:4,
                linkedPlanets:[
                    {
                        planetNumber:3,
                        time:1,
                        useFuel:2
                    },
                    {
                        planetNumber:2,
                        time:2,
                        useFuel:2
                    },
                ]
            },
            {
                time:2,
                linkedPlanets:[
                    {
                        planetNumber:4,
                        time:0,
                        useFuel:4
                    },
                    {
                        planetNumber:5,
                        time:3,
                        useFuel:3
                    },
                ]
            },
            {
                time:1,
                linkedPlanets:[
                    {
                        planetNumber:5,
                        time:3,
                        useFuel:3
                    }
                ]
            },
            {
                time:0,
                linkedPlanets:[
                    {
                        planetNumber:6,
                        time:0,
                        useFuel:2
                    }
                ]
            },
            {
                time:3,
                linkedPlanets:[
                    {
                        planetNumber:6,
                        time:0,
                        useFuel:6
                    }
                ]
            },
            {
                time:0,
                linkedPlanets:[]
            },
        ]
    },
    {
        startPlanet:0,
        endPlanet:6,
        fuelLimit:7,
        mapNumber:1,
        Planets:[
            {
                time:0,
                linkedPlanets:[
                    {
                        planetNumber:1,
                        useFuel:2,
                        time:4,
                    },
                    {
                        planetNumber:5,
                        time:0,
                        useFuel:2
                    },
                ]
            },
            {
                time:2,
                linkedPlanets:[
                    {
                        planetNumber:2,
                        time:2,
                        useFuel:1
                    },
                    {
                        planetNumber:3,
                        time:3,
                        useFuel:2
                    },
                ]
            },
            {
                time:2,
                linkedPlanets:[
                    {
                        planetNumber:6,
                        time:0,
                        useFuel:2
                    },
                ]
            },
            {
                time:3,
                linkedPlanets:[
                    {
                        planetNumber:4,
                        time:2,
                        useFuel:1
                    },
                    {
                        planetNumber:5,
                        time:0,
                        useFuel:2
                    },
                    {
                        planetNumber:6,
                        time:0,
                        useFuel:2
                    }
                ]
            },
            {
                time:2,
                linkedPlanets:[
                    {
                        planetNumber:5,
                        time:0,
                        useFuel:1
                    }
                ]
            },
            {
                time:0,
                linkedPlanets:[
                    {
                        planetNumber:6,
                        time:0,
                        useFuel:8
                    }
                ]
            },
            {
                time:0,
                linkedPlanets:[]
            },
        ]
    },
    {
        startPlanet:0,
        endPlanet:6,
        fuelLimit:9,
        mapNumber:2,
        Planets:[
            {
                time:0,
                linkedPlanets:[
                    {
                        planetNumber:1,
                        time:1,
                        useFuel:4
                    },
                    {
                        planetNumber:2,
                        time:2,
                        useFuel:3
                    },
                ]
            },
            {
                time:1,
                linkedPlanets:[
                    {
                        planetNumber:3,
                        time:2,
                        useFuel:1
                    },
                    {
                        planetNumber:4,
                        time:3,
                        useFuel:1
                    },
                ]
            },
            {
                time:2,
                linkedPlanets:[
                    {
                        planetNumber:5,
                        time:2,
                        useFuel:2
                    },
                    {
                        planetNumber:6,
                        time:4,
                        useFuel:8
                    },
                ]
            },
            {
                time:2,
                linkedPlanets:[
                    {
                        planetNumber:4,
                        time:3,
                        useFuel:3
                    },
                    {
                        planetNumber:5,
                        time:2,
                        useFuel:1
                    },
                    
                ]
            },
            {
                time:3,
                linkedPlanets:[
                    {
                        planetNumber:6,
                        time:4,
                        useFuel:5
                    }
                ]
            },
            {
                time:2,
                linkedPlanets:[
                    {
                        planetNumber:6,
                        time:4,
                        useFuel:2
                    }
                ]
            },
            {
                time:4,
                linkedPlanets:[]
            },
        ]
    },
    {
        startPlanet:0,
        endPlanet:14,
        fuelLimit:14,
        mapNumber:3,
        Planets:[
            {
                time:0,
                linkedPlanets:[
                    {
                        planetNumber:1,
                        time:1,
                        useFuel:3
                    },
                    {
                        planetNumber:2,
                        time:0,
                        useFuel:3
                    },
                    {
                        planetNumber:3,
                        time:3,
                        useFuel:3
                    },
                    
                ]
            },
            {
                time:1,
                linkedPlanets:[
                    {
                        planetNumber:6,
                        time:2,
                        useFuel:4
                    },
                    {
                        planetNumber:10,
                        time:0,
                        useFuel:6
                    },
                ]
            },
            {
                time:0,
                linkedPlanets:[
                    {
                        planetNumber:6,
                        time:2,
                        useFuel:4
                    },
                    
                ]
            },
            {
                time:3,
                linkedPlanets:[
                    {
                        planetNumber:4,
                        time:2,
                        useFuel:1
                    },
                    {
                        planetNumber:5,
                        time:4,
                        useFuel:3
                    },
                    
                ]
            },
            {
                time:2,
                linkedPlanets:[]
            },
            {
                time:4,
                linkedPlanets:[
                    {
                        planetNumber:7,
                        time:2,
                        useFuel:2
                    },
                    {
                        planetNumber:6,
                        time:2,
                        useFuel:4
                    },
                ]
            },
            {
                time:2,
                linkedPlanets:[
                    {
                        planetNumber:8,
                        time:1,
                        useFuel:2
                    },
                    {
                        planetNumber:10,
                        time:0,
                        useFuel:3
                    },
                ]
            },
            {
                time:2,
                linkedPlanets:[
                    {
                        planetNumber:8,
                        time:1,
                        useFuel:2
                    },
                ]
            },
            {
                time:1,
                linkedPlanets:[
                    {
                        planetNumber:9,
                        time:0,
                        useFuel:1
                    },
                    {
                        planetNumber:12,
                        time:3,
                        useFuel:3
                    },
                ]
            },
            {
                time:0,
                linkedPlanets:[
                    {
                        planetNumber:11,
                        time:1,
                        useFuel:2
                    },
                ]
            },
            {
                time:0,
                linkedPlanets:[
                    {
                        planetNumber:12,
                        time:3,
                        useFuel:2
                    },
                ]
            },
            {
                time:1,
                linkedPlanets:[
                    {
                        planetNumber:12,
                        time:3,
                        useFuel:5
                    },
                    {
                        planetNumber:14,
                        time:0,
                        useFuel:3
                    },
                ]
            },
            {
                time:3,
                linkedPlanets:[
                    {
                    planetNumber:13,
                    time:2,
                    useFuel:1
                    },
                ]
            },
            {
                time:2,
                linkedPlanets:[
                    {
                        planetNumber:14,
                        time:0,
                        useFuel:2
                    },
                ]
            },
            {
                time:0,
                linkedPlanets:[]
            },
        ]
    },
    {
        startPlanet:0,
        endPlanet:14,
        fuelLimit:14,
        mapNumber:4,
        Planets:[
            {
                time:0,
                linkedPlanets:[
                    {
                        planetNumber:1,
                        time:2,
                        useFuel:1
                    },
                    {
                        planetNumber:2,
                        time:3,
                        useFuel:1
                    },
                    {
                        planetNumber:4,
                        time:1,
                        useFuel:3
                    },
                ]
            },
            {
                time:2,
                linkedPlanets:[]
            },
            {
                time:3,
                linkedPlanets:[
                    {
                        planetNumber:4,
                        time:1,
                        useFuel:1
                    },
                    {
                        planetNumber:5,
                        time:4,
                        useFuel:1
                    },
                ]
            },
            {
                time:1,
                linkedPlanets:[
                    {
                        planetNumber:4,
                        time:1,
                        useFuel:1
                    },
                    {
                        planetNumber:6,
                        time:5,
                        useFuel:2
                    },
                    
                ]
            },
            {
                time:1,
                linkedPlanets:[
                    {
                        planetNumber:7,
                        time:2,
                        useFuel:5
                    }
                ]
            },
            {
                time:4,
                linkedPlanets:[]
            },
            {
                time:5,
                linkedPlanets:[
                    {
                        planetNumber:8,
                        time:2,
                        useFuel:4
                    },
                    {
                        planetNumber:9,
                        time:0,
                        useFuel:3
                    },
                ]
            },
            {
                time:2,
                linkedPlanets:[
                    {
                        planetNumber:9,
                        time:0,
                        useFuel:3
                    },
                ]
            },
            {
                time:2,
                linkedPlanets:[]
            },
            {
                time:0,
                linkedPlanets:[]
            },
        ]
    },
];



/*----------- iterative deepening search is here --------------*/
var bottomReached = false;

function iterativeDeepeningSearch(mapstruct){   
    var depth = 1;
    const start = mapstruct.startPlanet;
    const goal = mapstruct.endPlanet;
    const fuelLimit = mapstruct.fuelLimit;
    var currentFuel = 0;
    var time = 0;
 
    //increase depth here
    while (!bottomReached)
    {
        bottomReached = true; 
        var result = deepeningSearch(start, goal, 0, depth, currentFuel, fuelLimit, mapstruct.Planets, time);
        if (result!= null){
            return result;
        }
        depth += 1;
        console.log("Increasing depth to " + depth);
    }

    return null;
}

//Search each iteration here
function deepeningSearch(currentPlanet, goal, currentDepth, maxDepth, currentFuel, fuelLimit, planets, time){
    if(currentFuel <= fuelLimit){
        console.log("Visiting Planet " + currentPlanet);
        if (currentPlanet === goal) {
            // We have found the goal node we're searching for
            console.log("Tom has found Jerry!");
            return currentPlanet;
        }
        if (currentDepth === maxDepth) {
            console.log("Current maximum depth reached, returning...");
            // We have reached the end for this depth...
            if (planets[currentPlanet].linkedPlanets.length > 0) {
                //...but we have not yet reached the bottom of the tree
                bottomReached = false;
                currentFuel = 0;
                time = 0
                console.log("Haven't reach bottom yet.");
            }
            return null;
        }
        // Recurse with all children
        for (var i = 0; i < planets[currentPlanet].linkedPlanets.length; i++) {
            currentFuel += planets[currentPlanet].linkedPlanets[i].useFuel;
            time += planets[currentPlanet].time;
            console.log("this planet time: "+planets[currentPlanet].time);
            console.log("Current Fuel usage: "+currentFuel+", Time: "+time);
            var result = deepeningSearch(planets[currentPlanet].linkedPlanets[i].planetNumber, goal, currentDepth + 1, maxDepth, currentFuel, fuelLimit, planets, time);
            if (result != null) {
                // We've found the goal node while going down that child
                return result;
            }
        }
    }
    else{
        console.log("Not enough fuel finding others way...");
            // We have reached the end for this depth...
            if (planets[currentPlanet].linkedPlanets.length > 0) {
                //...but we have not yet reached the bottom of the tree
                bottomReached = false;
                currentFuel = 0;
                time = 0
                console.log("Haven't reach bottom yet.");
            }
            return null;
    }
}
