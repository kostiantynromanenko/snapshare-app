import React from 'react';
import { PropsWithClassName } from '@features/utils';
import { availableLanguages } from '@config';
import { Switcher, SwitcherLabel, SwitcherRadio } from './styled';

export interface LanguageSwitcherProps extends PropsWithClassName {}

export const LanguageSwitcher = ({ className }: LanguageSwitcherProps): JSX.Element => {
  const getOptionId = (language: string): string => `lang-option-${language}`;

  const languageOptions = availableLanguages.map((language) => {
    const optionId = getOptionId(language);

    return (
      <fieldset key={optionId}>
        <SwitcherRadio type="radio" name="lang" id={optionId} value={language} />
        <SwitcherLabel htmlFor={optionId}>{language.toLocaleUpperCase()}</SwitcherLabel>
      </fieldset>
    );
  });

  return <Switcher className={className}>{languageOptions}</Switcher>;
};
