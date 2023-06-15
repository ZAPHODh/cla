import styled, { css } from 'styled-components';
type Button = {
  rounded: boolean;
  width: number | string;
  borderColor: string;
  fontSize: string;
  center: boolean;
  reverse: boolean;
  margin: string;
};
export const Wrapper = styled.button<Button>`
    ${({ rounded, width, fontSize, center, reverse, margin }) => css`
        margin: ${margin};
        width: ${width};
        padding: 10px;
        display: flex;
        align-items: center;
        font-size: ${fontSize};
        justify-content: ${center ? 'center' : 'space-between'};
        border-radius: ${!rounded ? '10px' : '50%'};
        color: ${reverse ? 'white' : 'black'};
        transition: all 0.2s;
        background-color: ${reverse ? 'rgb(131, 205, 244)' : 'white'};
        border: 1px solid rgb(131, 205, 244);
        &:hover {
            cursor: pointer;
            border: 1px solid rgb(46, 179, 250);
            background-color: rgb(46, 179, 250);
            color: white;
        }
        &:disabled{
            cursor:no-drop ;
            &:hover{
                border: 1px solid rgb(155, 215, 247);
                background-color: rgb(155, 215, 247);
                color: white;
            }
        }
    `}
`;
