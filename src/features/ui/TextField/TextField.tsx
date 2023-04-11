import React from 'react';
import { FieldHookConfig, useField } from 'formik';
import { ErrorMessage, Input, InputProps, Label } from '@features/ui';
import { getComponentClass } from '../utils/classnames';

export type TextFieldProps = InputProps &
  FieldHookConfig<string> & {
    label?: string;
  };

export const TextField = ({ label, className, ...props }: TextFieldProps): JSX.Element => {
  const { id, name } = props;
  const [field, meta] = useField(props);
  const { error } = meta;
  const hasError = meta.touched && !!error;

  return (
    <fieldset className={getComponentClass('text-field', className)}>
      {label && <Label htmlFor={id || name}>{label}</Label>}
      <Input {...field} {...props} hasError={hasError} />
      {hasError ? <ErrorMessage message={error} /> : null}
    </fieldset>
  );
};
