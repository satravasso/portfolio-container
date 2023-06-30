import styled, { css } from 'styled-components'


export const ColorButtonContent = styled.button`

border: 3px solid #1B2021;
border-radius: 50px;

background-color: ${({ theme }) => theme.colors.detailColor};
`

export const Typography = styled.div`
 font-family: 'Montserrat', sans-serif;
 font-weight: 500;
    padding: 1rem 2rem;
    color: ${({ theme }) => theme.colors.fontColor};
`