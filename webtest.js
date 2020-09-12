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
            useFuel: 2,
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
    window.resetDelay = 500;
    window.strFuel = "";
    window.strTime = "";
    window.strPath = "";
    window.show = [];
    window.fuelEle = document.getElementById("fuel");
    window.timeEle = document.getElementById("time");
    window.pathEle = document.getElementById("path");
    window.searchEle = document.getElementById('search');
    window.delayEle = document.getElementById('delay');
    window.exctimeEle = document.getElementById('exctime');
    window.mapHtml = "";
    window.bottomReached = false;
    window.showMap = "m1";
    window.goal = 6;
    window.mapPlanets = new Map();
    window.goalPlanet=null;
    window.startPlanet=null;

    init();
}

function init(){
    reset();
    randommap();
}


function reset(){
    bottomReached = false;
    resetEle()
    strPath = "";
    exctimeEle.innerHTML = "Execute time : ";
    searchEle.selectedIndex = "1";
    delayEle.selectedIndex = "1";
    show = [];
    
    mapPlanets = new Map();
    goalPlanet=null;
    startPlanet=null;
}

function resetEle()
{
    fuelEle.innerHTML = "Used Fuel : ";
    timeEle.innerHTML = "Traveled Time (Cost) : ";
    pathEle.innerHTML = "Path : ";
    
    resetDelay = 500;

    for(var i=0;i<=goal;i++){
        var idCircle = showMap + "-circle" + i;
        document.getElementById(idCircle).style.backgroundColor = "white";      
    }
    for(var i=0;i<strPath.length;i++){
      var idArrow = showMap + '-arrow-';
      if(strPath[i]=='>')
      {
        var firstPlanet = strPath[i-3];
        console.log('Reset firstPlanet' +firstPlanet);
        if(strPath[i+2]<firstPlanet){
          idArrow+=strPath[i+2]+'-'+firstPlanet;
        }
        else idArrow+=firstPlanet+'-'+strPath[i+2];
        
        console.log('reset Arrow ID : '+idArrow);
        var arrow = document.getElementById(idArrow);
        if (arrow != null) arrow.style.background = "black";
      }
    }

    strPath = "";
    return null;
}

function randommap() {
    document.getElementById(showMap).style.visibility = "hidden";
    var map = Math.floor(Math.random() * 5) + 1;
    var x = "";
    if(map == 1){
        thisMap = mapstruct[0];
        x = "Map Pakbung";
        showMap = "m1";
    }
    if (map == 2) {
        thisMap = mapstruct[1];
        x = "Map Nice";
        showMap = "m2";
    }
    if (map == 3) {
        thisMap = mapstruct[2];
        x = "Map Namob";
        showMap = "m3";
    }
    if (map == 4) {
        thisMap = mapstruct[3];
        x = "Map Aon";
        showMap = "m4";
    }
    if (map == 5) {
        thisMap = mapstruct[4];
        x = "Map Little";
        showMap = "m5";
    }
    document.getElementById('map').textContent = x
    document.getElementById(showMap).style.visibility = "visible"
}

function start() {
    if( bottomReached == true) 
    {
        alert("Please reset before start!");
        return null;
    }

    if( goalPlanet != null){
        alert("Please reset before start!");
        return null;
    } 
    var strSearch = searchEle.options[searchEle.selectedIndex].value;
    var strDelay = delayEle.options[delayEle.selectedIndex].value;
    if (strDelay == '1') delay = 6000;
    else if (strDelay == '2') delay = 3000;
    else if (strDelay == '3') delay = 2000;
    var start = Date.now();
    var executionTime = Date.now();
    if (strSearch == 'iterative') {
        //iterativeDeepeningSearch(thisMap);
        executionTime = Date.now() - start;
    } else if (strSearch == 'uniform') {
        uniformCost(thisMap);
        executionTime = Date.now() - start;
        nodeVisited();
    }
    setTimeCPU(executionTime);
}

function nodeVisited() {
  var i = 0;
  var currentFuel = 0;
  var time = 0;
  function myLoop() { //  create a loop function
    setTimeout(function() {
        if(i%2==0)
        {
          var thisShow = show[i/2];
          for (var c = 0; c < thisShow.length; c++){
            if(c == 0){
              strPath += c;
              var idCircle = showMap + "-circle" + c;
              document.getElementById(idCircle).style.backgroundColor = "blue";
            }
            else if(thisShow[c] == '>')
            {
              if(c!=4) var firstPlanet = strPath.charAt(strPath.length-1);
              else var firstPlanet = '0';
              console.log('firstPlanet : '+firstPlanet);
              strPath += ' -> ' + thisShow[c+2];
              var idCircle = showMap + "-circle" + thisShow[c+2];
              document.getElementById(idCircle).style.backgroundColor = "blue";
              //----------Arrow interface here------------
              var idArrow = showMap + "-arrow-";
              if(thisShow[c+2]<firstPlanet){
                idArrow+=thisShow[c+2]+'-'+firstPlanet;
              }
              else idArrow+=firstPlanet+'-'+thisShow[c+2];
              console.log(idArrow);
              var arrow = document.getElementById(idArrow);
              if(arrow != null) arrow.style.backgroundColor="yellow";
              time += parseInt(thisShow[c+4]);
              currentFuel += parseInt(thisShow[c+6]);
              c += 6;
            }
          }
          resetDelay = delay;
          setString(currentFuel,time);
        }
        else{
          resetEle();
          time = 0;
          currentFuel= 0;
        }
        i++; //  increment the counter
        if (i < show.length*2-1) {
            myLoop(); //  ..  again which will trigger another 
        } //  ..  setTimeout()

    }, resetDelay)
  }

  myLoop();
    /*$.get(mapHtml, null, function(){
        $(idCircle).css('background-color', 'yellow');
    });*/

  return null;
}

function setTimeCPU(executionTime){
    exctimeEle.innerHTML += executionTime + ' milliseconds';
}

function setString(currentFuel,time){
    fuelEle.innerHTML = 'Used Fuel : '+ currentFuel;
    timeEle.innerHTML = 'Traveled Time (Cost) : '+ time;
    pathEle.innerHTML = 'Path : '+ strPath;
    return null;
}



/*--------------- iterative deepening search is here --------------*/

function iterativeDeepeningSearch(mapUse) {
    var depth = 1;
    const start = mapUse.startPlanet;
    goal = mapUse.endPlanet;
    const fuelLimit = mapUse.fuelLimit;
    const planets = mapUse.Planets;
    var currentFuel = 0;
    var time = 0;

    //increase depth here
    while (!bottomReached) {
        bottomReached = true;
        var result = deepeningSearch(start, goal, 0, depth, currentFuel, fuelLimit, planets, time);
        if (result != null) {
            console.log(strPath);
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
        //-----nodeVisited(currentPlanet);
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
        //---resetEle(goal);
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




/*----------------------- Uniform Cost Search here! ------------------------------*/
class searchNode {
    constructor(action, state, parent) {
        this.action = action;
        this.state = state;
        this.parent = parent;
    }

    // Returns a list of pairs corresponding to
    // the path starting at the top (root) of the tree.
    path() {
        if (this.parent === null) {
            return [this.state, this.action];
        } else {
            return this.parent.path() + " -> " + [this.state, this.action.time,this.action.useFuel];
        }
    }

    pathCost() {
        if (this.parent === null) {
            return 0;
        } else {
            return this.parent.pathCost() + this.action.time;
        }
    }
    
    usedFuel(){
        if (this.parent===null){
            return 0;
        } else{
            return this.parent.usedFuel()+this.action.useFuel;
        }
    }

    // Returns true if the state occurs anywhere in the path
    // from the root to the node.
    inPath(findState) {
        if (findState == this.state) {
            return true;
        } else if (this.parent == null) {
            return false;
        } else {
            return this.parent.inPath(findState);
        }
    }
}

function uniformCost(mapUse) {
    startPlanet = mapUse.startPlanet;
    goalPlanet = mapUse.endPlanet;
    console.log(mapUse.endPlanet)
    const fuelLimit = mapUse.fuelLimit;
    for (let i = 0; i < mapUse.Planets.length; i++) {
        mapPlanets.set(i, mapUse.Planets[i].linkedPlanets);
    }
    // console.log(mapPlanets)
    if (goalTest(startPlanet)) {
        console.log("Initial state is the goal state.");
        return [startPlanet];
    }
    // It is a Priority Queue
    // Actions other than shift() and enqueue() are prohibited.
    let priorityQueue = [];
    priorityQueue.enqueue = function (item) {
        let added = false;
        for (let i = 0; i < priorityQueue.length; i++) {
            console.log("ITEM: ", priorityQueue[i].state);
            console.log("COST: ", priorityQueue[i].pathCost());
            if (item.pathCost() < priorityQueue[i].pathCost()) {
                priorityQueue.splice(i, 0, item);
                added = true;
                return;
            }
        }

        if (!added) {
            priorityQueue.push(item);
        }
    };
    // Add the startPlanet to the Priority Queue.
    priorityQueue.enqueue(new searchNode(null, startPlanet, null));
    let expanded = [];
    let shortestPath = {state: null, pathCost: null, path: null,usedFuel:null};
    while(priorityQueue.length !== 0){
        console.log("priorityQueue: " + priorityQueue.map(function(planet){
            return planet.state;
        }));

        // Pop an element out of the queue to expand.
        let parent = priorityQueue.shift();
        console.log("Popped: ", parent.state);
        let newChildStates = [];

        // Child states of the current node
        let actionsList = actions(parent.state);
        console.log("Found " + actionsList.length + " successors of " + parent.state + " : "
            + actionsList.map(function(item){
                return item.planetNumber;
            }));

        
        // Add the node to the expanded list to prevent re-expansion.
        expanded.push(parent.state);
        console.log("Expanded list: ", expanded);
        console.log("\n");

        // Create successors of each node and push them onto the fringe.
        for (let i = 0; i < actionsList.length; i++) {
            let newS = successor(parent.state, actionsList[i]);
            let newN = new searchNode(actionsList[i], newS, parent);
            console.log(actionsList[i],parent,newN);
            
            // If the goal is found,
            // returns the path to the goal.
            if (goalTest(newS)) {
                console.log("FOUND GOAL!", newS, " with path cost ", newN.pathCost());
                console.log("Continuing search to find optimal path.");
                if ((newN.pathCost() < shortestPath.pathCost || shortestPath.pathCost === null)&&newN.usedFuel()<=fuelLimit) {
                    shortestPath.pathCost = newN.pathCost();
                    shortestPath.path = newN.path();
                    shortestPath.state = newS;
                    shortestPath.usedFuel=newN.usedFuel();
                }
            }

            // If the successor is already expanded,
            // don't add it to the priorityQueue.
            else if (expanded.indexOf(newS) !== -1) {
                console.log("Successor " + newS + " of " + parent.state + " already expanded.");
                console.log("Not adding " + newS + " to the priorityQueue.");
                console.log("\n");
            }

            // Push new successors to the priorityQueue.
            else {
                console.log("Discovered " + newN.state + " with step cost "
                    + actionsList[i].time + " from " + parent.state);
                console.log("Pushing to priorityQueue: " + newS);
                newChildStates.push(newS);
                priorityQueue.enqueue(newN);
                console.log("Path: ", newN.path());
                show.push(newN.path());
                console.log("Current priorityQueue: " + priorityQueue.map(function(planet){
                        return planet.state;
                    }));
                console.log("\n");
            }
        }
    }
    if (shortestPath.pathCost === null) {
        console.log("Couldn't find path.") 
    } else {
        show.push(shortestPath.path);
        console.log(shortestPath.path + " with path cost of time " + shortestPath.pathCost +" and used fuel are " +shortestPath.usedFuel );
    }
}  
function goalTest(state) {
    return state === goalPlanet;
}

function actions(state) {
    // Returns an array of objects
    // [{ useFuel: int, time: integer,planetNumber:int }, ... ]
    return mapPlanets.get(state);
}

function successor(state, action) {
    return action.planetNumber;
}

