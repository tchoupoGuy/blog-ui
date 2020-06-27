import React, { useMemo } from "react";

import { useAuthFlow } from "../../modules/authentication/use-auth-flow";
import Title from "../../components/typography/title";
import SignInForm from "../../modules/authentication/components/sign-in";
import NewPasswordForm from "../../modules/authentication/components/new-password";
import { AuthStatus } from "../../modules/authentication/types";

export default function Authentication() {
  const { authStatus, handleNewPasswordChange, handleSignIn } = useAuthFlow();

  const AuthComponent = useMemo(() => {
    switch (authStatus) {
      case AuthStatus.NO_AUTH:
        return <SignInForm onSubmit={handleSignIn} />;
      case AuthStatus.NEEDS_PASSWORD_CHANGE:
        return <NewPasswordForm onSubmit={handleNewPasswordChange} />;
    }
  }, [authStatus, handleNewPasswordChange, handleSignIn]);

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <Title level={2}>GUY BLOG</Title>
      <div className="w-11/12 max-w-sm">{AuthComponent}</div>
    </div>
  );
}
