import React from 'react';
import { StyledCopyright } from '@features/layout/Copyright/styled';

export const Copyright = (): JSX.Element => {
  const currentYear = new Date().getFullYear();
  return <StyledCopyright>&copy; Copyright {currentYear}, Example Corporation</StyledCopyright>;
};
