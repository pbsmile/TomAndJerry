var bottomReached = false;

function iterativeDeepeningSearch(map){   
    var depth = 1;
    const start = map.startPlanet;
    const goal = map.endPlanet;
    const fuelLimit = map.fuelLimit;
    var currentFuel = 0;
    var time = 0;
 
    //increase depth here
    while (!bottomReached)
    {
        bottomReached = true; 
        var result = deepeningSearch(start, goal, 0, depth, currentFuel, fuelLimit, map.Planets, time);
        if (result!= null){
            return result;
        }
        depth *= 2;
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