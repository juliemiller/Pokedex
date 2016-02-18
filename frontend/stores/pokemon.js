var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher');
var PokemonConstants = require('../constants/pokemonConstants');



var PokemonStore = new Store(Dispatcher);

var _pokemons = {};

PokemonStore.resetPokemons = function(pokemons) {
  _pokemons = {};
  pokemons.forEach(function(pokemon) {
    _pokemons[pokemon.id] = pokemon;
  });
  PokemonStore.__emitChange();
};

PokemonStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case PokemonConstants.POKEMONS_RECEIVED:
    PokemonStore.resetPokemons(payload.data);
    break;
  }
};

PokemonStore.all = function(){
  var pokeList = [];
  Object.keys(_pokemons).forEach(function(key){
    pokeList.push(_pokemons[key]);
  });
  return pokeList;
};

window.PokemonStore = PokemonStore;
module.exports = PokemonStore;
