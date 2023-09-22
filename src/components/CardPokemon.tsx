import {Link} from 'react-router-dom';

export const CardPokemon = ({data}: any) => {
	return (
		<Link to={`/pokemon/${data.id}`} className='card-pokemon'>
			<div className='card-img'>
				<img
					src={data.sprites.other.dream_world.front_default}
					alt={`Pokemon ${data.name}`}
				/>
			</div>
			<div className='card-info'>
				<span className='pokemon-id'>Nº {data.id}</span>
				<h3>{data.name}</h3>
				<div className='card-types'>
					{data.types.map((type: any) => (
						<span key={type.type.name} className={type.type.name}>
							{type.type.name}
						</span>
					))}
				</div>
			</div>
		</Link>
	);
};
