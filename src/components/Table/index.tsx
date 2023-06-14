import { Char } from '@/pages';
import * as Styled from './styles';
import { v4 as uuid } from 'uuid';

export type TableProps = {
  table: Char[];
};

export const Table = ({ table = [] }: TableProps) => {
  return (
    <Styled.Wrapper>
      <thead>
        <tr>
          <Styled.TableHeader>Nome</Styled.TableHeader>
          <Styled.TableHeader>Posição</Styled.TableHeader>
        </tr>
      </thead>
      <tbody>
        {table.map((char, index) => (
          <Styled.Tr key={uuid()} index={index}>
            <Styled.TableCell>{char.charName}</Styled.TableCell>
            <Styled.TableCell>{char.position}</Styled.TableCell>
          </Styled.Tr>
        ))}
      </tbody>
    </Styled.Wrapper>
  );
};
