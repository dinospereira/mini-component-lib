import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    height: 8,
    padding: 0,
    borderRadius: 4,
  },
  medium: {
    height: 12,
    padding: 0,
    borderRadius: 4,
  },
  large: {
    height: 16,
    padding: 4,
    borderRadius: 8,
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size];
  if (!styles) throw new Error(`Unkown size passed to ProgressBar: ${size}`);
  return (
    <ProgressWrapper
      role="progressbar"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow={value}
      style={{
        '--padding': styles.padding + 'px',
        '--borderRadius': styles.borderRadius + 'px'
      }}>
      <VisuallyHidden>{value}%</VisuallyHidden>
      <BarWrapper>
        <Bar
          value={value}
          style={{
            '--height': styles.height + 'px',
          }}>
        </Bar>
      </BarWrapper>
    </ProgressWrapper>
  );
};

const ProgressWrapper = styled.div`
  width: 100%;
  padding: var(--padding);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: var(--borderRadius);
`;

const BarWrapper = styled.div`
  overflow: hidden;
  border-radius: 4px;
`;

const Bar = styled.div`
  height: var(--height);
  width: ${p => p.value}%;
  background-color: ${COLORS.primary};
  border-radius: 4px 0 0 4px;
`;

export default ProgressBar;
