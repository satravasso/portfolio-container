import styled from 'styled-components';
import { DropdownStylesProps } from './interfaces';

export const DropdownContainer = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  border: ${({ theme }) => theme.colors.borderPrimary};
  background: #ffff;
  border-radius: 50px;
  list-style: none;
  padding: 0;
  margin-top: 0.3rem;
`;
