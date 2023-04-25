import React from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { LogoutButton, StyledHeader } from './styled';

export const Header = (): JSX.Element => {
  const { oktaAuth } = useOktaAuth();

  const handleSignOut = async (): Promise<void> => {
    await oktaAuth.signOut();
  };

  return (
    <StyledHeader>
      <LogoutButton type="button" onClick={handleSignOut} variant="secondary">
        Log out
      </LogoutButton>
    </StyledHeader>
  );
};
