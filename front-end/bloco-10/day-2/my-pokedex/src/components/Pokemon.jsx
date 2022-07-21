import React, { Component } from 'react';
import { pokemonType } from '../types';

class Pokemon extends Component {
  render() {
    const { pokemon } = this.props;
    const { name, type, averageWeight: { value, measurementUnit }, image } = pokemon;

    return (
      <div className="containerPokemon">
        <div className="textPokemon">
          <p>{name}</p>
          <p>{type}</p>
          <p>
            Average weight:
            {' '}
            {value }
            {' '}
            {measurementUnit}
          </p>
        </div>
        <div className="imagePokemon">
          <img src={ image } alt={ name } />
        </div>
      </div>
    );
  }
}

Pokemon.propTypes = {
  pokemon: pokemonType.isRequired,
};

export default Pokemon;
