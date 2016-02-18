var React = require('react'),
    ReactDOM = require('react-dom'),
    apiUtil = require('./util/apiUtil'),
    PokemonStore = require('./stores/pokemon'),
    PokemonsIndex = require('./components/pokemons/pokemonsIndex');

$(function () {
document.addEventListener('DOMContentLoaded',
ReactDOM.render(<PokemonsIndex/>, document.getElementById('root') ));
});
