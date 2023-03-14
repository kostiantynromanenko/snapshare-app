import React, { ChangeEvent, useEffect, useState } from 'react';
import { Input as StyledInput } from './styled';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  fullWidth?: boolean;
};

export const Input = ({ value: propsValue, onChange, ...props }: InputProps): JSX.Element => {
  const [value, setValue] = useState<typeof propsValue>('');

  useEffect(() => {
    setValue(propsValue);
  }, [propsValue]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
    if (onChange) {
      onChange(event);
    }
  };

  return <StyledInput value={value} onChange={handleChange} {...props} />;
};
