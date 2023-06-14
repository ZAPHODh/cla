'use client';

import styled, { css } from 'styled-components';

export const Wrapper = styled.table`
    ${() => css`
    margin: 20px 0px;
    border-collapse: collapse;
    border-radius: 15px;
    overflow: hidden;
    max-width:728px;
    width: 728px;
    @media (max-width:728px) {
        width: 100vw;
        border-radius: 0px;
    }
    `}
`;

export const TableHeader = styled.th`
    ${() => css`
    padding: 10px;
    background-color: rgb(46, 179, 250);
    font-weight: bold;
    color: white;
    `}
`;
export const TableCell = styled.td`
  padding: 10px;
  text-align: center;
  border-bottom: 1px dotted rgb(159, 221, 255);
`;

export const Tr = styled.tr<{ index: number }>`
    ${({ index }) => css`
        background-color: ${
          index % 2 === 0 ? 'transparent' : 'rgba(159, 221, 255,0.5)'
        };
    `}
`;
export const Thead = styled.thead`
    width: 100%;
`;
export const SearchContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    @media (max-width:728px) {
        justify-content: flex-start;
        padding: 0px 5px;
    }
`;

export const Noresults = styled.div`
    color: black;
`;
