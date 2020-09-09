import { useEffect, useCallback } from "react";
import { useRecoilState } from "recoil";
import { userState, User } from "../recoil/userAtom";
import API from "../utils/API";
import { useHistory } from "react-router";

export interface UserStateData {
  user: User | undefined | false;
  postUser(user: User): void;
  googleLogin(): void;
  logout(): void;
}
export default function useUserState(): UserStateData {
  const [user, setUser] = useRecoilState(userState);
  const history = useHistory();

  const getUser = useCallback(async () => {
    const { data } = await API.getUser();
    console.log(data);
    setUser(!!data && new User(data));
  }, [setUser]);

  useEffect(() => {
    if (!user) {
      getUser();
    }
  }, [user, getUser]);

  const postUser = useCallback(
    async (user) => {
      await API.postUser(user);
      getUser();
    },
    [getUser]
  );

  const googleLogin = useCallback(async () => {
    const strWindowFeatures =
      "toolbar=no, menubar=no, width=600, height=700, top=100, left=100";
    const messageListener = async (e: MessageEvent) => {
      if (e.data === "auth popup closed") {
        window.removeEventListener("message", messageListener);
        await getUser();
        history.replace({
          pathname: (history.location?.state as {nextPathname?: string} | undefined)?.nextPathname || '/'
        })
      }
    };
    window.addEventListener("message", messageListener);
    window.open(
      "/auth/google",
      "_blank",
      strWindowFeatures
    );
  }, [getUser, history]);

  const logout = useCallback(async () => {
    await API.logOut();
    getUser();
  }, [getUser]);

  return {user, postUser, googleLogin, logout};
}