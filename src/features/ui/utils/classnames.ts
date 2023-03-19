import classNames from 'classnames';

const classNamePrefix = 'ssa-';

export const getComponentClass = (component: string, customClass?: string): string =>
  classNames(`${classNamePrefix}${component}`, customClass);
