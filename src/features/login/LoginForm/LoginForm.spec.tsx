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
    t: (str: string) => str
  })
}));

jest.mock('../../../config/i18n', () => jest.fn());
jest.mock('@config', () => ({
  OKTA_CONFIG: {},
  FEATURES_CONFIG: {}
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
