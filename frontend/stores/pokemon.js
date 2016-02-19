var Store = require('flux/utils').Store;
var Dispatcher = require('../dispatcher/dispatcher');
var PokemonConstants = require('../constants/pokemonConstants');



var PokemonStore = new Store(Dispatcher);

var _pokemons = {};
var _currentPokemon;
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
    case PokemonConstants.SINGLE_POKEMON_RECEIVED:
      PokemonStore.resetCurrentPokemon(payload.data);
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

PokemonStore.find = function(pokemonId) {
  return _pokemons[pokemonId];
};

PokemonStore.findToy= function(pokemonId, toyId){
  var pokemon = PokemonStore.find(pokemonId);
  var toy;
  pokemon.toys.forEach(function(el) {
    if (el.id === toyId) {
      toy = el;
    }
  });
  return toy;
};

PokemonStore.resetCurrentPokemon = function(pokemon) {
  _currentPokemon = pokemon;
  PokemonStore.__emitChange();
};

PokemonStore.current = function() {
  return _currentPokemon;
};

window.PokemonStore = PokemonStore;
module.exports = PokemonStore;
