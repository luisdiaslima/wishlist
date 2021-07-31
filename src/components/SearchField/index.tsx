import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { SearchContainer, SearchField } from './styles';


const Search = () => {
    return (
        <SearchContainer>
            <BiSearch />
            <SearchField placeholder="Buscar..." />
        </SearchContainer>
    );
}

export default Search;
