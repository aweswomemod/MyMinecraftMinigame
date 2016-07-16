var utils = require("utils"),
    items = require("items"),
    events = require("events"),
    Drone = require("drone"),
    blocks = require("blocks"),
    Canary = Packages.net.canarymod.Canary;
var slash = require('slash');

slash([
  "effect @a minecraft:speed 10000 10",
  "give @a minecraft:bow",
  "give @a minecraft:arrow 1000",
  "scoreboard objectives add Kills playerKillCount",
  "scoreboard objectives add Health health",
  "scoreboard objectives setDisplay belowname Health",
], server);

// warning setup spawns the arena which will lag so be patient

function arenaSetup(){
   this.box0(blocks.bedrock,50,15,50)
       .down(1)
       .box(blocks.bedrock,50,10,50)
       .up(1)
       .fwd(5)
       .right(5)
       .castle()
       .fwd(25)
       .right(27)
      //  .castle();
}
Drone.extend(arenaSetup)
function setupgame() {
   // end scoreboards, setup arena.
  //  arenaSetup();
   echo("Welcome to a custom DM experience.");
   echo("By Diego, Nick, and Harry.");
   echo("v0.2 alpha, report bugs at: http://bit.ly/29CBEWm ");
};
