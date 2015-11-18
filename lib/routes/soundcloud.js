var express = require('express');
var SoundCloudAPI = require("soundcloud-node");
/*
    Client: 0e52f02fa72ed11257d7c55246e748fb
    Secret: 78e22525c12e8957439df18d5e83464a
    var client = new SoundCloudAPI(client_id, client_secret, redirect_uri);

*/

module.exports = function(app){
    
    app.get('/api/soundcloud/init/', function(req, res){
        // instantiate the client
        var client = new SoundCloudAPI("0e52f02fa72ed11257d7c55246e748fb", "78e22525c12e8957439df18d5e83464a", "");
        
        console.log(client);

    });

};
