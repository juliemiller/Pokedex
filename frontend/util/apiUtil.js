var PokemonActions = require('../actions/pokemonActions');

var apiUtil = {
  fetchAllPokemons: function() {
    $.get("api/pokemon","json", function(data) {
      PokemonActions.receiveAllPokemons(data);
    });
  },

  fetchPokemon: function(id) {
    var url = "api/pokemon/" + id;
    $.get(url, "json", function(data) {
      PokemonActions.receiveSinglePokemon(data);
    });
  }
};

module.exports = apiUtil;
window.apiUtil = apiUtil;
