import React, { useEffect, useState } from "react";
import useUserState from "../utils/useUserState";

const [user] = useUserState();

export default function LogInLogBtn() {
  return (
    <div>
      <button type="button" className={user ? "btn-primary" : "btn-danger"}>
        {user ? "Login" : "Logout"}
      </button>
    </div>
  );
}
