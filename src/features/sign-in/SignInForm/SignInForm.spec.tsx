import React from 'react';
import { render, screen } from '@testing-library/react';
import { withSystemTheme } from '@features/theme';
import { SignInForm } from './SignInForm';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe('SignInForm', () => {
  it('should render', () => {
    // when
    render(withSystemTheme(<SignInForm data-test-id="sign-in-form" />));
    const form = screen.getByRole('form');

    // then
    expect(form).toBeInTheDocument();
  });
});
