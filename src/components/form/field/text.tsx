import React from "react";

import FormField, { FormFieldProps } from "../../../components/form/field";
import TextField, { TextInputProps } from "../../../components/input/text";

type FormFieldTextProps = FormFieldProps & TextInputProps;

export default function FormFieldText(
  props: Omit<FormFieldTextProps, "children">
) {
  return (
    <FormField {...props}>
      <TextField {...props} />
    </FormField>
  );
}
