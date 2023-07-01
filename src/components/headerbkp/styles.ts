import styled from 'styled-components';

export const HeaderContentainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: block;
  width: 100%;
  height: 5rem;
  margin-right: 0;
  margin-left: 0;
  padding-left: 0;
  backdrop-filter: blur(4px);
  border-bottom: 1px solid rgba(0, 5, 85, 0.1);
  z-index: 1000;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: center;
  margin-right: auto;
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
