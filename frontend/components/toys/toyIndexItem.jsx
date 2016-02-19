var React = require('react');
var ToyDetail = require('./toyDetail');
var History = require('react-router').History;

var ToyIndexItem = React.createClass({
  mixins: [History],

  showDetail: function() {
    var pokemonId = this.props.toy.pokemon_id;
    var toyId = this.props.toy.id;
    this.history.push("pokemon/" + pokemonId + "/toys/" + toyId);
  },
  render: function() {
    return (
      <li onClick={this.showDetail} toy={this.props.toy}>{this.props.toy.name}
      </li>
    );
  }
});

module.exports = ToyIndexItem;
