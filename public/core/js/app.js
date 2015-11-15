var Willbatross = require('willbatross');
var Router = require('router');
var Navigation = require('modules/sideNav/js/navigationController');

Willbatross.router = new Router();

$(function(){
    
    new Navigation();
    
})
