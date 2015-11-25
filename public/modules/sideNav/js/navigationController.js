var Backbone = require('backbone');
var Hub = require('core/js/hub');
var React = require('react');
var Willbatross = require('willbatross');
var ReactDOM = require('react-dom');
var Navigation = require('../components/navigation.jsx');

var sideNavControllerView = Backbone.View.extend({
    
    className: "navigation",
    
    initialize: function() {
        this.listenTo(Willbatross.hub, 'remove:views', this.remove);
        this.preRender();
        this.render();
    },
    
    preRender: function() {
        
    },
    
    render: function() {
        this.$el.appendTo("body");
        _.defer(_.bind(this.postRender, this));
        return this;
    },
    
    postRender: function() {
        ReactDOM.render(React.createElement(Navigation, {
            controller: this
        }), this.$el[0]);
    }
    
});

module.exports = sideNavControllerView;