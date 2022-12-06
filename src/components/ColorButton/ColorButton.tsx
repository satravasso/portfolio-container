import { useState } from 'react';
import { ColorButtonContent } from './styles';

const ColorButton = () => {
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
      ></div>
      <nav className={`circular-menu ${expand ? 'expand' : ''}`} id="circular-menu">
        <ul>
          <li>
            <a className="icon-heart" href="#">
              b
            </a>
          </li>
          <li>
            <a className="icon-cart" href="#">
              a
            </a>
          </li>
          <li>
            <a className="icon-tag" href="#">
              c
            </a>
          </li>
          <li>
            <a className="icon-date" href="#">
              d
            </a>
          </li>
        </ul>
      </nav>
    </ColorButtonContent>
  );
};

export default ColorButton;
