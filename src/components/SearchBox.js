import React from 'react';
import './SearchBox.css';

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<div>
			<input
				className='searchbox'
				type='search'
				placeholder='search persons'
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;