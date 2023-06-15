import { Char } from '@/pages';
import * as Styled from './styles';
import { v4 as uuid } from 'uuid';
import { Search } from '../Search';
import { useEffect, useState } from 'react';
import { Button } from '../Button';

export type TableProps = {
  table: Char[];
  onFilterClick: () => void;
  filters?: {
    position?: string;
    classChar?: string;
    damage?: number;
    survivor?: number;
  };
};

export const Table = ({ table = [], onFilterClick, filters }: TableProps) => {
  const [displayedChars, setDisplayedChars] = useState<Char[]>(table);
  const [noResults, setNoResults] = useState(false);
  const applyFilters = (chars: Char[]) => {
    let filteredChars = chars;

    if (filters?.classChar) {
      filteredChars = filteredChars.filter(
        (char) =>
          char.classChar.toLowerCase() === filters.classChar?.toLowerCase(),
      );
    }

    if (filters?.damage !== undefined) {
      filteredChars = filteredChars.filter(
        (char) => char.damage !== undefined && char.damage! >= filters.damage!,
      );
    }

    if (filters?.position) {
      filteredChars = filteredChars.filter(
        (char) =>
          char.position.toLowerCase() === filters.position?.toLowerCase(),
      );
    }

    if (filters?.survivor !== undefined) {
      filteredChars = filteredChars.filter(
        (char) =>
          char.survivor !== undefined && char.survivor! >= filters.survivor!,
      );
    }

    return filteredChars;
  };

  const handleSearch = (term: string) => {
    const filteredChars = table.filter((char) =>
      char.charName.toLowerCase().includes(term.toLowerCase()),
    );

    const displayedChars = applyFilters(filteredChars);

    setDisplayedChars(displayedChars);
    setNoResults(displayedChars.length === 0);
  };

  useEffect(() => {
    const filteredChars = applyFilters(table);
    setDisplayedChars(filteredChars);
    setNoResults(filteredChars.length === 0);
  }, [filters]);

  return (
    <>
      <Styled.FilterContainer>
        <Button
          width={'60px'}
          fontSize="10px"
          margin="5px 10px"
          onClick={onFilterClick}
        >
          FILTROS
        </Button>
        <Search onSearch={handleSearch}></Search>
      </Styled.FilterContainer>
      <Styled.Wrapper>
        <thead>
          <tr>
            <Styled.TableHeader>Nome</Styled.TableHeader>
            <Styled.TableHeader>Chi</Styled.TableHeader>
            <Styled.TableHeader>Ceu</Styled.TableHeader>
            <Styled.TableHeader>Classe</Styled.TableHeader>
            <Styled.TableHeader>Sobre.</Styled.TableHeader>
            <Styled.TableHeader>Dano</Styled.TableHeader>
            <Styled.TableHeader>Posição</Styled.TableHeader>
          </tr>
        </thead>
        {
          <tbody>
            {displayedChars.map((char, index) => (
              <Styled.Tr key={uuid()} index={index}>
                <Styled.TableCell>{char.charName}</Styled.TableCell>
                <Styled.TableCell>{char.chi}</Styled.TableCell>
                <Styled.TableCell>{char.sky}</Styled.TableCell>
                <Styled.TableCell>{char.classChar}</Styled.TableCell>
                <Styled.TableCell>{char.survivor}</Styled.TableCell>
                <Styled.TableCell>{char.damage}</Styled.TableCell>
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
