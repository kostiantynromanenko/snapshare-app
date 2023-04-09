import React from 'react';
import { StyledCopyright } from '@features/layout/Copyright/styled';
import { useTranslation } from 'react-i18next';

export const Copyright = (): JSX.Element => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return <StyledCopyright>{t('copyright', { currentYear })}</StyledCopyright>;
};
