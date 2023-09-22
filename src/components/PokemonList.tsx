import React, {useContext} from 'react';
import {PokemonContext} from '../context/PokemonContext';
import {CardPokemon} from '.';

export const PokemonList = () => {
	const {paginatedPokemons} = useContext(PokemonContext);

	return (
		<>
			<div className='card-list-pokemon container'>
				{paginatedPokemons.map((pokemon: any) => (
					<CardPokemon data={pokemon} key={pokemon.id} />
				))}
			</div>
		</>
	);
};
