var Dispatcher = require('../dispatcher/dispatcher');
var PokemonConstants = require('../constants/pokemonConstants');

var PokemonAction = {
  receiveAllPokemons: function(data) {
    var payload = { actionType: PokemonConstants.POKEMONS_RECEIVED, data: data };
    Dispatcher.dispatch(payload);
  }
};

module.exports = PokemonAction;
