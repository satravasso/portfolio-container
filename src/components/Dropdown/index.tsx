import DropdownProps from './interfaces';
import * as S from './styles';
import { useState } from 'react';

const Dropdown = (props: DropdownProps) => {
  const { children, open } = props;

  return (
    <>
      {open && (
        <S.DropdownContainer>
          <div style={{ padding: '2rem', whiteSpace: 'nowrap' }}>{children}</div>
        </S.DropdownContainer>
      )}
    </>
  );
};

export default Dropdown;
