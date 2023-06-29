import { useState } from 'react';
import { ColorButtonContent } from './styles';
import { Logo } from './logo';
import { PalletColorProps } from './interfaces';
import { pink, yellow } from '../../styles/Theme/themes.styled';

const ColorButton = ({ setSelectedTheme }: PalletColorProps) => {
  const [active, setActive] = useState(false);
  const [expand, setExpand] = useState(false);

  return (
    <ColorButtonContent>
      <div
        className={`float-button ${active ? 'active' : ''}`}
        id="float-button"
        onClick={() => {
          setActive(!active);
          setExpand(!expand);
        }}
      >
        <Logo />
      </div>
      <nav className={`circular-menu ${expand ? 'expand' : ''}`} id="circular-menu">
        <ul>
          <li>
            <div onClick={() => setSelectedTheme(yellow)}>
              <svg width="25" height="25" viewBox="0 0 35 35" xmlns="http://www.w3.org/2000/svg">
                <circle
                  cx="17.5"
                  cy="17.5"
                  r="14"
                  stroke={yellow.colors.header}
                  stroke-width="6"
                  fill={yellow.colors.header}
                />
              </svg>
            </div>
          </li>
          <li>
            <div onClick={() => setSelectedTheme(pink)}>
              <svg width="25" height="25" viewBox="0 0 35 35" xmlns="http://www.w3.org/2000/svg">
                <circle
                  cx="17.5"
                  cy="17.5"
                  r="14"
                  stroke={pink.colors.header}
                  stroke-width="6"
                  fill={pink.colors.header}
                />
              </svg>
            </div>
          </li>
          <li>
            <div onClick={() => setSelectedTheme(yellow)}>
              <svg width="25" height="25" viewBox="0 0 35 35" xmlns="http://www.w3.org/2000/svg">
                <circle
                  cx="17.5"
                  cy="17.5"
                  r="14"
                  stroke={yellow.colors.header}
                  stroke-width="6"
                  fill={yellow.colors.header}
                />
              </svg>
            </div>
          </li>
          <li>
            <div onClick={() => setSelectedTheme(pink)}>
              <svg width="25" height="25" viewBox="0 0 35 35" xmlns="http://www.w3.org/2000/svg">
                <circle
                  cx="17.5"
                  cy="17.5"
                  r="14"
                  stroke={pink.colors.header}
                  stroke-width="6"
                  fill={pink.colors.header}
                />
              </svg>
            </div>
          </li>
        </ul>
      </nav>
    </ColorButtonContent>
  );
};

export default ColorButton;
