var PokemonActions = require('../actions/pokemonActions');

var apiUtil = {
  fetchAllPokemons: function() {
    $.get("api/pokemon","json", function(data) {
      PokemonActions.receiveAllPokemons(data);
    });
  }
};

module.exports = apiUtil;
window.apiUtil = apiUtil;
