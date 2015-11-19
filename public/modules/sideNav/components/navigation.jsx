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
                
                    <div className="navigation-profile">
                        <div className="navigation-profile-inner">
            
                            <div className="navigation-profile-edit">
                                <a href="#/users/edit"><i className="icon icon-pencil4"></i></a>
                            </div>
            
                            <div className="navigation-profile-avatar">
                                <img src="http://placehold.it/350x150" />
                            </div>
            
                            <div className="navigation-profile-user">
                                Will Lytton
                            </div>
            
                            <div className="list-item-detail">
                                <i className="icon icon-users2"></i><span></span>
                            </div>
            
                        </div>
                    </div>
                    <div className="navigation-item navigation-dashboard">
                        <a href="#/dashboard" className="selected navigation-item-title">
                            <span><i className="icon icon-speed-fast"></i></span>
                        </a>
                    </div>
            
                    <div className="navigation-item navigation-users">
                        <a href="#/users" className="navigation-item-title">
                            <span><i className="icon icon-woman"></i></span>
                        </a>
                    </div>
            
                    <div className="navigation-item navigation-groups">
                        <a href="#/groups" className="navigation-item-title">
                            <span><i className="icon icon-users2"></i></span>
                        </a>
                    </div>
            
                    <div className="navigation-item navigation-groups">
                        <a href="#/groups" className="navigation-item-title">
                            <span><i className="icon icon-users2"></i></span>
                        </a>
                    </div>
            
                    <div className="navigation-item navigation-subjects">
                        <a href="#/subjects" className="navigation-item-title">
                            <span><i className="icon icon-contacts"></i></span>
                        </a>
            
                    </div>
            
                    <div className="navigation-item navigation-subjects">
                        <a href="#/subjects" className="navigation-item-title">
                            <span><i className="icon icon-contacts"></i></span>
                        </a>
                    </div>
            
                    <div className="navigation-item navigation-courses">
                        <a href="#/courses" className="navigation-item-title">
                            <span><i className="icon icon-book"></i></span>
                        </a>     
                    </div>
            
                    <div className="navigation-item navigation-courses">
                        <a href="#/courses" className="navigation-item-title">
                            <span><i className="icon icon-book"></i></span>
                        </a>
                    </div>
            
                    <div className="navigation-item navigation-achievements">
                        <a href="#/achievements" className="navigation-item-title">
                            <span><i className="icon icon-trophy2"></i></span>
                        </a>
                        <a href="#/achievements/add" className="navigation-item-add"><i className="icon icon-plus-circle"></i></a> 
                    </div>
            
                    <div className="navigation-item navigation-settings">
                        <a href="#/logout" className="navigation-item-title">
                            <span><i className="icon icon-power-switch"></i></span>
                        </a>
                    </div>
            
                </div>
            </div>
        </div>
        )
    }
    
});

module.exports = Navigation;