import axios from "axios";
import { User } from "../recoil/userAtom";

export default {
  getUser: () => axios.get("/api/user"),
  postUser: (user: User) =>
    axios({
      method: "POST",
      data: user,
      url: "/api/saveuser",
    }),
};
