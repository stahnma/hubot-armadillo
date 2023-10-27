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


module.exports = function (robot) {
  robot.respond(/(armadillo)(\s)?(me)?/i, function(msg) {
     msg.send("Fact goes here");
  });
}


