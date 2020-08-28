import axios from "axios";
import { User } from "../recoil/userAtom";
import {ISellerDetails } from "../../../interfaces/sellerDetails"

export default {
  getUser: () => axios.get("/api/user"),
  postUser: (user: User) => axios.post("/api/saveuser", user),
  logIn: () => axios.get("/auth/google"),
  logOut: () => axios.get("/auth/logout"),
  getServices: () => axios.get("/api/services"),
  // postSeller: (seller: ISellerDetails) => axios.post("/api/savesellerdetails", seller)
  postSeller: (seller: ISellerDetails) => axios.post("/api/savesellersdetails", seller),
};
