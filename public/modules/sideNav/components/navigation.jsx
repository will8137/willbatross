var React = require('react');
var ReactDOM = require('react-dom');
var NavigationProfile = require('./navigationProfile.jsx');

var Navigation = React.createClass({
    
    getUserProfile: function() {
        return <NavigationProfile controller={this} />;
    },
    
    render: function() {
    
        var profile = this.getUserProfile();
        
        return (
        <div className="navigation">
            <div className="navigation-inner">
                <div className="navigation-scroll">
                
                    {profile}
                    
                    <div className="navigation-item navigation-dashboard">
                        <a href="#/dashboard" className="selected navigation-item-title">
                            <span><i className="icon icon-speed-fast"></i>Dashboard</span>
                        </a>
                    </div>

                    <div className="navigation-item navigation-settings">
                        <a href="#/logout" className="navigation-item-title">
                            <span><i className="icon icon-power-switch"></i>Settings</span>
                        </a>
                    </div>
            
                </div>
            </div>
        </div>
        )
    }
    
});

module.exports = Navigation;