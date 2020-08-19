import React, { useEffect, useCallback } from "react";
import { useRecoilState } from "recoil";
import { userState, User } from "../recoil/userAtom";
import API from "../utils/API";
import { useState } from "react";

export default function useUserState(): [
  User | undefined | false,
  (user: User) => void,
  () => void,
  () => void
] {
  const [user, setUser] = useRecoilState(userState);

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

  const login = useCallback(async () => {
    const strWindowFeatures =
      "toolbar=no, menubar=no, width=600, height=700, top=100, left=100";
    const messageListener = (e: MessageEvent) => {
      if (e.data === "auth popup closed") {
        window.removeEventListener("message", messageListener);
        getUser();
      }
    };
    window.addEventListener("message", messageListener);
    const popupWindow = window.open(
      "/auth/google",
      "_blank",
      strWindowFeatures
    );
  }, [getUser]);

  const logout = useCallback(async () => {
    await API.logOut();
    getUser();
  }, [getUser]);

  return [user, postUser, login, logout];
}
