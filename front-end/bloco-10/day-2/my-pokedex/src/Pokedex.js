import React, { Component } from 'react';
import pokemons from './data'; 
import Pokemon from './Pokemon';

class Pokedex extends Component {
    render() {
        return (
            <section className='poke'>
                { pokemons.map(poke => <Pokemon pokemon={poke} key={poke.id} />) }
            </section>
        )
    }
}

export default Pokedex;
