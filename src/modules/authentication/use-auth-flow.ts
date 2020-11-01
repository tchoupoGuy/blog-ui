import { useCallback, useState } from "react";
import { AuthAPI } from "../../api/api";

import {
  AuthStatus,
  NewPasswordModel,
  SignInModel,
} from "../../modules/authentication/types";
import { delay } from "../../utils/misc";

const AUTH_DELAY = 1000;

export function useAuthFlow() {
  const [authStatus, setAuthStatus] = useState<AuthStatus>(AuthStatus.NO_AUTH);
  const [authUser, setAuthUser] = useState(null);

  const handleSignIn = useCallback(async ({ email, password }: SignInModel) => {
    await delay(AUTH_DELAY);

    try {
      const user = await AuthAPI.signIn({ username: email, password });
      //   const { challengeName } = user;
      // const challengeName = "NEW_PASSWORD_REQUIRED";
      if (user) {
        setAuthUser(user);
        setAuthStatus(AuthStatus.NEEDS_PASSWORD_CHANGE);
        return;
      }
    } catch (err) {
      setAuthStatus(AuthStatus.NO_AUTH);
    }
  }, []);

  const handleNewPasswordChange = useCallback(
    async ({ password }: NewPasswordModel) => {
      await delay(AUTH_DELAY);

      try {
        // await Auth.completeNewPassword(authUser, password, {});
        console.log(password);
      } catch (err) {
        setAuthStatus(AuthStatus.NO_AUTH);
      }
    },
    [authUser]
  );

  return { handleSignIn, handleNewPasswordChange, authStatus };
}
