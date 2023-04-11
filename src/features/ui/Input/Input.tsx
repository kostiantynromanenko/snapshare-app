import React, { ChangeEvent, useEffect, useState } from 'react';
import { StyledInput } from './styled';
import { getComponentClass } from '../utils/classnames';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  fullWidth?: boolean;
  hasError?: boolean;
};

export const Input = ({
  value: propsValue,
  onChange,
  className,
  ...props
}: InputProps): JSX.Element => {
  const [value, setValue] = useState<typeof propsValue>('');

  useEffect(() => {
    setValue(propsValue || '');
  }, [propsValue]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);

    if (onChange) {
      onChange(event);
    }
  };

  return (
    <StyledInput
      value={value}
      onChange={handleChange}
      className={getComponentClass('input', className)}
      {...props}
    />
  );
};
