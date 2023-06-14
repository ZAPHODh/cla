import { Char } from '@/pages';
import * as Styled from './styles';
import { v4 as uuid } from 'uuid';
import { Search } from '../Search';
import { useState } from 'react';

export type TableProps = {
  table: Char[];
};

export const Table = ({ table = [] }: TableProps) => {
  const [displayedChars, setDisplayedChars] = useState<Char[]>(table);
  const [noResults, setNoResults] = useState(false);
  const handleSearch = (term: string) => {
    const FilteredChars = table.filter((char) =>
      char.charName.toLowerCase().includes(term.toLowerCase()),
    );
    setDisplayedChars(FilteredChars);
    if (FilteredChars.length === 0) {
      setNoResults(true);
    } else {
      setNoResults(false);
    }
  };

  return (
    <>
      <Styled.SearchContainer>
        <Search onSearch={handleSearch}></Search>
      </Styled.SearchContainer>
      <Styled.Wrapper>
        <thead>
          <tr>
            <Styled.TableHeader>Nome</Styled.TableHeader>
            <Styled.TableHeader>Posição</Styled.TableHeader>
          </tr>
        </thead>
        {
          <tbody>
            {displayedChars.map((char, index) => (
              <Styled.Tr key={uuid()} index={index}>
                <Styled.TableCell>{char.charName}</Styled.TableCell>
                <Styled.TableCell>{char.position}</Styled.TableCell>
              </Styled.Tr>
            ))}
          </tbody>
        }
      </Styled.Wrapper>
      {noResults && (
        <Styled.Noresults> Nenhum personagem encontrado</Styled.Noresults>
      )}
    </>
  );
};
