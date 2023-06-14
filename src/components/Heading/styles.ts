import styled, { css } from 'styled-components';

export const Title = styled.h1<{ isButton: boolean }>`
   ${({ isButton }) => css`
   &:hover {
        cursor: ${isButton ? 'pointer' : 'default'};
    }
   `}
`;
