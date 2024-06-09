import { useState } from 'react';
import { useSearchString } from '../utils/usePersistedState';
import CustomRadio from './CustomRadio';
import styled from 'styled-components';

function SearchForm({ onSearch }) {
  const [searchState, setSearchState] = useSearchString();
  const [searchOptions, setSearchOptions] = useState('shows');

  // console.log(searchOptions)

  const onRadioChange = ev => {
    setSearchOptions(ev.target.value);
  };

  const searchInput = e => {
    setSearchState(e.target.value);
  };

  const onSubmit = ev => {
    ev.preventDefault();

    onSearch(searchOptions, searchState);
  };

  return (
    <form onSubmit={onSubmit}>
      <SearchInput placeholder='Search for Something' type="text" onChange={searchInput} />
       <RadiosWrapper>
       <CustomRadio
      label="Shows"
      name="search-shows"
      value="shows"
      checked= {searchOptions === 'shows'}
      onChange={onRadioChange}
      /> 

     <CustomRadio
      label="Actors"
      name="search-shows"
      value="actors"
      checked={searchOptions === 'actors'}
      onChange={onRadioChange}
      /> 

       </RadiosWrapper>

       <SearchButtonWrapper><button type="submit">Search</button></SearchButtonWrapper>
     
    </form>
  );
}

export default SearchForm;

const SearchInput = styled.input`
  display: block;
  font-family: 'Roboto', sans-serif;
  width: 200px;
  margin: auto;
  outline: none;
  padding: 13px 15px;
  border: 1px solid #dbdbdb;
  box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5);
  font-size: 14px;
  border-radius: 12px;
  color: #8d8d8d;
  &::placeholder {
    font-weight: 300;
    color: #8d8d8d;
  }
`;

export const RadiosWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  label {
    margin: 0 15px;
  }
`;

const SearchButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 35px;
  button {
    color: #fff;
    background-color: ${({ theme }) => theme.mainColors.blue};
    margin: auto;
    padding: 10px 50px;
    font-size: 15px;
    border: none;
    outline: none;
    border-radius: 12px;
    &:hover {
      cursor: pointer;
    }
  }
`;
