import classNames from 'classnames';
import { ThemeVariant } from '@features/theme';

const CLASSNAME_PREFIX = 'ssa-';

export const getComponentClass = (
  component: string,
  customClasses: string | undefined,
  variant?: ThemeVariant
): string => {
  const componentClass = `${CLASSNAME_PREFIX}${component}`;
  return classNames(
    componentClass,
    {
      [`${componentClass}_${variant}`]: !!variant
    },
    customClasses
  );
};
