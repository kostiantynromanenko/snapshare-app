import classNames from 'classnames';
import { ThemeVariant } from '@features/theme';

const classNamePrefix = 'ssa-';

export const getComponentClass = (
  component: string,
  customClasses: string | undefined,
  variant?: ThemeVariant,
): string => {
  const componentClass = `${classNamePrefix}${component}`;
  return classNames(
    componentClass,
    {
      [`${componentClass}_${variant}`]: !!variant,
    },
    customClasses,
  );
};
