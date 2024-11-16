import styled from 'styled-components';
import { ColorOptionProps } from './interfaces';

export const ColorButtonContent = styled.button`
  border: ${({ theme }) => theme.colors.borderPrimary};
  border-radius: 50px;

  background-color: ${({ theme }) => theme.colors.secondary};
  cursor: pointer;
`;

export const Title = styled.div`
  font-weight: 500;
  padding: 1rem 2rem;
  color: ${({ theme }) => theme.colors.fontColor};
`;

export const DropdownWrapper = styled.div`
  position: relative;
`;

export const ColorThemeTitles = styled.div`
  border-bottom: ${({ theme }) => theme.colors.borderSecondary};
`;

export const ColorContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 1rem;
  gap: 1rem;;
`;
export const ColorOption = styled.div<ColorOptionProps>`
  border-radius: 100px;
  border-color: 2px solid #1b2021;
  width: 50px;
  background: ${(props) => props.$color};
  height: 50px;
  cursor: pointer;
`;
export const LanguageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 1rem;
  gap: 1rem;
`;
export const LanguageOption = styled.div`
  border-radius: 50px;
  border: 2px solid #1b2021;
  padding: 1rem;

  cursor: pointer;
`;
