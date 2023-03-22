import React from 'react';
import { render, screen } from '@testing-library/react';
import { withSystemTheme } from '@features/theme';
import { ErrorMessage } from '@features/ui';

describe('ErrorMessage', () => {
  it('should render with default props and provided message', () => {
    // given
    const message = 'Testing error message';

    // when
    render(withSystemTheme(<ErrorMessage message={message} />));
    const errorMessage = screen.getByText(message);

    // then
    expect(errorMessage).toHaveClass('ssa-error');
    expect(errorMessage).toHaveStyle({
      'text-align': 'left',
    });
  });

  it('should change align', () => {
    // given
    const align = 'center';

    // when
    render(withSystemTheme(<ErrorMessage message="" align={align} />));
    const errorMessage = screen.getByRole('alert');

    // then
    expect(errorMessage).toHaveStyle({
      'text-align': align,
    });
  });
});
