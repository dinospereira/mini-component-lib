import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    height: 24,
    borderThickness: 1,
    icon: 16,
    fontSize: 14,
  },
  large: {
    height: 36,
    borderThickness: 2,
    icon: 24,
    fontSize: 18,
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...delegated
}) => {
  const styles = STYLES[size];

  return (
    <InputWrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <InputIcon id={icon} size={styles.icon} />
      <Input style={{
        '--fontSize': styles.fontSize/16 + 'rem',
        '--width': width + 'px',
        '--borderThickness': styles.borderThickness + 'px',
        '--height': styles.height + 'px',
      }} type="text" {...delegated} />
    </InputWrapper>
  );
};

const InputWrapper = styled.label`
  display: block;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;
const Input = styled.input`
  height: var(--height);
  width: var(--width);
  padding-left: var(--height);
  font-size: var(--fontSize);
  border: none;
  border-bottom: var(--borderThickness) solid;
  color: inherit;
  font-weight: 700;

  &::placeholder {
    color: ${COLORS.gray300};
    font-weight: 400;
  }

  &:focus {
    outline-offset: 4px;
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

const InputIcon = styled(Icon)`
  position: absolute;
  height: ${p => p.size}px;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto 0;
`;

export default IconInput;
