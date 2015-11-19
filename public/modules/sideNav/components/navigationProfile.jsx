var React = require('react');
var ReactDOM = require('react-dom');

var NavigationProfile = React.createClass({
    
    userNameClicked: function() {
        console.log("This is firing");
    },
    
    userProfileClicked: function() {
        
    },
    
    render: function() {
        return (
            <div className="navigation-profile">
                <div className="navigation-profile-inner">
    
                    <div className="navigation-profile-edit">
                        <a href="#/users/edit"><i className="icon icon-pencil4"></i></a>
                    </div>
    
                    <div className="navigation-profile-avatar">
                        <img src="http://www.finearttips.com/wp-content/uploads/2010/05/avatar.jpg" width="100%" height="100%"/>
                    </div>
    
                    <div className="navigation-profile-user">
                        Will Lytton
                    </div>
    
                    <div className="list-item-detail">
                        <i className="icon icon-users2"></i><span></span>
                    </div>
    
                </div>
            </div>
        )
    }
    
});

module.exports = NavigationProfile;