import React, { ReactNode } from 'react';
import { Form } from 'antd';

export interface FormFieldProps {
  className?: string;
  children: ReactNode;
  label?: string;
  validationStatus?: 'success' | 'warning' | 'error' | 'validating' | '';
  helpText?: string;
  hasFeedback?: boolean;
}

export type FormFieldElement<T> = T & Omit<FormFieldProps, 'children'>;

export default function FormField({
  className,
  children,
  label,
  validationStatus = '',
  helpText,
  hasFeedback,
}: FormFieldProps) {
  return (
    <Form.Item
      colon={false}
      className={className}
      hasFeedback={hasFeedback}
      validateStatus={validationStatus}
      label={label}
      help={helpText}
    >
      {children}
    </Form.Item>
  );
}
