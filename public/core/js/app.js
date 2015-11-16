var Willbatross = require('willbatross');
var Router = require('router');
var Navigation = require('modules/sideNav/js/navigationController');
var PlayerController = require('modules/player/js/playerController');

Willbatross.router = new Router();

$(function(){
    
    new Navigation();
    new PlayerController();
    
})
