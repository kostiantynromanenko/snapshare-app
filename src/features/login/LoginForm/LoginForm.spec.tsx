import React from 'react';
import { render, screen } from '@testing-library/react';
import { withSystemTheme } from '@features/theme';
import { LoginForm } from './LoginForm';

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

describe('LoginForm', () => {
  it('should render', () => {
    // when
    render(withSystemTheme(<LoginForm />));
    const form = screen.getByRole('form');

    // then
    expect(form).toBeInTheDocument();
  });
});
