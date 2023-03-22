import React from 'react';
import { withSystemTheme } from '@features/theme';
import { render } from '@testing-library/react';
import { SignIn } from '@features/sign-in';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('SignIn', () => {
  it('should render', () => {
    // when
    const { container } = render(withSystemTheme(<SignIn />));

    // then
    expect(container).toBeInTheDocument();
  });
});
