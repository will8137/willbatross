var Backbone = require('backbone');
var Hub = require('core/js/hub');
var React = require('react');
var ReactDOM = require('react-dom');
var Player = require('../components/player.jsx');

var PlayerController = Backbone.View.extend({
    
    className: "player",
    
    initialize: function() {
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
        ReactDOM.render(React.createElement(Player, {
            controller: this
        }), this.$el[0]);
    }
    
});

module.exports = PlayerController;