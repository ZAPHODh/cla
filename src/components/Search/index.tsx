import { useState } from 'react';
import * as Styled from './styles';
import SearchIcon from '@mui/icons-material/Search';
import Tooltip from '@mui/material/Tooltip';
export type SearchProps = {
  onSearch: (searchTerm: string) => void;
};

export const Search = ({ onSearch }: SearchProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (
    e: React.FormEvent | React.MouseEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <Styled.Wrapper
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <Styled.Input
        type="text"
        placeholder="Pesquisar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      ></Styled.Input>
      <Tooltip title="Pesquisar">
        <Styled.Button>
          <SearchIcon fontSize="inherit"></SearchIcon>
        </Styled.Button>
      </Tooltip>
    </Styled.Wrapper>
  );
};
