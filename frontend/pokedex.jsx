var React = require('react'),
    ReactDOM = require('react-dom'),
    apiUtil = require('./util/apiUtil'),
    PokemonStore = require('./stores/pokemon'),
    PokemonsIndex = require('./components/pokemons/pokemonsIndex'),
    Router = require('react-router').Router,
    Route = require('react-router').Route,
    App = require('./components/app'),
    PokemonDetail = require('./components/pokemons/pokemonDetail'),
    ToyDetail = require('./components/toys/toyDetail');

var routes = (
  <Route component={App} path="/" >
    <Route component={PokemonDetail} path="pokemon/:pokemonId">
      <Route component={ToyDetail} path="toys/:toyId">
      </Route>
    </Route>
  </Route>
);

$(function () {
document.addEventListener('DOMContentLoaded',
ReactDOM.render(<Router>{routes}</Router>, document.getElementById('root') ));
});
