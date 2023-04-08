import React from 'react';
import { useField, FieldHookConfig } from 'formik';
import { ErrorMessage, Input, InputProps, Label } from '@features/ui';
import { getComponentClass } from '@features/ui/utils/classnames';

export type TextFieldProps = InputProps &
  FieldHookConfig<string> & {
    label?: string;
  };

export const TextField = ({ label, className, ...props }: TextFieldProps): JSX.Element => {
  const { id, name } = props;
  const [field, meta] = useField(props);

  return (
    <fieldset className={getComponentClass('text-field', className)}>
      {label && <Label htmlFor={id || name}>{label}</Label>}
      <Input {...field} {...props} />
      {meta.touched && meta.error ? <ErrorMessage message={meta.error} /> : null}
    </fieldset>
  );
};
