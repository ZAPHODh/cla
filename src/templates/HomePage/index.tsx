import * as Styled from './styles';
import { HomeProps } from '@/pages';
import { Table } from '@/components/Table';
import { Menu } from '@/components/Menu';
import { useRouter } from 'next/navigation';
import { Resume } from '@/components/Resume';

export const HomePage = ({ chars }: HomeProps) => {
  const router = useRouter();
  const onButtonClick = () => {
    router.push('/schedule');
  };
  return (
    <Styled.Wrapper>
      <Styled.Container>
        <Menu toWhere="Cadastrar" onButtonClick={onButtonClick}></Menu>
        <Resume chars={chars} />
        <Table table={chars} />
      </Styled.Container>
    </Styled.Wrapper>
  );
};
