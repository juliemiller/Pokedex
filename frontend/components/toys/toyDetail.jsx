var React = require('react');
var PokemonStore = require('../../stores/pokemon');

var ToyDetail = React.createClass({
  getStateFromStore: function() {
    var toyId = parseInt(this.props.params.toyId);
    var pokemonId = parseInt(this.props.pokemon_id);
    if (toyId && pokemonId ) {
      return PokemonStore.findToy(pokemonId, toyId);
    }
  },

  _onChange: function() {
    this.setState({ toy: this.getStateFromStore()} );
  },

  getInitialState: function(){
    return { toy: this.getStateFromStore() };
  },

  componentDidMount: function(){
    this.listenerToken = PokemonStore.addListener(this._onChange);
  },

  componentWillUnmount: function(){
    this.listenerToken.remove();
  },
  componentWillReceiveProps: function(newProps) {
    this.getStateFromStore(newProps);
  },

  render: function() {
    if (this.props.toy) {
      var divContent = <div>
      Name: {this.props.toy.name},
      Happiness: {this.props.toy.happiness},
      Price: {this.props.toy.price}
    </div>;
    }
    return (
      <div toy-detail-pane>
        {divContent}
      </div>
    );
  }

});

module.exports = ToyDetail;
