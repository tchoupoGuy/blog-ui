// import { Hub, Auth } from 'aws-amplify';

import { auth } from "../../modules/authentication/store";

export function initializeAuth(dispatch: any) {
  // Hydrate the initial auth status
  //   Auth.currentUserInfo()
  //     .then((user) => dispatch(auth.authenticated(user)))
  //     .catch(() => ({}));
  //   // Start the auth listener
  //   Hub.listen('auth', (eventData) => {
  //     const { payload } = eventData;
  //     const { event, data } = payload;
  //     switch (event) {
  //       case 'signIn':
  //         dispatch(auth.authenticated(data));
  //         break;
  //       case 'signOut':
  //         dispatch(auth.signOut());
  //         break;
  //     }
}
// }
