import React from 'react';
import { PropsWithClassName } from '@features/utils';
import { useTranslation } from 'react-i18next';
import { AVAILABLE_LANGUAGES } from '@config';
import { Switcher, SwitcherIcon, SwitcherOption, SwitcherLabel, SwitcherRadio } from './styled';

export interface LanguageSwitcherProps extends PropsWithClassName {}

export const LanguageSwitcher = ({ className }: LanguageSwitcherProps): JSX.Element => {
  const { i18n } = useTranslation();
  const getOptionId = (language: string): string => `lang-option-${language}`;

  const languageOptions = AVAILABLE_LANGUAGES.map(({ lang, icon }) => {
    const optionId = getOptionId(lang);

    return (
      <SwitcherOption key={optionId}>
        <SwitcherRadio
          type="radio"
          name="lang"
          onClick={() => i18n.changeLanguage(lang)}
          id={optionId}
          value={lang}
          defaultChecked={i18n.resolvedLanguage === lang}
        />
        <SwitcherLabel htmlFor={optionId}>
          <SwitcherIcon code={icon} />
          {lang.toLocaleUpperCase()}
        </SwitcherLabel>
      </SwitcherOption>
    );
  });

  return <Switcher className={className}>{languageOptions}</Switcher>;
};
