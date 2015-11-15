var React = require('react');
var ReactDOM = require('react-dom');

var Navigation = React.createClass({
    
    userNameClicked: function() {
        console.log("This is firing");
    },
    
    render: function() {
        return (
            <div className="navigation-inner">
                
                <div className="navigation-user">
                    <div className="navigation-profile">
                        <div className="navigation-avatar">
                        </div>
                        
                        <a className="navigation-name" href="#" onClick={this.userNameClicked}>
                            <h2>Will Lytton</h2>
                        </a>
                    </div>
                </div>
                
            </div>
        )
    }
    
});

module.exports = Navigation;