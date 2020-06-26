import React, { ReactNode } from "react";
import { Button as AntButton } from "antd";

interface ButtonProps {
  children: ReactNode;
  fullWidth?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: "default" | "primary" | "ghost" | "link";
  htmlType?: "button" | "submit" | "reset";
  className?: string;
}

export default function Button({
  children,
  className,
  fullWidth,
  htmlType = "button",
  loading,
  onClick,
  type = "default"
}: ButtonProps) {
  return (
    <AntButton
      className={className}
      htmlType={htmlType}
      block={fullWidth}
      loading={loading}
      onClick={onClick}
      shape="round"
      size="large"
      type={type}
    >
      {children}
    </AntButton>
  );
}
