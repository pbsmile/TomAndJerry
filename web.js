const {map} = require('./map.js'); 
const {ids} = require('./iterativeDeepeningSearch.js');
const {unc} = require('./uniformCost.js');
const {biunc} = require('./bidirectionalUniformCost.js');
console.log("map1 is: "+map[0]);
biunc(map[4]);
//ids(map[0]);