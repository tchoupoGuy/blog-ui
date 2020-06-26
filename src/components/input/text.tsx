import React, { ReactNode } from "react";
import { Input } from "antd";

export type InputType = "email" | "number" | "password" | "tel" | "text";

export interface TextInputProps {
  onChange?: () => void;
  placeholder?: string;
  prefix?: ReactNode;
  value?: string;
  type?: InputType;
  name?: string;
}

export default function TextInput({
  onChange,
  placeholder,
  prefix,
  type = "text",
  value,
  name
}: TextInputProps) {
  const Element = type === "password" ? Input.Password : Input;

  return (
    <Element
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      prefix={prefix}
      size="large"
      type={type}
      value={value}
    />
  );
}
