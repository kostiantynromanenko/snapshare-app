import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { withSystemTheme } from '@features/theme';
import { Button } from '@features/ui';

describe('Button', () => {
  it('should render with default props', () => {
    // when
    render(withSystemTheme(<Button />));
    const button = screen.getByRole('button');

    // then
    expect(button).toHaveTextContent('');
    expect(button).toHaveAttribute('type', 'button');
    expect(button).toHaveClass('ssa-btn ssa-btn_primary');
    expect(button).toBeEnabled();
    expect(within(button).queryByRole('alert')).not.toBeInTheDocument();
    expect(button).toHaveStyle({
      width: 'auto'
    });
  });

  it('should render with text', () => {
    // given
    const text = 'Testing button';

    // when
    render(withSystemTheme(<Button>{text}</Button>));
    const button = screen.getByText(text);

    // then
    expect(button).toBeInTheDocument();
  });

  it('should render with custom class', () => {
    // when
    render(withSystemTheme(<Button className="testing-btn" />));
    const button = screen.getByRole('button');

    // then
    expect(button).toHaveClass('ssa-btn ssa-btn_primary testing-btn');
  });

  it('should render with full width', () => {
    // when
    render(withSystemTheme(<Button fullWidth />));
    const button = screen.getByRole('button');

    // then
    expect(button).toHaveStyle({
      width: '100%'
    });
  });

  it('should be disabled and have spinner when loading', () => {
    // when
    render(withSystemTheme(<Button loading />));
    const button = screen.getByRole('button');

    // then
    expect(button).toBeDisabled();
    expect(within(button).getByRole('alert')).toHaveClass('ssa-spinner ssa-spinner_primary');
  });

  it('should trigger handler on click', async () => {
    // given
    const user = userEvent.setup();
    const mockClickHandler = jest.fn();

    // when
    render(withSystemTheme(<Button onClick={mockClickHandler} />));
    await user.click(screen.getByRole('button'));

    // then
    expect(mockClickHandler).toHaveBeenCalledTimes(1);
  });
});
