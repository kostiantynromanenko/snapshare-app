import React from 'react';
import { Label as StyledLabel } from './styled';

export type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  children?: string;
};

export const Label = ({ children, ...props }: LabelProps): JSX.Element => (
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
  <StyledLabel {...props}>{children}</StyledLabel>
);
