'use client';

import styled, { css } from 'styled-components';
import { Title } from '../Heading/styles';
import { Wrapper as Button } from '../Button/styles';
export const Wrapper = styled.section`
    ${() => css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    min-height: 100vh;
    width: 100vw;
    background-color: #DDDDDD;
    `}
`;
export const Form = styled.form`
    ${() => css`
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        width: 500px;
        background-color: white;
        border-radius: 16px;
        border: 1px solid #cccccc;
        padding: 30px;

        >${Title}{
            margin: 15px 0px;
        }

        @media (max-width: 726px) {
         width: 100vw;
         min-height: 100vh;
         border-radius: 0px;
         justify-content: center;
        }
    `}
`;
export const ButtonContainer = styled.div`
    ${() => css`
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        @media (max-width: 726px) {
         justify-content: center;
         >${Button}{
            width: 100%;
         }
        }
    `}
`;

export const RadioContainer = styled.div`
    min-width: 170px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const Label = styled.label`
    margin: 10px 0px 5px 0px;
`;
