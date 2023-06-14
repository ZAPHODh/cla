import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
    ${() => css`
        overflow: hidden;
        width: 100%;
        display: flex;
        min-height: 100vh;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
        background-color: white;
    `}
`;
export const Container = styled.div`
    max-width: 728px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media (max-width:728px) {
        max-width: 100vw;
       
    }
`;
