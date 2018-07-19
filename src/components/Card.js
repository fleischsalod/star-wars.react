import React from 'react';
import './Card.css'

const Card = ({ name, homeworld, birthyear, gender, species, films }) => {
	return (
		<div className='card'>
			<header className='cardHeader'>
				<h2>{name}</h2>
			</header>
			<table>
				<tbody>
					<tr>
						<td className='left'>Homeworld</td>
						<td className='right'>{homeworld}</td>
					</tr>
					<tr>
						<td className='left'>birthyear</td>
						<td className='right'>{birthyear}</td>
					</tr>
					<tr>
						<td className='left'>gender</td>
						<td className='right'>{gender}</td>
					</tr>
					<tr>
						<td className='left'>species</td>
						<td className='right'>{species}</td>
					</tr>
					<tr>
						<td className='left'>films</td>
						<td className='right'>
							{films}
						</td>
					</tr>
				</tbody>
			</table>
			<hr />
		</div>
	);
}

export default Card;