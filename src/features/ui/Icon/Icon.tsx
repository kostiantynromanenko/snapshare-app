import React from 'react';
import { IconImg } from '@features/ui/Icon/styled';
import { PropsWithClassName } from '@features/utils';
import { getComponentClass } from '../utils/classnames';
import { IconCode, ICONS } from './icons';

export type IconProps = {
  code: IconCode;
  size?: number;
} & PropsWithClassName;

export const Icon = ({ code, size = 24, className }: IconProps): JSX.Element => {
  const icon = ICONS.find((item) => item.code === code);

  if (!icon) {
    throw Error(`Cannot find icon file for a given code "${code}"`);
  }

  const { path, alt } = icon;

  return (
    <IconImg
      src={`/icons/${path}`}
      alt={alt}
      $size={size}
      className={getComponentClass('icon', className)}
    />
  );
};
