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
let mapPlanets = new Map();
let goalPlanet=null;
let startPlanet=null;
module.exports.unc = function uniformCost(map) {
    startPlanet = map.startPlanet;
    goalPlanet = map.endPlanet;
    console.log(map.endPlanet)
    const fuelLimit = map.fuelLimit;
    for (let i = 0; i < map.Planets.length; i++) {
        mapPlanets.set(i, map.Planets[i].linkedPlanets);
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
