import styled, { css } from 'styled-components';

export const ColorButtonContent = styled.button`
  border: ${({ theme }) => theme.colors.borderPrimary};
  border-radius: 50px;

  background-color: ${({ theme }) => theme.colors.detailColor};
`;

export const Typography = styled.div`
  font-weight: 500;
  padding: 1rem 2rem;
  color: ${({ theme }) => theme.colors.fontColor};
`;
