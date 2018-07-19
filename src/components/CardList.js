import React from 'react';
import Card from './Card';

const CardList = ({ persons }) => {
	const cardsArray = persons.map((char, i) => {
		return (
			<Card
				key={i}
				name={persons[i].name}
				homeworld={persons[i].homeworld}
				birthyear={persons[i].birth_year}
				gender={persons[i].gender}
				species={persons[i].species}
				films={persons[i].films}
			/>
		);
	})
	return (
		<div>
			{cardsArray}
		</div>
	);
}

export default CardList;