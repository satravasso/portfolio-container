import styled, { css } from 'styled-components'

function createCSS() {
    let styles = '';
    const elements = 4;

  
    for (let i = 0; i <= elements; i += 1) {
       styles += `
       .circular-menu li:nth-child(${i}) {
        transform: rotate(-${(90 / (elements - 1)) * (i - 1)}deg);
            a { 
            transform: rotate(${(90 / (elements - 1)) * (i - 1)}deg)  
            }
         }
       `
    }
  
    return css`${styles}`;
  }

export const ColorButtonContent = styled.div`

width: 100%;
background-color: #FFDEDE;
${createCSS}

.float-button {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: #BA7575;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  z-index: 100;
  transition: transform var(--animation-time);
  cursor: pointer;
  
  &.pulsed {
    transform: rotate(45deg);
    background: darken(#BA7575,15)
  }
  
  &::before,
  &::after {
    position: absolute;
    width: 40%;
    height: 4%;
    content: '';
    top: 49%;
    left: 30%;
    background: #fff;
  }
  
  &::after {
    transform: rotate(90deg);
  }
}

.circular-menu {
  position: absolute;
  width: 16rem;
  height: 16rem;
  background: #BA7575;
  bottom: -5.5rem;
  right: -5.5rem;
  border-radius: 50%;
  transform: scale(0) rotate(-180deg);
  opacity: 0;
  transition: all var(--animation-time);
  z-index: 50;

  &.expand {
    transform: scale(1) rotate(0);
    opacity: 1;
  }
  
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: 1.5rem;
  }
  
  a {
    text-decoration: none;
    display: block;
    color: #fff;
  }
  
  li {
    position: absolute;
    width: 2rem;
    top: 2rem;
    left: calc(50% - 1rem);
    transform-origin: center 6rem;
    text-align: center;
  }

  
}



`
