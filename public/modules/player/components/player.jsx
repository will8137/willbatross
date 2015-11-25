var React = require('react');
var ReactDOM = require('react-dom');

var Player = React.createClass({
    
    render: function() {
    
        return (
            <div className="player-inner">
                <div className="player-back">Back</div>
                <div className="player-music-toggle">Play</div>
                <div className="player-next">Next</div>
                <div className="player-seek">Seek</div>
                <div className="player-queue">Queue</div>
                <div className="player-volume">Volume</div>
                <div className="player-content-type">Content</div>
            </div>
        )
    }
    
});

module.exports = Player;