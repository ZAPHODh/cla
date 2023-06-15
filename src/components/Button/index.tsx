import * as Styled from './styles';
export type ButtonProps = {
  children: string | React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  rounded?: boolean;
  width?: number | string;
  borderColor?: string;
  fontSize?: string;
  center?: boolean;
  reverse?: boolean;
  disabled?: boolean;
  margin?: string;
};

export const Button = ({
  children,
  onClick,
  rounded = false,
  width = '90%',
  borderColor = 'white',
  fontSize = 'inherit',
  center = true,
  reverse = false,
  disabled,
  margin = '5px 0px',
}: ButtonProps) => {
  return (
    <Styled.Wrapper
      onClick={onClick}
      rounded={rounded}
      width={width}
      borderColor={borderColor}
      fontSize={fontSize}
      center={center}
      reverse={reverse}
      disabled={disabled}
      margin={margin}
    >
      {children}
    </Styled.Wrapper>
  );
};
