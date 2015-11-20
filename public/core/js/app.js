var Willbatross = require('willbatross');
var Router = require('router');
var Navigation = require('modules/sideNav/js/navigationController');
var Dashboard = require("modules/dashboard/js/dashboardController");
var Player = require("modules/player/js/playerController");

Willbatross.router = new Router();

$(function(){
    Willbatross.hub.trigger("Willbatross:ready");
});

Willbatross.hub.on("Willbatross:ready", function(){
    new Navigation();
    new Dashboard();
    new Player();
});
    
