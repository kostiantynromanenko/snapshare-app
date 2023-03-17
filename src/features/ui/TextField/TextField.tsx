import React from 'react';
import { useField, FieldHookConfig } from 'formik';
import { ErrorMessage, Input, InputProps, Label } from '@features/ui';

export type TextFieldProps = InputProps &
  FieldHookConfig<string> & {
    label?: string;
  };

export const TextField = ({ label, ...props }: TextFieldProps): JSX.Element => {
  const { id, name } = props;
  const [field, meta] = useField(props);

  return (
    <fieldset>
      {label && <Label htmlFor={id || name}>{label}</Label>}
      <Input {...field} {...props} />
      {meta.touched && meta.error ? <ErrorMessage message={meta.error} /> : null}
    </fieldset>
  );
};
