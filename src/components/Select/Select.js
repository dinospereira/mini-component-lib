import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <CustomSelect>
        {displayedValue ? displayedValue : 'Select'} <CustomSelectIcon id="chevron-down" size={24} strokeWidth={1} />
      </CustomSelect>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const CustomSelect = styled.div`
  color: ${COLORS.gray700};
  font-size: ${16 / 16}rem;
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;
  padding: 12px 16px;
  padding-right: 52px;

  ${NativeSelect}:focus + & {
    outline: 1 dotted #212121;
    outline: 5px auto -webkit-focus-ring-color;
  }

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const CustomSelectIcon = styled(Icon)`
  position: absolute;
  right: 10px;
  top: 0;
  bottom: 0;
  margin: auto 0;
  pointer-events: none;
`;

export default Select;
