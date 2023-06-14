import * as Styled from './styles';

import { Button } from '../Button';
import { useRouter } from 'next/navigation';
import { Heading } from '../Heading';
import { useEffect, useState } from 'react';
export type MenuProps = {
  toWhere: string;
  onButtonClick: () => void;
};
export const Menu = ({ toWhere, onButtonClick }: MenuProps) => {
  const [isFixed, setIsFixed] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    router.push('/');
  };

  return (
    <Styled.Wrapper isFixed={isFixed}>
      <Heading as="h2" isButton={true} onClick={handleLogoClick}>
        FairyTail
      </Heading>
      <Button width={'90px'} onClick={onButtonClick}>
        {toWhere}
      </Button>
    </Styled.Wrapper>
  );
};
