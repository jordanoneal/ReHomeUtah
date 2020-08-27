import { useEffect } from "react";
import useUserState from "./useUserState";
import { useHistory } from "react-router-dom";
import { User } from "../recoil/userAtom";

type useForceUserLoginReturnType = [
  User | undefined,
  (user: User) => void,
  () => void,
  () => void
];

export default function useForceUserLogin(): useForceUserLoginReturnType {
  const userState = useUserState();
  const [user] = userState;
  const history = useHistory();

  useEffect(() => {
    if (user === false) {
      //track where we were
      //redirect to login
      history.replace({
        pathname: "/login",
        state: { nextPathname: history.location.pathname },
      });
    }
  });

  return userState as useForceUserLoginReturnType;
}
