var React = require('react');
var ReactDOM = require('react-dom');

var Navigation = React.createClass({
    
    userNameClicked: function() {
        console.log("This is firing");
    },
    
    userProfileClicked: function() {
        
    },
    
    render: function() {
        return (
            <div className="navigation-inner">
                
                <div className="navigation-user">
                    <div className="navigation-profile">
                        
                        <div className="navigation-profile-avatar">
                            <img src="#" alt="" />
                        </div>
                        
                        <a className="navigation-profile-name" href="#" onClick={this.userNameClicked}>
                            <h2>Will Lytton</h2>
                        </a>
                        
                        <a className="navigation-profile-edit" href="#" onClick={this.userProfileClicked}>
                            Edit
                        </a>
                    </div>
                </div>
                
            </div>
        )
    }
    
});

module.exports = Navigation;