import {useEffect, useState} from 'react';
import {PokemonContext} from './PokemonContext';
import {useForm} from '../hooks/UseForm';

export const PokemonProvider = ({children}) => {
	const baseURL = 'https://pokeapi.co/api/v2/';

	const [offset, setOffset] = useState(0);
	const [paginatedPokemons, setPaginatedPokemons] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);

	// Using hooks
	const {formState, onInputChange, onResetForm} = useForm({
		valueSearch: '',
	});

	const getPaginatedPokemons = async (limit = 50) => {
		const response = await fetch(
			`${baseURL}pokemon?limit=${limit}&offset=${offset}`
		);
		const data = await response.json();
		const pokemonPromises = data.results.map(async (pokemon: any) => {
			const response = await fetch(pokemon.url);
			return await response.json();
		});

		const results: Array<any> = await Promise.all(pokemonPromises);
		setPaginatedPokemons(results);
		setLoading(false);
	};

	const getPokemonByID = async (id: number) => {
		const response = await fetch(`${baseURL}pokemon/${id}`);
		return await response.json();
	};

	useEffect(() => {
		getPaginatedPokemons();
	}, []);

	return (
		<PokemonContext.Provider
			value={{
				formState,
				onInputChange,
				onResetForm,
				paginatedPokemons,
				getPokemonByID,
			}}
		>
			{children}
		</PokemonContext.Provider>
	);
};
