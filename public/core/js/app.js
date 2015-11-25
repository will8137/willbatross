var Willbatross = require('willbatross');
var Router = require('router');
var Navigation = require('modules/sideNav/js/navigationController');
var Dashboard = require("modules/dashboard/js/dashboardController");
var Player = require("modules/player/js/playerController");

Willbatross.router = new Router();

$(function(){
    Backbone.history.start();
    Willbatross.hub.trigger("DOM:Loaded");
});

Willbatross.hub.on('router:dashboard', function(route1, route2, route3) {
    new Navigation();
    new Dashboard();
    new Player();
});
