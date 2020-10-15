class searchNode {
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
let mapPlanets = new Map();
let goalPlanet = null;
let startPlanet = null;
module.exports.biunc = function uniformCost(map) {
    startPlanet = map.startPlanet;
    goalPlanet = map.endPlanet;
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
    priorityQueueA.enqueue(new searchNode({time:map.Planets[0].time}, startPlanet, null));
    priorityQueueB.enqueue(new searchNode({ time:map.Planets[map.Planets.length-1].time}, goalPlanet,null ));
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
        let actionsListA = actions(parentA.state);
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
        let actionsListB = actions(parentB.state);
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
            let newN = new searchNode(actionsListA[i], newS, parentA);
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
            let newN = new searchNode(actionsListB[i], newS, parentB);
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

function actions(state) {
    // Returns an array of objects
    // [{ useFuel: int, time: integer,planetNumber:int }, ... ]
    return mapPlanets.get(state);
}

function successor(state, action) {
    return action.planetNumber;
}
