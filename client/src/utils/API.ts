import axios from "axios";
import { User } from "../recoil/userAtom";

export default {
  getUser: () => axios.get("/api/user"),
  postUser: (user: User) => axios.post('/api/saveuser', user),
  logIn: () => axios.get("/auth/google"),
  logOut: () => axios.get("/auth/logout"),
  getServices: () => axios.get("/api/services")
};
