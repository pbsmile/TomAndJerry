const {map} = require('./map.js'); 
const {ids} = require('./iterativeDeepeningSearch.js');
const {unc} = require('./uniformCost.js');
<<<<<<< HEAD
const {biunc} = require('./bidirectionalUniformCost.js');
console.log("map1 is: "+map[0]);
biunc(map[0])
=======
unc(map[0]);
>>>>>>> b0dc3dc26c59218adeb547d645256bad1c8f534d
//ids(map[0]);