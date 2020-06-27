import React, { ReactNode } from "react";
import { useSelector } from "react-redux";

import { selectIsUserAuthenticated } from "../authentication/selectors";
import Authentication from "../../modules/authentication/container";

interface WithAuthProps {
  children: ReactNode;
}

export default function WithAuth({ children }: WithAuthProps) {
  const isAuthenticated = useSelector(selectIsUserAuthenticated);

  if (!isAuthenticated) {
    return <Authentication />;
  }

  return <>{children}</>;
}
