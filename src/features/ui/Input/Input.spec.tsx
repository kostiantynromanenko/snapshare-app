import React from 'react';
import { act, render, screen } from '@testing-library/react';
import { withSystemTheme } from '@features/theme';
import { Input } from '@features/ui';
import userEvent from '@testing-library/user-event';

describe('Input', () => {
  it('should render with default props', () => {
    // when
    render(withSystemTheme(<Input />));
    const input = screen.getByRole('textbox');

    // then
    expect(input).toHaveClass('ssa-input');
    expect(input).toHaveValue('');
  });

  it('should render with value', () => {
    // given
    const value = 'Testing input';

    // when
    render(withSystemTheme(<Input value={value} />));
    const input = screen.getByRole('textbox');

    // then
    expect(input).toHaveValue(value);
  });

  it('should trigger handler on change', async () => {
    // given
    const user = userEvent.setup();
    const value = 'Testing input';
    const mockChangeHandler = jest.fn();

    // when
    render(withSystemTheme(<Input onChange={mockChangeHandler} />));
    const input = screen.getByRole('textbox');

    // then
    expect(input).toHaveValue('');

    // when
    await act(async () => {
      await user.type(input, value);
    });

    // then
    expect(input).toHaveValue(value);
    expect(mockChangeHandler).toBeCalledTimes(value.length);
  });
});
