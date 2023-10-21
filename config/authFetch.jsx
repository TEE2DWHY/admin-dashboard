import axios from "axios";
import { auth } from "./url";

const authFetch = axios.create({
  baseURL: auth,
  headers: {
    accept: "application/json",
  },
});

export default authFetch;
