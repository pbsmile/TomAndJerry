document.addEventListener('DOMContentLoaded',init);
const {ids} = require('./iterativeDeepeningSearch.js');
const {unc} = require('./uniformCost.js');
const {map} = require('./map');

function init(){
    randommap();
}

function randommap() {
    var mapnum = Math.floor(Math.random() * 5) + 1;
    var x = ""
    var mapHtml = ""
    window.thisMap = map[0];
    
    if(mapnum == 1){
        thisMap = map[0];
        x = "Map Pakbung"
        mapHtml = "map1.html"
    }
    if(mapnum == 2){
        thisMap = map[1];
        x = "Map Nice"
        mapHtml = "map2.html"
    }
    if(mapnum == 3){
        thisMap = map[2];
        x = "Map Namob"
        mapHtml = "map3.html"
    }
    if(mapnum == 4){
        thisMap = map[3];
        x = "Map Aon"
        mapHtml = "map4.html"
    }
    if(mapnum == 5){
        thisMap = map[4];
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
        ids(thisMap);
    }
    if(strSearch == 'uniform'){
        unc(thisMap);
    }
}