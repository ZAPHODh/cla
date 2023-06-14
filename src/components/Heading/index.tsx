import * as Styled from './styles';
export type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type HeadingProps = {
  children: React.ReactNode | string;
  as?: HeadingType;
  isButton?: boolean;
  onClick?: () => void;
};
import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({ subsets: ['latin'], weight: '800' });
export const Heading = ({
  children,
  as = 'h1',
  isButton = false,
  onClick,
}: HeadingProps) => {
  return (
    <Styled.Title
      as={as}
      onClick={onClick}
      isButton={isButton}
      className={montserrat.className}
    >
      {children}
    </Styled.Title>
  );
};
