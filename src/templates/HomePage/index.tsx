import * as Styled from './styles';
import { HomeProps } from '@/pages';
import { Table } from '@/components/Table';
import { Menu } from '@/components/Menu';
import { useRouter } from 'next/navigation';
import { Resume } from '@/components/Resume';
import { useState } from 'react';

export const HomePage = ({ chars }: HomeProps) => {
  const [filterModal, setFilterModal] = useState(false);
  const router = useRouter();
  const onButtonClick = () => {
    router.push('/schedule');
  };
  const onFilterClick = () => {
    setFilterModal((previous) => !previous);
    alert('Em construção');
    console.log(filterModal);
  };
  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Menu toWhere="Cadastrar" onButtonClick={onButtonClick}></Menu>
        <Resume chars={chars} />
        <Table table={chars} onFilterClick={onFilterClick} />
      </Styled.Container>
    </Styled.Wrapper>
  );
};
