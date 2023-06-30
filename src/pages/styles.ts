import styled, { css } from 'styled-components';

export const BackgroundImg = styled.div`
  background-image: url('/images/grid.png');
  width: 100%;
  height: 100vh;
  background-repeat: repeat;
  background-size: 40%;
`;

export const Stars = styled.div`
  background-image: url('/images/stars.png');
  width: 100%;
  height: 100vh;
  background-repeat: repeat;
  background-size: 80%;
  position: absolute;
`;

export const Moon = styled.div`
  background-image: url('/images/moon.png');
  width: 100%;
  height: 100vh;
  position: absolute;

  background-repeat: no-repeat;
`;

export const MainPageContent = styled.section`
  display: flex;
  gap: 2rem;
`;

export const CardContainer = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 4.5rem;
  font-weight: 500;
`;

export const Description = styled.span``;
