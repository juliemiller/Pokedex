var React = require('react');
var PokemonStore = require('../../stores/pokemon');
var ApiUtil = require('../../util/apiUtil');
var ToysIndex = require('../toys/toysIndex');

var PokemonDetail = React.createClass({
  getInitialState: function() {
    return { pokemon: this.getStateFromStore() };
  },

  getStateFromStore: function() {
    var pokemonId = parseInt(this.props.params.pokemonId);
    return PokemonStore.find(pokemonId);
  },

  componentWillReceiveProps: function(newProps){
    ApiUtil.fetchPokemon(newProps.params.pokemonId);
  },

  componentDidMount: function() {
    this.listenerToken = PokemonStore.addListener(this._onChange);
    ApiUtil.fetchPokemon(this.props.params.pokemonId);
  },

  _onChange: function() {
    this.setState({ pokemon: PokemonStore.current() });
  },

  componentWillUnmount: function() {
    this.listenerToken.remove();
  },

  render: function() {
    if (this.state.pokemon) {
      var detailDiv = <div className="detail">
        Name: {this.state.pokemon.name} <br/>
        Attack: {this.state.pokemon.attack}<br/>
        Defense: {this.state.pokemon.defense}<br/>
        Type: {this.state.pokemon.poke_type}<br/>
      Moves: {this.state.pokemon.moves.join(", ")} <br/>
        <img src={this.state.pokemon.image_url}/>
      </div>;
      var toyDiv = <div>
        <ToysIndex toys={this.state.pokemon.toys}/>
      </div>;
    }
    return (
      <div>
        <div className="pokemon-detail-pane">
          {detailDiv}
        </div>
        {toyDiv}
        {this.props.children}
      </div>
    );
  }

});

module.exports = PokemonDetail;
