var Willbatross = require('willbatross');
var Router = require('router');
var Navigation = require('modules/sideNav/js/navigationController');
var Dashboard = require("modules/dashboard/js/dashboardController");

Willbatross.router = new Router();

$(function(){
    
    new Navigation();
    new DasbBoard();

})
