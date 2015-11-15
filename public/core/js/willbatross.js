var Backbone = require('backbone');

var Willbatross = {};

Willbatross.hub = _.extend({}, Backbone.Events);

Willbatross.bangedRoute;

Willbatross.location = {};

// Extend the settings object so this is now hidden from users
var systemSettings = _.extend({}, window.system);
// Enable modules to only get system settings - no setters allowed
Willbatross.getSystemSettings = function() {
    return systemSettings;
}

Willbatross.fetch = function(fetchData, callback) {
    $.ajax({
        type: 'GET',
        url: 'api/fetch',
        contentType: 'application/json',
        data: fetchData,
        dataType: 'json',
        success: function(data){
            _.each(data, function(value, key) {
                if (Willbatross.dashboard[key]) {
                    Willbatross.dashboard[key].reset(value);
                }
            });
            callback(null, data);
        },
        error: function(err){
            callback(err);
        },
        processData: true
    });
}

Willbatross.initialize = function() {
    if (window.location.hash !== '#/login') {
        Willbatross.bangedRoute = window.location.hash;
    }
    checkUserIsLoggedIn(startApplication);
}

var checkUserIsLoggedIn = function(callback) {
    $.get('api/isAuthenticated', function(data) {
        
        if (data.error) {
            return callback(false);
        }
        Willbatross.hub.trigger('user:authenticated', data.user);
        return callback(true);

    }).fail(function(jqXHR, textStatus, errorThrown) {
        
    });
}

var startApplication = function(authenticated) {
    if(!authenticated) {
        window.location.hash = '#/login';
        Willbatross.hub.trigger('Willbatross:ready');
        _.delay(function() {
            Willbatross.hub.trigger('Willbatross:init');
            Backbone.history.start();
        }, 100);
    } else {

        Willbatross.hub.trigger('Willbatross:ready');
        
        // Defer needed here for plugins to set themselves up before data is loaded
        _.delay(function() {
            Willbatross.hub.trigger('Willbatross:init');
            Backbone.history.start();
        }, 100);
    }

}

module.exports = Willbatross;