// Description:
//   Show a random Armadillo fact
//
// Dependencies:
//   None
//
// Configuration:
//
// Commands:
//   hubot armadillo  - displays a random Armadillo fact
// 


/*jshint esversion: 6 */


 Array.prototype.random = function (length) {
       return this[Math.floor((Math.random()*length))];
 }

module.exports = function (robot) {
  facts = require('../facts.json');
  factArr = facts.facts;
  robot.respond(/(armadillo)(\s)?(me)?/i, function(msg) {
     msg.send(factArr.random( factArr.length));
  });
}



