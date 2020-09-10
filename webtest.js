document.addEventListener('DOMContentLoaded',initial);


/*------------------------- map is here -------------------------*/
let mapstruct = [
    {
      startPlanet: 0,
      endPlanet: 6,
      fuelLimit: 12,
      mapNumber: 0,
      Planets: [
        {
          time: 0,
          planetNumber: 0,
          linkedPlanets: [
            {
              planetNumber: 1,
              time: 4,
              useFuel: 1,
            },
            {
              planetNumber: 3,
              time: 1,
              useFuel: 4,
            },
          ],
        },
        {
          time: 4,
          planetNumber: 1,
          linkedPlanets: [
            {
              planetNumber: 0,
              time: 0,
              useFuel: 1,
            },
            {
              planetNumber: 3,
              time: 1,
              useFuel: 2,
            },
            {
              planetNumber: 2,
              time: 2,
              useFuel: 2,
            },
          ],
        },
        {
          time: 2,
          planetNumber: 2,
          linkedPlanets: [
            {
              planetNumber: 4,
              time: 0,
              useFuel: 4,
            },
            {
              planetNumber: 5,
              time: 3,
              useFuel: 3,
            },
            {
              planetNumber: 1,
              time: 4,
              useFuel: 2,
            },
          ],
        },
        {
          time: 1,
          planetNumber: 3,
          linkedPlanets: [
            {
              planetNumber: 5,
              time: 3,
              useFuel: 3,
            },
            {
              planetNumber: 0,
              time: 0,
              useFuel: 4,
            },
            {
              planetNumber: 1,
              time: 4,
              useFuel: 2,
            },
          ],
        },
        {
          time: 0,
          planetNumber: 4,
          linkedPlanets: [
            {
              planetNumber: 6,
              time: 0,
              useFuel: 2,
            },
            {
              planetNumber: 2,
              time: 2,
              useFuel: 4,
            },
          ],
        },
        {
          time: 3,
          planetNumber: 5,
          linkedPlanets: [
            {
              planetNumber: 6,
              time: 0,
              useFuel: 6,
            },
            {
              planetNumber: 3,
              time: 1,
              useFuel: 3,
            },
            {
              planetNumber: 2,
              time: 2,
              useFuel: 3,
            },
          ],
        },
        {
          time: 0,
          planetNumber: 6,
          linkedPlanets: [
            {
              planetNumber: 5,
              time: 3,
              useFuel: 6,
            },
            {
              planetNumber: 4,
              time: 0,
              useFuel: 2,
            },
          ],
        },
      ],
    },
    {
      startPlanet: 0,
      endPlanet: 6,
      fuelLimit: 7,
      mapNumber: 1,
      Planets: [
        {
          time: 0,
          planetNumber: 0,
          linkedPlanets: [
            {
              planetNumber: 1,
              useFuel: 2,
              time: 4,
            },
            {
              planetNumber: 5,
              time: 0,
              useFuel: 2,
            },
          ],
        },
        {
          time: 2,
          planetNumber: 1,
          linkedPlanets: [
            {
              planetNumber: 2,
              time: 2,
              useFuel: 1,
            },
            {
              planetNumber: 3,
              time: 3,
              useFuel: 2,
            },
            {
              planetNumber: 1,
              time: 0,
              useFuel: 1,
            },
          ],
        },
        {
          time: 2,
          planetNumber: 2,
          linkedPlanets: [
            {
              planetNumber: 6,
              time: 0,
              useFuel: 2,
            },
            {
              planetNumber: 1,
              time: 2,
              useFuel: 1,
            },
          ],
        },
        {
          time: 3,
          planetNumber: 3,
          linkedPlanets: [
            {
              planetNumber: 4,
              time: 2,
              useFuel: 1,
            },
            {
              planetNumber: 5,
              time: 0,
              useFuel: 2,
            },
            {
              planetNumber: 6,
              time: 0,
              useFuel: 2,
            },
            {
              planetNumber: 1,
              time: 2,
              useFuel: 2,
            },
          ],
        },
        {
          time: 2,
          planetNumber: 4,
          linkedPlanets: [
            {
              planetNumber: 5,
              time: 0,
              useFuel: 1,
            },
            {
              planetNumber: 3,
              time: 3,
              useFuel: 2,
            },
          ],
        },
        {
          time: 0,
          planetNumber: 5,
          linkedPlanets: [
            {
              planetNumber: 6,
              time: 0,
              useFuel: 8,
            },
            {
              planetNumber: 3,
              time: 3,
              useFuel: 2,
            },
            {
              planetNumber: 4,
              time: 2,
              useFuel: 1,
            },
          ],
        },
        {
          time: 0,
          planetNumber: 6,
          linkedPlanets: [
              {
                  planetNumber: 3,
                  time: 3,
                  useFuel: 2,
              },
              {
                  planetNumber: 5,
                  time: 0,
                  useFuel: 8,
                },
          ],
        },
      ],
    },
    {
      startPlanet: 0,
      endPlanet: 6,
      fuelLimit: 9,
      mapNumber: 2,
      Planets: [
        {
          time: 0,
          planetNumber: 0,
          linkedPlanets: [
            {
              planetNumber: 1,
              time: 1,
              useFuel: 4,
            },
            {
              planetNumber: 2,
              time: 2,
              useFuel: 3,
            },
          ],
        },
        {
          time: 1,
          planetNumber: 1,
          linkedPlanets: [
            {
              planetNumber: 3,
              time: 2,
              useFuel: 1,
            },
            {
              planetNumber: 4,
              time: 3,
              useFuel: 1,
            },
            {
              planetNumber: 0,
              time: 0,
              useFuel: 4,
            },
          ],
        },
        {
          time: 2,
          planetNumber: 2,
          linkedPlanets: [
            {
              planetNumber: 5,
              time: 2,
              useFuel: 2,
            },
            {
              planetNumber: 6,
              time: 4,
              useFuel: 8,
            },
            {
              planetNumber: 0,
              time: 0,
              useFuel: 3,
            },
          ],
        },
        {
          time: 2,
          planetNumber: 3,
          linkedPlanets: [
            {
              planetNumber: 4,
              time: 3,
              useFuel: 3,
            },
            {
              planetNumber: 5,
              time: 2,
              useFuel: 1,
            },
            {
              planetNumber: 1,
              time: 1,
              useFuel: 1,
            },
          ],
        },
        {
          time: 3,
          planetNumber: 4,
          linkedPlanets: [
            {
              planetNumber: 6,
              time: 4,
              useFuel: 5,
            },
            {
              planetNumber: 1,
              time: 1,
              useFuel: 1,
            },
            {
              planetNumber: 3,
              time: 2,
              useFuel: 3,
            },
          ],
        },
        {
          time: 2,
          planetNumber: 5,
          linkedPlanets: [
            {
              planetNumber: 6,
              time: 4,
              useFuel: 2,
            },
            {
              planetNumber: 2,
              time: 2,
              useFuel: 2,
            },
            {
              planetNumber: 3,
              time: 2,
              useFuel: 1,
            },
          ],
        },
        {
          time: 4,
          planetNumber: 6,
          linkedPlanets: [
              {
                  planetNumber: 2,
                  time: 2,
                  useFuel: 8,
                },
                {
                  planetNumber: 4,
                  time: 3,
                  useFuel: 5,
                },
                {
                  planetNumber: 5,
                  time: 2,
                  useFuel: 2,
                },
          ],
        },
      ],
    },
    {
      startPlanet: 0,
      endPlanet: 14,
      fuelLimit: 14,
      mapNumber: 3,
      Planets: [
        {
          time: 0,
          planetNumber: 0,
          linkedPlanets: [
            {
              planetNumber: 1,
              time: 1,
              useFuel: 3,
            },
            {
              planetNumber: 2,
              time: 0,
              useFuel: 3,
            },
            {
              planetNumber: 3,
              time: 3,
              useFuel: 3,
            },
          ],
        },
        {
          time: 1,
          planetNumber: 1,
          linkedPlanets: [
            {
              planetNumber: 6,
              time: 2,
              useFuel: 4,
            },
            {
              planetNumber: 10,
              time: 0,
              useFuel: 6,
            },
            {
              planetNumber: 0,
              time: 0,
              useFuel: 3,
            },
          ],
        },
        {
          time: 0,
          planetNumber: 2,
          linkedPlanets: [
            {
              planetNumber: 6,
              time: 2,
              useFuel: 4,
            },
            {
              planetNumber: 0,
              time: 0,
              useFuel: 2,
            },
          ],
        },
        {
          time: 3,
          planetNumber: 3,
          linkedPlanets: [
            {
              planetNumber: 4,
              time: 2,
              useFuel: 1,
            },
            {
              planetNumber: 5,
              time: 4,
              useFuel: 3,
            },
            {
              planetNumber: 0,
              time: 0,
              useFuel: 3,
            },
          ],
        },
        {
          time: 2,
          planetNumber: 4,
          linkedPlanets: [
              {
                  planetNumber: 3,
                  time: 3,
                  useFuel: 1,
                },
          ],
        },
        {
          time: 4,
          planetNumber: 5,
          linkedPlanets: [
            {
              planetNumber: 7,
              time: 2,
              useFuel: 2,
            },
            {
              planetNumber: 6,
              time: 2,
              useFuel: 4,
            },
            {
              planetNumber: 3,
              time: 3,
              useFuel: 3,
            },
          ],
        },
        {
          time: 2,
          planetNumber: 6,
          linkedPlanets: [
            {
              planetNumber: 8,
              time: 1,
              useFuel: 2,
            },
            {
              planetNumber: 10,
              time: 0,
              useFuel: 3,
            },
            {
              planetNumber: 2,
              time: 0,
              useFuel: 4,
            },
            {
              planetNumber: 1,
              time: 1,
              useFuel: 4,
            },
            {
              planetNumber: 5,
              time: 4,
              useFuel: 4,
            },
          ],
        },
        {
          time: 2,
          planetNumber: 7,
          linkedPlanets: [
            {
              planetNumber: 8,
              time: 1,
              useFuel: 2,
            },
            {
              planetNumber: 5,
              time: 4,
              useFuel: 2,
            },
          ],
        },
        {
          time: 1,
          planetNumber: 8,
          linkedPlanets: [
            {
              planetNumber: 9,
              time: 0,
              useFuel: 1,
            },
            {
              planetNumber: 12,
              time: 3,
              useFuel: 3,
            },
            {
              planetNumber: 6,
              time: 2,
              useFuel: 2,
            },
            {
              planetNumber: 7,
              time: 2,
              useFuel: 2,
            },
          ],
        },
        {
          time: 0,
          planetNumber: 9,
          linkedPlanets: [
            {
              planetNumber: 11,
              time: 1,
              useFuel: 2,
            },
            {
              planetNumber: 8,
              time: 1,
              useFuel: 1,
            },
          ],
        },
        {
          time: 0,
          planetNumber: 10,
          linkedPlanets: [
            {
              planetNumber: 12,
              time: 3,
              useFuel: 2,
            },
            {
              planetNumber: 6,
              time: 2,
              useFuel: 3,
            },
            {
              planetNumber: 1,
              time: 1,
              useFuel: 6,
            },
          ],
        },
        {
          time: 1,
          planetNumber: 11,
          linkedPlanets: [
            {
              planetNumber: 12,
              time: 3,
              useFuel: 5,
            },
            {
              planetNumber: 14,
              time: 0,
              useFuel: 3,
            },
            {
              planetNumber: 9,
              time: 0,
              useFuel: 2,
            },
          ],
        },
        {
          time: 3,
          planetNumber: 12,
          linkedPlanets: [
            {
              planetNumber: 13,
              time: 2,
              useFuel: 1,
            },
            {
              planetNumber: 8,
              time: 1,
              useFuel: 3,
            },
            {
              planetNumber: 10,
              time: 0,
              useFuel: 2,
            },
            {
              planetNumber: 11,
              time: 1,
              useFuel: 5,
            },
          ],
        },
        {
          time: 2,
          planetNumber: 13,
          linkedPlanets: [
            {
              planetNumber: 14,
              time: 0,
              useFuel: 2,
            },
            {
              planetNumber: 12,
              time: 3,
              useFuel: 1,
            },
          ],
        },
        {
          time: 0,
          planetNumber: 14,
          linkedPlanets: [
              {
                  planetNumber: 13,
                  time: 2,
                  useFuel: 2,
                },
                {
                  planetNumber: 11,
                  time: 1,
                  useFuel: 3,
                },
          ],
        },
      ],
    },
    {
      startPlanet: 0,
      endPlanet: 9,
      fuelLimit: 10,
      mapNumber: 4,
      Planets: [
        {
          time: 0,
          planetNumber: 0,
          linkedPlanets: [
            {
              planetNumber: 1,
              time: 2,
              useFuel: 1,
            },
            {
              planetNumber: 2,
              time: 3,
              useFuel: 1,
            },
            {
              planetNumber: 4,
              time: 1,
              useFuel: 3,
            },
          ],
        },
        {
          time: 2,
          planetNumber: 1,
          linkedPlanets: [
              {
                  planetNumber: 0,
                  time: 0,
                  useFuel: 1,
                },
          ],
        },
        {
          time: 3,
          planetNumber: 2,
          linkedPlanets: [
            {
              planetNumber: 4,
              time: 1,
              useFuel: 1,
            },
            {
              planetNumber: 5,
              time: 4,
              useFuel: 1,
            },
            {
              planetNumber: 0,
              time: 0,
              useFuel: 1,
            },
          ],
        },
        {
          time: 1,
          planetNumber: 3,
          linkedPlanets: [
            {
              planetNumber: 4,
              time: 1,
              useFuel: 1,
            },
            {
              planetNumber: 6,
              time: 5,
              useFuel: 2,
            },
          ],
        },
        {
          time: 1,
          planetNumber: 4,
          linkedPlanets: [
            {
              planetNumber: 7,
              time: 2,
              useFuel: 5,
            },
            {
              planetNumber: 0,
              time: 0,
              useFuel: 3,
            },
            {
              planetNumber: 2,
              time: 3,
              useFuel: 1,
            },
            {
              planetNumber: 3,
              time: 1,
              useFuel: 1,
            },
          ],
        },
        {
          time: 4,
          planetNumber: 5,
          linkedPlanets: [
              {
                  planetNumber: 2,
                  time: 3,
                  useFuel: 1,
                },
          ],
        },
        {
          time: 5,
          planetNumber: 6,
          linkedPlanets: [
            {
              planetNumber: 8,
              time: 2,
              useFuel: 4,
            },
            {
              planetNumber: 9,
              time: 0,
              useFuel: 3,
            },
            {
              planetNumber: 3,
              time: 1,
              useFuel: 2,
            },
          ],
        },
        {
          time: 2,
          planetNumber: 7,
          linkedPlanets: [
            {
              planetNumber: 9,
              time: 0,
              useFuel: 3,
            },
            {
              planetNumber: 4,
              time: 1,
              useFuel: 5,
            },
          ],
        },
        {
          time: 2,
          planetNumber: 8,
          linkedPlanets: [
              {
                  planetNumber: 6,
                  time: 5,
                  useFuel: 4,
                },
          ],
        },
        {
          time: 0,
          planetNumber: 9,
          linkedPlanets: [
              {
                  planetNumber: 6,
                  time: 5,
                  useFuel: 3,
                },
                {
                  planetNumber: 7,
                  time: 2,
                  useFuel: 3,
                },
          ],
        },
      ],
    },
  ];

function initial(){
    window.thisMap = mapstruct[0];
    window.delay = 3000;
    window.showMap = "m1-disable";
    window.fuelEle = document.getElementById("fuel");
    window.timeEle = document.getElementById("time");
    window.pathEle = document.getElementById("path");
    window.searchEle = document.getElementById('search');
    window.delayEle = document.getElementById('delay');
    window.mapEle = "";
    window.bottomReached = false;
    init();
}

function init(){
    reset();
    randommap();
}


function reset(){
    bottomReached = false;
    resetEle()
    searchEle.selectedIndex = "1";
    delayEle.selectedIndex = "1";
}

function resetEle()
{
    fuelEle.innerHTML = "Fuel : ";
    timeEle.innerHTML = "Time : ";
    pathEle.innerHTML = "Path : ";
    return null;
}

function randommap() {
    var map = Math.floor(Math.random() * 5) + 1;
    var x = "";
    document.getElementById(showMap).style.visibility = "hidden";
    
    if(map == 1){
        thisMap = mapstruct[0];
        x = "Map Pakbung";
        mapEle = "m1";
    }
    if (map == 2) {
        thisMap = mapstruct[1];
        x = "Map Nice";
        mapEle = "m2";
    }
    if (map == 3) {
        thisMap = mapstruct[2];
        x = "Map Namob";
        mapEle = "m3";
    }
    if (map == 4) {
        thisMap = mapstruct[3];
        x = "Map Aon";
        mapEle = "m4";
    }
    if (map == 5) {
        thisMap = mapstruct[4];
        x = "Map Little";
        mapEle = "m5";
    }
    document.getElementById('map').textContent = x
    showMap = mapEle + '-disable';
    document.getElementById(showMap).style.visibility = "visible";
}

function start() {
    var strSearch = searchEle.options[searchEle.selectedIndex].value;
    var strDelay = delayEle.options[delayEle.selectedIndex].value;
    if (strDelay == '1') delay = 3000;
    else if (strDelay == '2') delay = 1500;
    else if (strDelay == '3') delay = 1000;

    var start = Date.now();
    var executetime;
    if (strSearch == 'iterative') {
        iterativeDeepeningSearch(thisMap);
        executetime = Date.now() - start;
        console.log(navigator.hardwareConcurrency);
    } else if (strSearch == 'uniform') {
        unc(thisMap);
        executetime = Date.now() - start;
        console.log(navigator.hardwareConcurrency);
    }
    console.log(navigator.hardwareConcurrency)
}




/*--------------- iterative deepening search is here --------------*/

function iterativeDeepeningSearch(mapUse) {
    var depth = 1;
    const start = mapUse.startPlanet;
    const goal = mapUse.endPlanet;
    const fuelLimit = mapUse.fuelLimit;
    const planets = mapUse.Planets;
    var currentFuel = 0;
    var time = 0;

    //increase depth here
    while (!bottomReached) {
        bottomReached = true;
        var result = deepeningSearch(start, goal, 0, depth, currentFuel, fuelLimit, planets, time);
        if (result != null) {
            return result;
        }
        depth += 1;
        console.log("Increasing depth to " + depth);
    }

    return null;
}

//Search each iteration here
function deepeningSearch(currentPlanet, goal, currentDepth, maxDepth, currentFuel, fuelLimit, planets, time) {
    if (currentFuel <= fuelLimit) {
        console.log("Visiting Planet " + currentPlanet);
        nodeVisited(currentPlanet);
        setString(currentFuel,time,currentPlanet);
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
            console.log("this planet time: " + planets[currentPlanet].time);
            console.log("Current Fuel usage: " + currentFuel + ", Time: " + time);
            var result = deepeningSearch(planets[currentPlanet].linkedPlanets[i].planetNumber, goal, currentDepth + 1, maxDepth, currentFuel, fuelLimit, planets, time);
            if (result != null) {
                // We've found the goal node while going down that child
                return result;
            }
        }
        resetEle();
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

function nodeVisited(currentNode) {
    setTimeout(()=>{
        var idCircle = mapEle + "-circle" + currentNode;
        console.log(idCircle);},delay);
    //document.getElementById(idCircle).style.backgroundColor = "yellow";
    /*$.get(mapHtml, null, function(){
        $(idCircle).css('background-color', 'yellow');
    });*/
    return null;
}

function setString(currentFuel,time,currentPlanet){
    fuelEle.innerHTML = 'Fuel : '+currentFuel;
    timeEle.innerHTML = 'Time : '+ time;
    if (currentPlanet > 0) pathEle.innerHTML += ' > '+currentPlanet;
    else pathEle.innerHTML += currentPlanet;
}

function arrowPassed(){
    return null;
}

function resetColor() {
    return null;
}

/*function sleep(currentPlanet, goal, currentDepth, maxDepth, currentFuel, fuelLimit, planets, time, i){
    setTimeout(() => {
        currentFuel += planets[currentPlanet].linkedPlanets[i].useFuel;
        time += planets[currentPlanet].time;
        console.log("this planet time: "+planets[currentPlanet].time);
        console.log("Current Fuel usage: "+currentFuel+", Time: "+time);
        var result = deepeningSearch(currentPlanet, goal, currentDepth + 1, maxDepth, currentFuel, fuelLimit, planets, time);
        return result;
      }, delay);
    
}*/