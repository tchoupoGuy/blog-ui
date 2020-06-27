import React from "react";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import * as yup from "yup";

import { SignInModel } from "../../../modules/authentication/types";
import Form from "../../../components/form";
import Button from "../../../components/button";
import FormFieldText from "../../../components/form/field/text";

const signInFormSchema = {
  email: yup.string().email("Email is required").required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Enter a valid password")
};

interface SignInFormProps {
  onSubmit: (data: SignInModel) => void;
}

export default function SignInForm({ onSubmit }: SignInFormProps) {
  return (
    <Form<SignInModel>
      onSubmit={onSubmit}
      schema={signInFormSchema}
      mode="onChange"
    >
      <FormFieldText
        name="email"
        placeholder="Email"
        prefix={<UserOutlined />}
      />
      <FormFieldText
        name="password"
        placeholder="Password"
        type="password"
        prefix={<LockOutlined />}
      />
      <Button className="mt-2" type="primary" htmlType="submit" fullWidth>
        Sign in
      </Button>
    </Form>
  );
}
