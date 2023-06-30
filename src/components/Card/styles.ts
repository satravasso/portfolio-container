import styled from 'styled-components';

export const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.header};
  border: ${({ theme }) => theme.colors.borderPrimary};

  width: 100%;
  height: auto;
  border-radius: 30px;

  padding: 1rem;
`;
