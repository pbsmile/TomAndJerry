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
let goalPlanet=null;
let mapPlanets = new Map();
let startPlanet=null;
module.exports.aStarSearch = function aStarSearch(map) {
    // The aStartQueue is a Priority Queue
    // Actions other than shift() and enqueue() are prohibited.
    startPlanet = map.startPlanet;
    goalPlanet = map.endPlanet;
    const fuelLimit = map.fuelLimit;
    for (let i = 0; i < map.Planets.length; i++) {
        mapPlanets.set(i, map.Planets[i].linkedPlanets);
    }
    let aStartQueue = [];
    if (goalTest(startPlanet)) {
        console.log("Initial state is the goal state.");
        return [startPlanet];
    }
    aStartQueue.enqueue = function(item) {
        let added = false;

        let heuristic = null;
        // Finding heuristic value
        for (let i = 0; i < map.Planets.length; i++) {
            if (map.Planets[i].planetNumber === item.state) {
                heuristic = map.Planets[i].time;
            }
        }

        function findHeuristic(item) {
            for (let i = 0; i < map.Planets.length; i++) {
                if (map.Planets[i].planetNumber === item.state) {
                    return map.Planets[i].time;
                }
            }
        }

        for (let i = 0; i < aStartQueue.length; i++) {
            console.log("Iteration in aStartQueue: ", aStartQueue[i].state);
            console.log("COST: ", aStartQueue[i].pathCost(), "HEURISTIC COST: ", findHeuristic(aStartQueue[i]), "TOTAL COST: ", aStartQueue[i].pathCost() + findHeuristic(aStartQueue[i]));
            if (item.pathCost() + heuristic < aStartQueue[i].pathCost() + findHeuristic(aStartQueue[i])) {
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
                return item.name;
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
                console.log("used fuel"+newN.usedFuel(),"Limit is ",fuelLimit)
                console.log("Continuing search to find optimal path.");
                if ((newN.pathCost() < shortestPath.pathCost || shortestPath.pathCost === null)) {
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
