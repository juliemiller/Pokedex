var React = require('react');
var PokemonStore = require('../../stores/pokemon');
var apiUtil = require('../../util/apiUtil');
var PokemonIndexItem = require('./pokemonIndexItem');

var PokemonsIndex = React.createClass({
  getInitialState: function() {
    return { pokemons: PokemonStore.all() };
  },

  _onChange: function() {
    this.setState({ pokemons: PokemonStore.all()});
  },

  componentDidMount: function() {
    this.indexListener = PokemonStore.addListener(this._onChange);
    apiUtil.fetchAllPokemons();
  },
  componentWillUnmount: function() {
    this.indexListener.remove();
  },

  render: function() {
    return (
      <div>
        <ul>
          {
            this.state.pokemons.map(function(pokemon) {
              return <PokemonIndexItem key={pokemon.id} pokemon={pokemon} />;
            })
          }
        </ul>
      </div>
    );
  }

});

module.exports = PokemonsIndex;
