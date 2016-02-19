var React = require('react');
var ToyIndexItem = require('./toyIndexItem');
var History = require('react-router').History;

var ToysIndex = React.createClass({
  

  render: function() {
    return (
      <div>
        {this.props.toys.map(function(toy){
          return <ToyIndexItem key={toy.id} toy={toy} />;
        })}
      </div>
    );
  }

});

module.exports = ToysIndex;
