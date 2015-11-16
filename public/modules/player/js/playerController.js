
var playerController = Backbone.View.extend({
    
    initialize: function() {
        this.preRender();
        this.render();
    },
    
    preRender: function() {
        
    },
    
    render: function() {
        
        _.defer(_.bind(this.postRender, this));
        return this;
    }, 
    
    postRender: function() {
        console.log("We are getting here")
        
        $.get("/api/soundcloud/init/", function(data) {
            console.log(data);  
        });
    }
    
});

module.exports = playerController;