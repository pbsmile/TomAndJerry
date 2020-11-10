document.addEventListener('DOMContentLoaded',initial);
000000000000000000000000000000000000000000000000000000000000000000000000000000

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
    window.strFuel = 0;
    window.strTime = 0;

    window.strPath = "";
    window.strPath1 = "";

    window.finalPath = "";
    
    window.show = [];
    window.show1 = [];

    window.fuelEle = document.getElementById("fuel");
    window.timeEle = document.getElementById("time");
    window.pathEle = document.getElementById("path");
    window.fuelEle1 = document.getElementById("fuel-g");
    window.timeEle1 = document.getElementById("time-g");
    window.pathEle1 = document.getElementById("path-g");
    
    window.fuelEle0 = document.getElementById("fuel-s");
    window.timeEle0 = document.getElementById("time-s");
    window.pathEle0 = document.getElementById("path-s");
    
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

    window.result1 = document.getElementById("result-1");
    window.result2 = document.getElementById("result-2");

    init();
}

function init(){
    reset();
    randommap();
}


function reset(){
    bottomReached = false;
    exctimeEle.innerHTML = "Execute time : ";
    resetEle();
    resetElebi();
    strPath = "";
    strPath1 = "";
    searchEle.selectedIndex = "1";
    delayEle.selectedIndex = "1";
    show = [];
    show1 = [];
    result2.style.visibility = "hidden";
    result1.style.visibility = "visible";
    fuelEle = document.getElementById("fuel");
    timeEle = document.getElementById("time");
    pathEle = document.getElementById("path");
    
    mapPlanets = new Map();
    goalPlanet=null;
    startPlanet=null;
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
    if (strDelay == '1') delay = 3000;
    else if (strDelay == '2') delay = 2000;
    else if (strDelay == '3') delay = 1000;
    var start = Date.now();
    var executionTime = Date.now();
    if (strSearch == 'uniform') {
        uniformCost(thisMap);
        executionTime = Date.now() - start;
        nodeVisited();
    }
    else if (strSearch == 'bidirectional') {
      result1.style.visibility = "hidden";
      result2.style.visibility = "visible";
      exctimeEle = document.getElementById("exctime-bi");
      fuelEle = document.getElementById("fuel-bi");
      timeEle = document.getElementById("time-bi");
      pathEle = document.getElementById("path-bi");
      var start = Date.now();
      bidirectional(thisMap);
      executionTime = Date.now() - start;
      nodeVisited();
      nodeVisitedbi();
      //pathEle.innerHTML += shortestPath.path;
    }
    else{
      aStarSearch(thisMap);
      executionTime = Date.now() - start;
      nodeVisited();
    }
  exctimeEle.innerHTML += executionTime + ' milliseconds';
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
          if(thisShow == null){
            thisShow = show[show.length-1];
          }
          console.log(thisShow);
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
              var secondPlanet = thisShow[c+2];
              var num = c;
                if(thisShow[c+3]>='0' && thisShow[c+3]<='9'){
                  secondPlanet = thisShow[c+2] + thisShow[c+3];
                  num++;
                }
                if(thisShow[c-8]>='0' && thisShow[c-8]<='9'){
                  firstPlanet = strPath.charAt(strPath.length-2) + strPath.charAt(strPath.length-1);
                }
              time += parseInt(thisShow[num+4]);
              strTime += parseInt(thisShow[num+4]);
              strFuel += parseInt(thisShow[num+6]);
              currentFuel += parseInt(thisShow[num+6]);
              strPath += ' -> ' + secondPlanet;
              var idCircle = showMap + "-circle" + secondPlanet;
              document.getElementById(idCircle).style.backgroundColor = "blue";
              //----------Arrow interface here------------
              var idArrow = showMap + "-arrow-";
              if(parseInt(secondPlanet)<parseInt(firstPlanet)){
                idArrow+=secondPlanet+'-'+firstPlanet;
              }
              else idArrow+=firstPlanet+'-'+secondPlanet;
              var arrow = document.getElementById(idArrow);
              if(arrow != null) arrow.style.backgroundColor="yellow";
              c += 6;
            }
            console.log('start : ',time,currentFuel,firstPlanet,secondPlanet,idArrow);
          }
          //if (strPath.charAt(strPath.length-1) ==strPath1.charAt(strPath.length-1)) i = show.length*2;
          resetDelay = delay;
          if(show1.length>0) setStringBiStart(currentFuel,time);
          else setString(currentFuel,time);
        }
        else{
          resetEle();
          time = 0;
          currentFuel= 0;
        }
        i++; //  increment the counter
        var count = show.length;
        if(show1.length > show.length) count = show1.length;
        if (i < count*2-1) {
            myLoop(); //  ..  again which will trigger another 
        } //  ..  setTimeout()

    }, resetDelay)
  }

  myLoop();

  return null;
}

function nodeVisitedbi(){
  var i = 0;
  var currentFuel = 0;
  var time = 0;
  function myLoop() { //  create a loop function
    setTimeout(function() {
        if(i%2==0)
        {
          var thisShow = show1[i/2];
          if(thisShow == null){
            thisShow = show1[show1.length-1];
          }
          console.log(thisShow);
          for (var c = 0; c < thisShow.length; c++){
            if(c == 0){
              strPath1 += goal;
              var idCircle = showMap + "-circle" + goal;
              document.getElementById(idCircle).style.backgroundColor = "blue";
            }
            else if(thisShow[c] == '>')
            {
              if(goal>9 && c!=5)
              {
                if(thisShow[1]>='0' && thisShow[1]<='9' && c<6) var firstPlanet = strPath1.charAt(strPath1.length-2) + strPath1.charAt(strPath1.length-1);
                else var firstPlanet = strPath1.charAt(strPath1.length-1);
              } 
              else if(goal<10 && c!=4) var firstPlanet = strPath1.charAt(strPath1.length-1);
              else {
                if(goal<10 && thisShow[0] != goal) firstPlanet = thisShow[0];
                var firstPlanet = goal;
              }
              var secondPlanet = thisShow[c+2];
              var num = c;
                if(thisShow[c+3]>='0' && thisShow[c+3]<='9'){
                  secondPlanet = thisShow[c+2] + thisShow[c+3];
                  num++;
                }
                if(thisShow[c-8]>='0' && thisShow[c-8]<='9'){
                  firstPlanet = strPath1.charAt(strPath1.length-2) + strPath1.charAt(strPath1.length-1);
                }
              time += parseInt(thisShow[num+4]);
              currentFuel += parseInt(thisShow[num+6]);
              strTime += parseInt(thisShow[num+4]);
              strFuel += parseInt(thisShow[num+6]);
              strPath1 += ' -> ' + secondPlanet;
              var idCircle = showMap + "-circle" + secondPlanet;
              document.getElementById(idCircle).style.backgroundColor = "blue";
              //----------Arrow interface here------------
              var idArrow = showMap + "-arrow-";
              if(parseInt(secondPlanet)<parseInt(firstPlanet)){
                idArrow+=secondPlanet+'-'+firstPlanet;
              }
              else idArrow+=firstPlanet+'-'+secondPlanet;
              var arrow = document.getElementById(idArrow);
              if(arrow != null) arrow.style.backgroundColor="yellow";
              c += 6;
            }
            console.log('goal : ',time,currentFuel,firstPlanet,secondPlanet,idArrow);
          }
          //if (thisShow == checkfinalRight) i = show.length*2;
          resetDelay = delay;
          setStringBiGoal(currentFuel,time);
          setStringBi();
        }
        else{
          resetElebi();
          time = 0;
          currentFuel= 0;
        }
        i++; //  increment the counter
        var count = show1.length;
        if(show.length > show1.length) count = show.length;
        if (i < count*2-1) {
            myLoop(); //  ..  again which will trigger another 
        } //  ..  setTimeout()

    }, resetDelay)
  }

  myLoop();

  return null;
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
        var secondPlanet = strPath[i+2];
          if(strPath[i-4]!=' ' && i>=4) firstPlanet = strPath[i-4]+strPath[i-3];
          if(strPath[i+3]!=' ' && strPath.length>i+3) secondPlanet = strPath[i+2]+strPath[i+3];
        if(parseInt(secondPlanet)<parseInt(firstPlanet)){
          idArrow+=secondPlanet+'-'+firstPlanet;
        }
        else idArrow+=firstPlanet+'-'+secondPlanet;
        var arrow = document.getElementById(idArrow);
        if (arrow != null) arrow.style.background = "black";
      }
    }

    strPath = "";
    return null;
}

function resetElebi()
{
    fuelEle0.innerHTML = "Used Fuel : ";
    timeEle0.innerHTML = "Traveled Time (Cost) : ";
    pathEle0.innerHTML = "Path : ";
    fuelEle1.innerHTML = "Used Fuel : ";
    timeEle1.innerHTML = "Traveled Time (Cost) : ";
    pathEle1.innerHTML = "Path : ";
    strTime = 0;
    strFuel = 0;
    for(var i=0;i<strPath1.length;i++){
      var idArrow = showMap + '-arrow-';
      if(strPath1[i]=='>')
      {
        var firstPlanet = strPath1[i-3];
        var secondPlanet = strPath1[i+2];
          if(strPath1[i-4]!=' ' && i>=4) firstPlanet = strPath1[i-4]+strPath1[i-3];
          if(strPath1[i+3]!=' ' && strPath1.length>i+3) secondPlanet = strPath1[i+2]+strPath1[i+3];
        if(parseInt(secondPlanet)<parseInt(firstPlanet)){
          idArrow+=secondPlanet+'-'+firstPlanet;
        }
        else idArrow+=firstPlanet+'-'+secondPlanet;
        var arrow = document.getElementById(idArrow);
        if (arrow != null) arrow.style.background = "black";
      }
    }

    strPath1 = "";
    return null;
}


function setStringBi(){
    fuelEle.innerHTML = 'Used Fuel : '+ strFuel;
    timeEle.innerHTML = 'Traveled Time (Cost) : '+ strTime;
    return null;
}

function setStringBiStart(currentFuel,time){
  fuelEle0.innerHTML = 'Used Fuel : '+ currentFuel;
  timeEle0.innerHTML = 'Traveled Time (Cost) : '+ time;
  pathEle0.innerHTML = 'Path : '+ strPath;
  return null;
}

function setStringBiGoal(currentFuel,time){
    fuelEle1.innerHTML = 'Used Fuel : '+ currentFuel;
    timeEle1.innerHTML = 'Traveled Time (Cost) : '+ time;
    pathEle1.innerHTML = 'Path : '+ strPath1;
    return null;
}

function setString(currentFuel,time){
    fuelEle.innerHTML = 'Used Fuel : '+ currentFuel;
    timeEle.innerHTML = 'Traveled Time (Cost) : '+ time;
    pathEle.innerHTML = 'Path : '+ strPath;
    return null;
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
    goal = goalPlanet;
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
                show.push(newN.path());
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




/*------------------------------------bidirectional uniform cost search here ------------------------------------- */
class searchNodeBi {
  constructor(action, state, parent) {
      this.action = action;
      this.state = state;
      this.parent = parent;
  }

  // Returns a list of pairs corresponding to
  // the path starting at the top (root) of the tree.
  path(position) {
      if(position==='left'){
          if (this.parent === null) {
              return [this.state];
          } else {
              return (
                  this.parent.path('left') +
                  " -> " +
                  [this.state, this.action.time, this.action.useFuel]
              );
          }
      }
      else if(position==='right'){
          if (this.parent === null) {
              return [this.state,this.action.time];
          } else {
              return (
                  [this.state, this.action.time, this.action.useFuel]+
                  " -> " +
                  this.parent.path('right')
                  
              );
          }
      }
     
  }

  pathCost() {
      if (this.parent === null) {
          return this.action?this.action.time:0;
      } else {
          return this.parent.pathCost() + this.action.time;
      }
  }

  usedFuel() {
      if (this.parent === null) {
          return 0;
      } else {
          return this.parent.usedFuel() + this.action.useFuel;
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

function bidirectional(map) {
  startPlanet = map.startPlanet;
  goalPlanet = map.endPlanet;
  goal = goalPlanet;
  console.log(map.endPlanet);
  const fuelLimit = map.fuelLimit;
  for (let i = 0; i < map.Planets.length; i++) {
      mapPlanets.set(i, map.Planets[i].linkedPlanets);
  }
  // console.log(mapPlanets)
  if (goalTestLeft(startPlanet)) {
      console.log("Initial state is the goal state.");
      return [startPlanet];
  }
  if (goalTestRight(goalPlanet)) {
      console.log("Initial state is the goal state.");
      return [goalPlanet];
  }
  // It is a Priority Queue
  // Actions other than shift() and enqueue() are prohibited.
  let priorityQueueA = [];
  let priorityQueueB = [];
  priorityQueueA.enqueue = function (item) {
      let added = false;
      for (let i = 0; i < priorityQueueA.length; i++) {
          console.log("ITEM: ", priorityQueueA[i].state);
          console.log("COST: ", priorityQueueA[i].pathCost());
          if (item.pathCost() < priorityQueueA[i].pathCost()) {
              priorityQueueA.splice(i, 0, item);
              added = true;
              return;
          }
      }
      if (!added) {
        priorityQueueA.push(item);
    }
};
priorityQueueB.enqueue = function (item) {
    let added = false;
    for (let i = 0; i < priorityQueueB.length; i++) {
        console.log("ITEM: ", priorityQueueB[i].state);
        console.log("COST: ", priorityQueueB[i].pathCost());
        if (item.pathCost() < priorityQueueB[i].pathCost()) {
            priorityQueueB.splice(i, 0, item);
            added = true;
            return;
        }
    }
    if (!added) {
        priorityQueueB.push(item);
    }
};
// Add the startPlanet to the Priority Queue.
priorityQueueA.enqueue(new searchNodeBi({time:map.Planets[0].time}, startPlanet, null));
priorityQueueB.enqueue(new searchNodeBi({ time:map.Planets[map.Planets.length-1].time}, goalPlanet,null ));
let expandedA = [];
let expandedB = [];
let allPathA =[];
let allPathB = [];
let shortestPath = {
    state: null,
    pathCost: null,
    path: null,
    usedFuel: null,
    leftPath:null,
    rightPath:null
};
while (priorityQueueA.length !== 0 && priorityQueueB.length !== 0) {
    // console.log("priorityQueue: " + priorityQueue.map(function(planet){
    //     return planet.state;
    // }));
    // Pop an element out of the queue to expand.
    let parentA = priorityQueueA.shift();
    let parentB = priorityQueueB.shift();
    console.log("Popped A: ", parentA.state);
    console.log("Popped B: ", parentB.state);
    let newChildStatesA = [];
    let newChildStatesB = [];
    // Child states of the current node
    let actionsListA = actionsBi(parentA.state);
    console.log(
        "Found " +
        actionsListA.length +
        " successors of " +
        parentA.state +
        " : " +
        actionsListA.map(function (item) {
            return item.planetNumber;
        })
    );
    let actionsListB = actionsBi(parentB.state);
    console.log(
        "Found " +
        actionsListB.length +
        " successors of " +
        parentB.state +
        " : " +
        actionsListB.map(function (item) {
            return item.planetNumber;
        })
    );
    // Add the node to the expanded list to prevent re-expansion.
    expandedA.push(parentA.state);
    expandedB.push(parentB.state);
    allPathA.push(parentA);
    allPathB.push(parentB);
    console.log("Expanded A list: ", expandedA);
    console.log("Expanded B list: ", expandedB);
    // Create successors of each node and push them onto the priorityQueue.
    for (let i = 0; i < actionsListA.length; i++) {
        let newS = successor(parentA.state, actionsListA[i]);
        let newN = new searchNodeBi(actionsListA[i], newS, parentA);
        //console.log(actionsListA[i], parentA, newN);
        // If the goal is found,
        // returns the path to the goal.
        if ((goalTestLeft(newS) || expandedB.indexOf(newS) !== -1)) {
            if(expandedB.indexOf(newS)!==-1){
                let found = allPathB.find(item=>item.state===newS);
                console.log("FoundA",found);
                //found.action.time=0;
                //newN=newN.parent;
                if(found){
                    console.log("FOUND GOAL!", newS, " with path cost ", newN.pathCost()+found.pathCost());
                    console.log("Path is "+newN.path('left')+" -> "+found.path('right'));
                    show.push(newN.path('left'));
                    show1.push(found.path('left'));
                    console.log("Continuing search to find optimal path.");
                    if ((newN.pathCost()+found.pathCost()-found.action.time< shortestPath.pathCost ||shortestPath.pathCost === null) &&newN.usedFuel()+found.usedFuel()<= fuelLimit) {
                        shortestPath.pathCost = newN.pathCost()+found.pathCost()-found.action.time;
                        shortestPath.path = newN.path('left')+" -> "+found.path('right');
                        shortestPath.state = newS;
                        shortestPath.usedFuel = newN.usedFuel()+found.usedFuel();
                        shortestPath.leftPath=newN.path('left');
                        shortestPath.rightPath=found.path('left');
                    }
                }
            }
            // console.log("Crash",priorityQueueA[priorityQueueA.length-1]);
            // console.log("FOUND GOAL!", newS, " with path cost ", newN.pathCost()+priorityQueueA[priorityQueueA.length-1].pathCost());
            // console.log("Continuing search to find optimal path.");
            else {
                console.log("FOUND GOAL!", newS, " with path cost ", newN.pathCost());
                console.log("Path is "+newN.path('left'));
                show.push(newN.path('left'));
                console.log("Continuing search to find optimal path.");
                if ((newN.pathCost()< shortestPath.pathCost ||shortestPath.pathCost === null) &&newN.usedFuel()<= fuelLimit) {
                    shortestPath.pathCost = newN.pathCost();
                    shortestPath.path = newN.path('left');
                    shortestPath.state = newS;
                    shortestPath.usedFuel = newN.usedFuel();
                }
                
            }
        }
        // If the successor is already expanded,
        // don't add it to the priorityQueue.
        else if (expandedA.indexOf(newS) !== -1) {
            console.log(
                "Successor " + newS + " of " + parentA.state + " already expanded."
            );
            console.log("Not adding " + newS + " to the priorityQueueA.");
            console.log("\n");
        }
        // Push new successors to the priorityQueue.
        else {
            console.log(
                "Discovered " +
                newN.state +
                " with step cost " +
                actionsListA[i].time +
                " from " +
                parentA.state
            );
            console.log("Pushing to priorityQueue: " + newS);
            newChildStatesA.push(newS);
            priorityQueueA.enqueue(newN);
            console.log("Path: ", newN.path('left'));
            show.push(newN.path('left'));
            console.log(
                "Current priorityQueueA: " +
                priorityQueueA.map(function (planet) {
                    return planet.state;
                })
            );
            console.log("\n");
        }
    }
    for (let i = 0; i < actionsListB.length; i++) {
        let newS = successor(parentB.state, actionsListB[i]);
        let newN = new searchNodeBi(actionsListB[i], newS, parentB);
         //console.log(actionsListB[i], parentB, newN);
        // If the goal is found,
        // returns the path to the goal.
        if (goalTestRight(newS)|| expandedA.indexOf(newS) !== -1 ) {
            if(expandedA.indexOf(newS)!==-1){
                let found = allPathA.find(item=>item.state===newS);
                // found.action.time=0;
                // console.log(allPathA);
                //found=found.parent;
                //newN=newN.parent;
                console.log("FoundB",found);
                console.log("newN",newN);
                if(found){
                    console.log("FOUND GOAL!", newS, " with path cost ", newN.pathCost()+found.pathCost()-found.action.time,"Shortest",shortestPath.pathCost);
                    console.log("Use fuel:",newN.usedFuel()+found.usedFuel(),found.usedFuel(),newN.usedFuel(),"limit",fuelLimit);
                    console.log("Path is "+found.path('left')+" -> "+newN.path('right'))
                    show.push(found.path('left'));
                    show1.push(newN.path('left'));
                    console.log("Continuing search to find optimal path.");
                    if ((newN.pathCost()+found.pathCost()-found.action.time< shortestPath.pathCost ||shortestPath.pathCost === null) &&newN.usedFuel()+found.usedFuel()<= fuelLimit) {
                        shortestPath.pathCost = newN.pathCost()+found.pathCost()-found.action.time;
                        shortestPath.path = found.path('left')+" -> "+newN.path('right');
                        shortestPath.state = newS;
                        shortestPath.usedFuel = newN.usedFuel()+found.usedFuel();
                        shortestPath.leftPath = found.path('left');
                        shortestPath.rightPath = newN.path('left');
                    }
                }
            }
            else {
                console.log("FOUND GOAL!", newS, " with path cost ", newN.pathCost());
                console.log("Path is "+newN.path('right'));
                show1.push(newN.path('right'));
                console.log("Continuing search to find optimal path.");
                if ((newN.pathCost()< shortestPath.pathCost ||shortestPath.pathCost === null) &&newN.usedFuel()<= fuelLimit) {
                    shortestPath.pathCost = newN.pathCost();
                    shortestPath.path = newN.path('right');
                    shortestPath.state = newS;
                    shortestPath.usedFuel = newN.usedFuel();
                }
              
            }
        }
        // If the successor is already expanded,
        // don't add it to the priorityQueue.
        else if (expandedB.indexOf(newS) !== -1) {
            console.log(
                "SuccessorB " + newS + " of " + parentB.state + " already expanded."
            );
            console.log("Not adding " + newS + " to the priorityQueueB.");
            console.log("\n");
        }
        // Push new successors to the priorityQueue.
        else {
            console.log(
                "Discovered " +
                newN.state +
                " with step cost " +
                actionsListB[i].time +
                " from " +
                parentA.state
            );
            console.log("Pushing to priorityQueue: " + newS);
            newChildStatesB.push(newS);
            priorityQueueB.enqueue(newN);
            console.log("Path: ", newN.path('left'));
            show1.push(newN.path('left'));
            console.log(
                "Current priorityQueueB: " +
                priorityQueueB.map(function (planet) {
                    return planet.state;
                })
            );
            console.log("\n");
        }
    }
}
if (shortestPath.pathCost === null) {
    console.log("Couldn't find path.");
} else {
    console.log(
        shortestPath.path +
        " with path cost of time " +
        shortestPath.pathCost +
        " and used fuel are " +
        shortestPath.usedFuel
    );
    finalPath = shortestPath.path;
    show.push(shortestPath.leftPath);
    show1.push(shortestPath.rightPath);
    console.log("left path is "+shortestPath.leftPath);
    console.log("right path is "+shortestPath.rightPath);
}
};
function goalTestLeft(state) {
return state === goalPlanet;
}
function goalTestRight(state) {
return state === startPlanet;
}
function actionsBi(state) {
// Returns an array of objects
// [{ useFuel: int, time: integer,planetNumber:int }, ... ]
return mapPlanets.get(state);
}

function aStarSearch(mapUse) {
  // The aStartQueue is a Priority Queue
  // Actions other than shift() and enqueue() are prohibited.
  startPlanet = mapUse.startPlanet;
  goalPlanet = mapUse.endPlanet;
  goal = goalPlanet;
  const fuelLimit = mapUse.fuelLimit;
  for (let i = 0; i < mapUse.Planets.length; i++) {
      mapPlanets.set(i, mapUse.Planets[i].linkedPlanets);
  }
  let aStartQueue = [];
    if (goalTest(startPlanet)) {
        console.log("Initial state is the goal state.");
        return [startPlanet];
    }
    aStartQueue.enqueue = function(item) {
        let added = false;

        let heuristic = null;
        // Finding heuristic value //On Optional 
        for (let i = 0; i < mapUse.Planets.length; i++) {
            if (mapUse.Planets[i].planetNumber === item.state) {
                heuristic = mapUse.Planets[i].time;
            }
        }
        console.log(heuristic, item)

        function findHeuristic(item) {
            for (let i = 0; i < mapUse.Planets.length; i++) {
                if (mapUse.Planets[i].planetNumber === item.state) {
                    return mapUse.Planets[i].time;
                }
            }
        }

        for (let i = 0; i < aStartQueue.length; i++) {
            console.log("Iteration in aStartQueue: ", aStartQueue[i].state);
            console.log("COST: ", aStartQueue[i].pathCost(), "HEURISTIC COST: ", findHeuristic(aStartQueue[i]), "TOTAL COST: ", aStartQueue[i].pathCost() + findHeuristic(aStartQueue[i]));
            if ((item.pathCost() + heuristic < aStartQueue[i].pathCost() + findHeuristic(aStartQueue[i]))&&item.usedFuel()<=fuelLimit&&aStartQueue[i].usedFuel()<=fuelLimit) {
                aStartQueue.splice(i, 0, item);
                added = true;
                return;
            }
        }

        if (!added) {
            aStartQueue.push(item);
        }
    };

    // Add the initialState to the aStartQueue.
    aStartQueue.enqueue(new searchNode(null, startPlanet, null));
    let expanded = [];
    let shortestPath = {state: null, pathCost: null, path: null,usedFuel:null};

    while (aStartQueue.length !== 0) {
        console.log("aStartQueue: " + aStartQueue.map(function(city){
                return city.state;
            }));

        // Pop an element out of the queue to expand.
        let parent = aStartQueue.shift();
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

        // Create successors of each node and push them onto the aStartQueue.
        for (let i = 0; i < actionsList.length; i++) {
            let newS = successor(parent.state, actionsList[i]);
            let newN = new searchNode(actionsList[i], newS, parent);

            // If the goal is found,
            // returns the path to the goal.
            if (goalTest(newS)) {
                console.log("FOUND GOAL!", newS, " with path cost ", newN.pathCost());
                console.log("used fuel"+ newN.usedFuel(),"Limit is ",fuelLimit)
                console.log("path:",newN.path())
                console.log("Continuing search to find optimal path.");
                if ((newN.pathCost() < shortestPath.pathCost || shortestPath.pathCost === null)&&newN.usedFuel()<=fuelLimit) {
                    shortestPath.pathCost = newN.pathCost();
                    shortestPath.path = newN.path();
                    shortestPath.state = newS;
                    shortestPath.usedFuel=newN.usedFuel();
                }
            }

            // If the successor is already expanded,
            // don't add it to the aStartQueue.
            else if (expanded.indexOf(newS) !== -1) {
                console.log("Successor " + newS + " of " + parent.state + " already expanded.");
                console.log("Not adding " + newS + " to the aStartQueue.");
                console.log("\n");
            }

            // Push new successors to the aStartQueue.
            else {
                show.push(newN.path());
                console.log("Discovered " + newN.state + " with step cost "
                    + actionsList[i].cost + " from " + parent.state);
                console.log("Pushing to aStartQueue: " + newS);
                newChildStates.push(newS);
                aStartQueue.enqueue(newN);
                console.log("Path: ", newN.path());
                console.log("Current aStartQueue: " + aStartQueue.map(function(city){
                        return city.state;
                    }));
                console.log("\n");
            }
        }
    }
    if (shortestPath.pathCost === null) {
        console.log("Couldn't find path."); 
    } else {
        show.push(shortestPath.path);
        console.log(shortestPath.path + " with path cost of time " + shortestPath.pathCost +" and used fuel are " +shortestPath.usedFuel+". Limit is ",fuelLimit );
    }
}