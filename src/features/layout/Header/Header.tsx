import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@features/auth';
import { Header as StyledHeader, LogoutButton } from './styled';

export const Header = (): JSX.Element => {
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async (): Promise<void> => {
    const result = await signOut();

    if (result.success) {
      navigate('/login');
    }
  };

  return (
    <StyledHeader>
      <LogoutButton type="button" onClick={handleSignOut} variant="secondary">
        Log out
      </LogoutButton>
    </StyledHeader>
  );
};
