import React, { ReactNode, useCallback } from "react";
import { useForm, Mode, Controller } from "react-hook-form";
import * as yup from "yup";

import Button from "../../components/button";

export type FormSchema<T> = {
  [key in keyof T]: yup.Schema<T[key]>;
};

interface FormProps<T = any> {
  mode?: Mode;
  children: ReactNode;
  defaultValues?: T;
  schema?: FormSchema<T>;
  onSubmit: (values: T) => void;
  className?: string;
}

const parseError = (error: any) => ({
  message: error?.message?.toString(),
  hasError: !!error
});

/**
 * Magically binds custom components to the react-hook-form context
 */
export default function Form<T = any>({
  children,
  defaultValues,
  schema,
  mode,
  onSubmit,
  className
}: FormProps<T>) {
  const { control, handleSubmit, errors, formState } = useForm({
    mode,
    defaultValues,
    validationSchema: schema && yup.object(schema)
  });

  const { dirtyFields, dirty, isSubmitted, isSubmitting } = formState;

  const getValidationStatus = useCallback(
    (name: string, hasError: boolean) => {
      if (hasError && isSubmitted) return "error";
      if (!hasError && dirtyFields.has(name)) return "success";
      return "";
    },
    [dirtyFields, isSubmitted]
  );

  const parseChildren = (children: ReactNode, recursionLevel = 0): any[] =>
    React.Children.map(children, (child: any) => {
      const { type, props } = child;
      const { name, children } = props || {};

      // Recursively pass field state to children, allow 1 level of recursion only
      if (children instanceof Array && recursionLevel <= 1) {
        return React.cloneElement(child, {
          ...props,
          children: parseChildren(children, recursionLevel + 1)
        });
      }

      // Share the `isSubmitting` status with the bubmit button
      if (type === Button && props.htmlType === "submit") {
        return React.cloneElement(child, {
          loading: isSubmitting,
          ...props
        });
      }

      // If the `name` prop is set we assume we are dealing with a form field component and we bind
      // it to the current context
      if (name) {
        const { hasError, message } = parseError(errors[name]);
        return (
          <Controller
            validationStatus={getValidationStatus(name, hasError)}
            helpText={hasError && isSubmitted ? message : undefined}
            hasFeedback={dirty}
            {...props}
            as={type}
            control={control}
          />
        );
      }

      return child;
    }) as any[];

  return (
    <form className={className} onSubmit={handleSubmit(onSubmit as any)}>
      {parseChildren(children)}
    </form>
  );
}
