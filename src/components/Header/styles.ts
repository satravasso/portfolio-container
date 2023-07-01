import styled from 'styled-components';

export const HeaderContentainer = styled.div`
  width: 100%;
  border: ${({ theme }) => theme.colors.borderPrimary};
  border-radius: 50px;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const HeaderItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`;

export const HeaderLine = styled.div`
  border-bottom: 2px solid #1b2021;
  width: 20%;
`;

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    font-weight: 500;
    padding: 2rem;
    color: ${({ theme }) => theme.colors.fontColor};
  }

  .btn-header {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.fontColor};
    text-decoration: none;
    position: relative;
    display: inline-block;
    height: 100%;
    &:after {
      content: '';
      display: block;
      position: absolute;
    }
    &:before {
      content: '';
      display: block;
      position: absolute;
    }

    &:after {
      transform-origin: right;
      transform: scaleX(0);
      bottom: 0;
      height: 2px;
      width: 100%;
      background-color: ${({ theme }) => theme.colors.secondary};

      transition: transform 0.6s cubic-bezier(0.55, 0, 0.1, 1);
    }

    &:hover {
      &:after {
        transform: scaleX(1);
        transform-origin: left;
        transition: transform 0.6s cubic-bezier(0.55, 0, 0.1, 1);
      }
    }
  }
`;
