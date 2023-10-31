import axios from "axios";
import { auth, user } from "./url";

const authFetch = axios.create({
  baseURL: auth,
  headers: {
    accept: "application/json",
  },
});

export default authFetch;

export const userFetch = axios.create({
  baseURL: user,
  headers: {
    accept: "application/json",
  },
});
