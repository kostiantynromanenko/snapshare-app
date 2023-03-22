import React from 'react';
import { render, screen } from '@testing-library/react';
import { withSystemTheme } from '@features/theme';
import { Spinner } from '@features/ui';

describe('Spinner', () => {
  it('should render with default props', () => {
    // when
    render(withSystemTheme(<Spinner />));
    const spinner = screen.getByRole('alert');

    // then
    expect(spinner).toHaveClass('ssa-spinner ssa-spinner_primary');
    expect(spinner).toHaveStyle({
      width: '64px',
      height: '64px',
      'border-width': '8px',
    });
  });

  it('should render with custom size and thickness', () => {
    // given
    const size = 14;
    const thickness = 4;

    // when
    render(withSystemTheme(<Spinner size={size} thickness={thickness} />));
    const spinner = screen.getByRole('alert');

    // then
    expect(spinner).toHaveStyle({
      width: `${size}px`,
      height: `${size}px`,
      'border-width': `${thickness}px`,
    });
  });
});
