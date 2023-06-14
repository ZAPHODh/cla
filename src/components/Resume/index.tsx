import { Char } from '@/pages';
import * as Styled from './styles';
import { useEffect, useState } from 'react';
import { Heading } from '../Heading';

export type ResumeProps = {
  chars?: Char[];
};

export const Resume = ({ chars }: ResumeProps) => {
  const [primaryMount, setPrimaryMount] = useState(0);
  const [secondaryMount, setSecondaryMount] = useState(0);
  useEffect(() => {
    const secondary = chars?.filter((char) => char.position === 'Secundário');
    const primary = chars?.filter((char) => char.position === 'Primário');
    if (!secondary || !primary) return;

    setSecondaryMount(secondary.length);
    setPrimaryMount(primary.length);
  }, []);
  return (
    <Styled.Wrapper>
      <Heading as="h3">Resumo</Heading>
      <Styled.P>Total de personagens primários: {primaryMount}</Styled.P>
      <Styled.P>Total de personagens secundários: {secondaryMount}</Styled.P>
    </Styled.Wrapper>
  );
};
