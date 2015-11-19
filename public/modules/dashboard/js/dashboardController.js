var Backbone = require('backbone');
var Hub = require('core/js/hub');
var React = require('react');
var ReactDOM = require('react-dom');
var Dashboard = require('../components/dashboard.jsx');

var DashboardController = Backbone.View.extend({
    
    className: "dashboard",
    
    initialize: function() {
        this.preRender();
        this.render();
    },
    
    preRender: function() {
        
    },
    
    render: function() {
        this.$el.appendTo("#wrapper");
        _.defer(_.bind(this.postRender, this));
        return this;
    },
    
    postRender: function() {
        ReactDOM.render(React.createElement(Dashboard, {
            controller: this
        }), this.$el[0]);
    }
    
});

module.exports = DashboardController;