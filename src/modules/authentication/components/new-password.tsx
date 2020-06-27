import React from "react";
import * as yup from "yup";
import { LockOutlined } from "@ant-design/icons";

import { NewPasswordModel } from "../../authentication/types";
import Form, { FormSchema } from "../../../components/form";
import Button from "../../../components/button";
import FormFieldText from "../../../components/form/field/text";

interface NewPasswordFormProps {
  onSubmit: (data: NewPasswordModel) => void;
}

const newPasswordFormSchema: FormSchema<NewPasswordModel> = {
  password: yup
    .string()
    .required("Please enter a new password")
    .min(8, "Password must have at least 8 digits")
};

export default function NewPasswordForm({ onSubmit }: NewPasswordFormProps) {
  return (
    <>
      <div className="text-center mb-6 text-md">
        Welcome to Kaayu! In order to create your account you will need to set
        up a new password
      </div>
      <Form<NewPasswordModel>
        onSubmit={onSubmit}
        schema={newPasswordFormSchema}
        mode="onChange"
      >
        <FormFieldText
          name="password"
          placeholder="New password"
          type="password"
          prefix={<LockOutlined />}
        />
        <Button className="mt-3" type="primary" htmlType="submit" fullWidth>
          Update password
        </Button>
      </Form>
    </>
  );
}
