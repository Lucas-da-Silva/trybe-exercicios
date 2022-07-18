import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Pokemon extends Component {
    render() {
        const { name, type, averageWeight: { value, measurementUnit }, image } = this.props.pokemon;
        
        return (
            <div className='containerPokemon'>
                <div className='textPokemon'>
                <p>{name}</p>
                <p>{type}</p>
                <p>Average weight: {value} {measurementUnit}</p>
                </div>
                <div className='imagePokemon'>
                <img src={image}></img>
                </div>
            </div>
        )
    }
}

Pokemon.propTypes = {
    pokemon: PropTypes.object.isRequired,
}

export default Pokemon;
