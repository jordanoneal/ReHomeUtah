import React, { useEffect, useCallback } from "react";
import { useRecoilState } from "recoil";
import { userState, User } from "../recoil/userAtom";
import API from "../utils/API";

export default function useUserState(): [
  User | undefined,
  (user: User) => void,
  () => void,
  () => void
] {
  const [user, setUser] = useRecoilState(userState);

  const getUser = useCallback(async () => {
    const { data } = await API.getUser();
    console.log(data);
    setUser(data && new User(data));
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

  const login = useCallback(async () => {
    const { data } = await API.logIn();
    data && getUser()
  }, [getUser]);

  const logout = useCallback(async () => {
    await API.logOut();
    getUser();
  }, [getUser]);

  return [user, postUser, login, logout];
}
