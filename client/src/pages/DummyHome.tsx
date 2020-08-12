import React, { useEffect } from "react";
import useUserState from "../utils/useUserState";

export default function DummyHome() {
  const [user] = useUserState();
  useEffect(() => console.log(user), [user]);

  return (
    <div>
      <h1>DUMMY HOME PAGE</h1>
    </div>
  );
}
