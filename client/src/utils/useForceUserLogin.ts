import { useEffect } from "react";
import useUserState, { UserStateData } from "./useUserState";
import { useHistory } from "react-router-dom";
import { User } from "../recoil/userAtom";

export interface ForcedUserStateData extends UserStateData {
  user: User | undefined;
}
export default function useForceUserLogin(): ForcedUserStateData {
  const userState = useUserState();
  const {user} = userState;
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

  return userState as ForcedUserStateData;
}
