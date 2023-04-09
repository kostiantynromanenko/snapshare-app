import React from 'react';
import { render, screen } from '@testing-library/react';
import { withSystemTheme } from '@features/theme';
import { SignInForm } from './SignInForm';

jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn()
}));

jest.mock('@okta/okta-react', () => ({
  useOktaAuth: () => jest.fn()
}));

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (str: string) => str,
    i18n: {
      changeLanguage: () => new Promise(() => {})
    }
  })
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
