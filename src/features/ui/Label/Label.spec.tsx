import React from 'react';
import { render, screen } from '@testing-library/react';
import { withSystemTheme } from '@features/theme';
import { Label } from './Label';

describe('Label', () => {
  it('should render with default props and provided text', () => {
    // given
    const text = 'Testing label';

    // when
    render(withSystemTheme(<Label>{text}</Label>));
    const label = screen.getByText(text);

    // then
    expect(label).toBeInTheDocument();
  });
});
