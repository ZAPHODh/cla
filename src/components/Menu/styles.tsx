'use client';

import styled, { css } from 'styled-components';

export const Wrapper = styled.header<{ isFixed: boolean }>`
    ${({ isFixed }) => css`
        color: white;
        ${isFixed && 'position: fixed'};
        z-index: 10;
        top: 0;
        left: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color:rgb(46, 179, 250);
        width: 100%;
        height: 70px;
        padding: 10px 30px;
    `}
`;
